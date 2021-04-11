<template>
  <div class="question">
    <ul>
      <li v-for="q in question" v-bind:key="q.word">
        <i>({{ q.partOfSpeech }})</i>&nbsp;{{ q.definition }}
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

</style>