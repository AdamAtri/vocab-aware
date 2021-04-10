<template>
  <div class="question">
    <h1>{{ question }}</h1>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  @Component({
    
  })
  export default class Question extends Vue {
    @Prop({default: 'what is the capital of Djabuti?'}) question?:string;
  } 
</script>

<style lang="stylus">

</style>