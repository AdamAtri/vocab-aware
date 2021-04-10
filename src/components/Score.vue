<template>
  <div class="score">
    Score: {{ score }}
  </div>
</template>

<script lang="ts">
  import { Vue } from 'vue-property-decorator';
  
  export default class Score extends Vue {
    public get score():number {
      return 420
    }
  } 
</script>

<style lang="stylus">

</style>