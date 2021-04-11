<template>
  <div class="answers">
    <button v-for="answer in answers" 
      class="answer-btn"
      v-bind:key="answer" 
      v-on:click.prevent="onClick(answer)"
    >
      {{answer}}
    </button>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component({ })
  export default class Answers extends Vue {
    @Prop({default:['answer 1', 'answer 2', 'answer 3', 'answer 4']})
    public answers!:Array<string>;

    @Prop() public onAnswerCallback!:(text:string)=>void;

    onClick(text:string):void {
      if (typeof(this.onAnswerCallback) === 'function')
        this.onAnswerCallback(text);
    }
  } 
</script>

<style lang="stylus">
  border-radius()
    -webkit-border-radius: arguments
    -moz-border-radius: arguments
    border-radius: arguments
  
  .answer-btn
    height: 3em
    width: 12em
    border-radius: 8px
</style>