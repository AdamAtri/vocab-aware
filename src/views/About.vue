<template>
  <div class="about">
    <h1>stuff you should know</h1>
    <Score />
    <Question />
    <Answers />
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import Score from '@/components/Score.vue';
  import Question from '@/components/Question.vue';
  import Answers from '@/components/Answers.vue';
  @Component({
    components: {
      Score, Question, Answers
    },
  })
  export default class About extends Vue { } 
</script>

<style lang="stylus">

</style>