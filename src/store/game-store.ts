/* eslint-disable @typescript-eslint/no-explicit-any */

import Vuex, { Store, StoreOptions } from 'vuex';
import { Word, WordStore } from './word-model';
import words from '@/assets/words.json';
import {getWordDef} from '@/data/words-api';
import { AxiosResponse } from 'axios';

export enum GameType {
  DEFINITION = 'select the word that fits the definition',
  WORD = 'select the definition that fits the word'
}
export enum GameState {
  NEW = 'new-game',
  ASKING = 'asking-question',
  CORRECT = 'answered-correctly',
  INCORRECT = 'answered-incorrectly',
  FINISHED = 'game-finished'
}

type Game = {
  type: GameType
  answers: Array<string>
  correct: Array<string>
  incorrect: Array<string>
  currentOptions: Array<string>
  gameState: GameState
}

export class GameStore {

  private static _instance?:Store<Game>;
  public static get game():Store<Game> {
    if (! GameStore._instance) {
      GameStore.makeGame();
    }
    return GameStore._instance as Store<Game>;
  }

  /**
   * @static
   * @function makeGame
   * @param type - the game type (defaults to DEFININTION)
   */
  public static makeGame(type?:GameType):void {
    const defautOptions:StoreOptions<Game> = {
      state: {
        type: type || GameType.DEFINITION,
        answers: new Array<string>(),
        correct: new Array<string>(),
        incorrect: new Array<string>(),
        currentOptions: new Array<string>(),
        gameState: GameState.NEW
      },
      getters: {
        score: state => {
          return state.correct.length
        },
        answers: state => {
          return state.currentOptions
        },
        question: () => {
          return WordStore.store.state.results;
        }
      },
      mutations: {
        // record the user's answer for the current question
        answer(state, ans:string):void {
          state.answers.push(ans);
          if (ans === WordStore.store.state.word) {
            state.correct.push(ans);
            state.gameState = GameState.CORRECT;
          }
          else {
            state.incorrect.push(ans);
            state.gameState = GameState.INCORRECT;
          }
        },
        // set the current options
        options(state, opts:Array<string>):void {
          state.currentOptions = opts;
          state.gameState = GameState.ASKING;
        }
      }
    }
    
    GameStore._instance = new Vuex.Store(defautOptions);
  }

  public static get gameState():GameState {
    return GameStore.game.state.gameState
  }

  /**
   *  @static
   *  @function clear
   *  tears down the current game store
   */
  public static clear():void {
    // todo: persist game data
    GameStore._instance = undefined;
  }

  /**
   *  @static
   *  @function nextQuestion
   *  prepares the next question for the game
   *  
   *  @returns Promise<void>
   */
  public static async nextQuestion():Promise<void> {
    const nextAnswers:Array<string> = [];
    while (nextAnswers.length < 4) {
      const word = words[Math.floor(Math.random()*words.length)]
      if (nextAnswers.indexOf(word) < 0)
        nextAnswers.push(word);
    }
    await GameStore.setAnswer(nextAnswers);
    GameStore.game.commit('options', nextAnswers)
  }

  /**
   *  @static
   *  @function setAnswer
   *  prepares the answer for the next question
   * 
   *  @returns Promise<void>
   */
  public static async setAnswer(nextAnswers:Array<string>):Promise<void> {
    const nextWord = nextAnswers[Math.floor(Math.random()*nextAnswers.length)];
    const response:AxiosResponse<any> = await getWordDef(nextWord);
    WordStore.store.commit('word', response.data as Word)
  }
}