<script lang="ts" setup>
import { ref } from "vue";
import { useAnimation } from "../stores/animation";

const animation = useAnimation();

const a = ref(animation.baseImg);

var maxWidth = 1950 / 50;
var maxHeight = 1050 / 50;
</script>

<template>
  <div id="box" style="">
    <div class="row" v-for="(i, IIndex) in maxHeight " :key="IIndex">
        <!-- v-animation -->
      <div
        class="col animationBox"
        v-for="(j, JIndex) in maxWidth"
        :key="JIndex"
        :style="'background-position:-'+ (JIndex) * 50 +'px -'+((IIndex) *50) +'px'"
      ></div>
    </div>
  </div>
</template>

<style lang="less">
#box {
  width: 1920px;
  height: 1080px;
  margin: 0 auto;
  background-size: cover;
  overflow: hidden;
  position: absolute;
}

.col {
  width: 50px;
  height: 50px;
  outline: 1px solid #000;
  background:v-bind(a);
  background-size: 1920px 1080px;
  z-index: 101;
}

.row {
  width: 1920px;
  height: 50px;
  display: flex;
}

.animationBox {
  animation: myfirst 2s;
  animation-timing-function:cubic-bezier(0, 0.85, 0.96, 0.64);
}

@keyframes myfirst {
  0% {
    transform: translateY(0) rotate(0deg);
  }
  
  75% {
    transform: translateY(919px) rotate(90deg);
  }

  90% {
    transform: translateY(700px) rotate(180deg);
    opacity:1
  }
  
  100% {
    transform: translateY(1000px) rotate(270deg);
    opacity:0
  }
}


</style>
