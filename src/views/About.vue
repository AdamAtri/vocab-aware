<template>
  <div class="about">
    <h1>stuff you should know</h1>
    <Score />
    <Question />
    <Answers :onAnswerCallback="_onAnswer"/>
  </div>
</template>

<script lang="ts">
  /* eslint-disable @typescript-eslint/no-explicit-any */
  import { Component, Vue } from 'vue-property-decorator';
  import Score from '@/components/Score.vue';
  import Question from '@/components/Question.vue';
  import Answers from '@/components/Answers.vue';
  import { GameState, GameStore } from '@/store/game-store';


  @Component({
    components: {
      Score, Question, Answers
    },
  })
  export default class About extends Vue { 
    mounted():void {
      console.log('mounted');
      if (GameStore.gameState === GameState.NEW)
        GameStore.nextQuestion();
    }

    public _onAnswer(text:string):void {
      GameStore.game.commit('answer', text);
      /*  */
      GameStore.nextQuestion();
    }   
  } 
</script>

<style lang="stylus">

</style>