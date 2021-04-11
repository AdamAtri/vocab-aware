<template>
  <div class="score">
    Score: {{ score }}
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  @Component({})
  export default class Score extends Vue {
    @Prop({default: 420}) score?:number;
  } 
</script>

<style lang="stylus">

</style>