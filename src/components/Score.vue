<template>
  <div class="score">
    Score: {{ score }}
  </div>
</template>

<script lang="ts">
  import { GameStore } from '@/store/game-store';
  import { Component, Vue } from 'vue-property-decorator';

  @Component({})
  export default class Score extends Vue {
    public get score():number {
      return GameStore.game.getters.score;
    }
  } 
</script>

<style lang="stylus">

</style>