import Vuex, { Store } from 'vuex';
import { WordStore } from './word-model';

type Game = {
  answers: Array<string>,
  correct: Array<string>,
  incorrect: Array<string>,
  currentOptions?: Array<string>
}

export class GameStore {

  private static _instance?:Store<Game>;
  public static get game():Store<Game> {
    if (! GameStore._instance) {
      GameStore._instance = new Vuex.Store({
        state: {
          answers: new Array<string>(),
          correct: new Array<string>(),
          incorrect: new Array<string>(),
          currentOptions: new Array<string>()
        },
        getters: {
          score: state => {
            return state.correct.length
          },
          options: state => {
            return state.currentOptions
          }
        },
        mutations: {
          answer(state, ans:string):void {
            state.answers.push(ans);
            if (ans === WordStore.store.state.word) 
              state.correct.push(ans);
            else
              state.incorrect.push(ans);
          },
          options(state, opts:Array<string>):void {
            state.currentOptions = opts;
          }
        }
      })
    }
    return GameStore._instance;
  }

  public static clear():void {
    GameStore._instance = undefined;
  }
}