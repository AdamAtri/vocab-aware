<template>
  <div class="question">
    <ul class="question-list">
      <li v-for="q in question" v-bind:key="q.word">
        <span class="list-item-part">({{ q.partOfSpeech }})</span>&nbsp;
        <span class="list-item">{{ q.definition }}</span>
      </li>
    </ul>
    
  </div>
</template>

<script lang="ts">
  import { WordDef } from '@/store/word-model';
  import { Component, Prop, Vue } from 'vue-property-decorator';
  @Component({})
  export default class Question extends Vue {
    @Prop() question?:Array<WordDef>;
  } 
</script>

<style lang="stylus">
  .question
    position relative

  .question-list
    width: 60%
    position relative
    left: 50%    
    transform: translate(-50%, 0)
    text-align: start
    li
      margin-top 1em
      .list-item-part
        font-weight: bolder
        font-style: italic
        font-size: .75em
      .list-item
        font-size: 1.25em

        
</style>