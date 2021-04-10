<template>
  <div class="answers">
    <div v-for="answer in answers" v-bind:key="answer">
      <h3>{{answer}}</h3>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  @Component({
    
  })
  export default class Answers extends Vue {
    @Prop({default:['answer 1', 'answer 2', 'answer 3', 'answer 4']})
    public answers?:Array<string>;
  } 
</script>

<style lang="stylus">

</style>