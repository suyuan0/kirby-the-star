<script lang="ts" setup>
import * as echarts from "echarts";
import { onMounted } from "vue";
import {mapInit} from './map'

onMounted(() => {
  mapInit()
});
</script>

<template>
  <div id="main" class="map"></div>
</template>

<style lang="less" scoped>
  .map{
    width: 1000px;
    height: 800px;
  }
</style>
