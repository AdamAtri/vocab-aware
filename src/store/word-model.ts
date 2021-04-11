/* eslint-disable @typescript-eslint/no-explicit-any */
import Vuex, { Store } from 'vuex'


export type Word = {
  frequency:number;
  pronunciation:any;
  results:Array<WordDef>;
  syllables:any;
  word:string;
}

export type WordDef = {
  definition:string; //"describe or portray the character or the qualities or peculiarities of",
  partOfSpeech:string; //"verb",
  synonyms:Array<string>; //["characterise","qualify"],
  typeOf:Array<string>; //["think of","remember"],
  hasTypes:Array<string>; // ["differentiate","mark","stamp","distinguish"],
  derivation:Array<string>; //["character","characterization"],
  examples:Array<string>;
  // [
  //   "You can characterize his behavior as that of an egotist",
  //   "This poem can be characterized as a lament for a dead lover"
  // ]
}

export class WordStore {
  private static _instance = new Vuex.Store<Word>({
    state: {
      frequency: NaN,
      pronunciation: undefined,
      results: [],
      syllables: undefined,
      word: '',
    },
    mutations: {
      word(state, newWord:Word):void {
        state.frequency = newWord.frequency;
        state.pronunciation = newWord.pronunciation;
        state.results = newWord.results;
        state.syllables = newWord.syllables;
        state.word = newWord.word;
      }
    }

  });
  public static get store(): Store<Word> {
    return WordStore._instance;
  } 

}


