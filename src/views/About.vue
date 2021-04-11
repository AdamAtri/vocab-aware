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
  import { WordDef, WordStore } from '@/store/word-model';
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
        GameStore.nextQuestion();
    }

    public _onAnswer(text:string):void {
      GameStore.game.commit('answer', text);
      /*  */
      GameStore.nextQuestion();
    }

    public get score():number {
      return GameStore.game.getters.score;
    }

    public get question():WordDef[] {
      return GameStore.game.getters.question;
    }
    
    public get answers():Array<string> {
      return GameStore.game.getters.options;
    }

    
  } 
</script>

<style lang="stylus">

</style>