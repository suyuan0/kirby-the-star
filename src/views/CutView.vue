<script lang="ts" setup>
import Animation from "./Animation.vue";
import { useAnimation } from '../stores/animation'
import { onMounted, ref } from "vue";

const animation = useAnimation()

function getImg() {
    var canvas = document.createElement("canvas");

    document.body.appendChild(canvas);

    canvas.width = window.innerWidth - 20;
    canvas.height = window.innerHeight - 9;

    // 获取当前页面内容并绘制到Canvas上
      html2canvas(document.body, {scale: 0.1,}).then(function (canvas) {
        let baseImg = canvas.toDataURL()
        baseImg = `url(${baseImg})`
        animation.setBaseImg(baseImg)
        console.log(canvas)
      });
  }

onMounted(() => {
  setTimeout(() => {
    getImg();
  },500)
})


const isShow = ref(false)

const show = () => {
  isShow.value = true
  setTimeout(() => {
    isShow.value = false
  },3000)
}

</script>

<template>
  <div id="box"></div>
  <button style="position: absolute; z-index: 100;" @click="show">sjskdjskjdks</button>
  <Animation v-if="isShow" />
</template>

<style lang="less" scoped>
body {
  background: #939393;
}

#box {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background: url(../assets/img/login/1.jpeg) no-repeat;
  background-size: cover;
  overflow: hidden;
  position: absolute;
}
</style>


