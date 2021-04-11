<template>
  <div class="about">
    <h1>stuff you should know</h1>
    <Score :score="score" />
    <Question :question="question" />
    <Answers :answers="answers" :onAnswerCallback="_onAnswer"/>
  </div>
</template>

<script lang="ts">
  /* eslint-disable @typescript-eslint/no-explicit-any */
  import { Component, Vue } from 'vue-property-decorator';
  import Score from '@/components/Score.vue';
  import Question from '@/components/Question.vue';
  import Answers from '@/components/Answers.vue';
  import words from '@/assets/words.json';
  import {getWordDef} from '@/data/words-api';
  import { AxiosResponse } from 'axios';
  import { Word, WordDef, WordStore } from '@/store/word-model';
  import { GameStore } from '@/store/game-store';


  @Component({
    components: {
      Score, Question, Answers
    },
  })
  export default class About extends Vue { 
    mounted():void {
      console.log('mounted');
      if (!WordStore.store.state.word)
        this.resetAnswers();
    }

    public _onAnswer(text:string):void {
      GameStore.game.commit('answer', text);
      this.resetAnswers();
    }

    public get score():number {
      return GameStore.game.getters.score;
    }

    public get question():WordDef[] {
      return WordStore.store.state.results;
    }
    
    public get answers():Array<string> {
      return GameStore.game.getters.options;
    }

    resetAnswers():void {
      const nextAnswers:Array<string> = [];
      while (nextAnswers.length < 4) {
        const word = words[Math.floor(Math.random()*words.length)]
        if (nextAnswers.indexOf(word) < 0)
          nextAnswers.push(word);
      }
      this.setAnswer(nextAnswers);
      GameStore.game.commit('options', nextAnswers)
    }

    async setAnswer(nextAnswers:Array<string>):Promise<void> {
      const nextWord = nextAnswers[Math.floor(Math.random()*nextAnswers.length)];
      const response:AxiosResponse<any> = await getWordDef(nextWord);
      WordStore.store.commit('word', response.data as Word)
    }
  } 
</script>

<style lang="stylus">

</style>