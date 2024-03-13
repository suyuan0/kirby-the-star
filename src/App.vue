<script setup lang="ts">
import Live2D from './components/Live2D.vue';
import EchartsMap from './components/echarts/EchartsMap.vue';
import EchartsRadar from './components/echarts/EchartsRadar.vue';
import MiniGame from './components/pixi/MiniGame.vue'

</script>

<template>
  <!-- <EchartsMap /> -->
  <!-- <EchartsRadar /> -->
  <!-- <MiniGame /> -->
  <!-- <div style="z-index=999;bottom:1px;right:1px;width:400px;height:400px" v-draggable>
    <Live2D  />
  </div> -->
  <div class="common-layout">
    <router-view>
    </router-view>
  </div>
</template>

<style scoped>
  .app{
    background-color: #000;
    height: 1080px;
  }
</style>
