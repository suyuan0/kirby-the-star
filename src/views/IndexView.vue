<script lang="ts" setup>
import { onMounted, ref } from "vue";
import Sonwflake from "../components/icon/snowflakeIcon.vue";

const dynamicComponents = ref([
  {
    componentName: "Sonwflake",
    left: Math.random() * 1880 + 1,
    top: Math.random() * 30 + 1,
    class: "container",
    key: Math.random() * 9999 + 1,
  },
]);

let num = 1;

setInterval(() => {
  dynamicComponents.value.push({
    componentName: "Sonwflake",
    left: Math.random() * 1880 + 1,
    top: Math.random() * 30 + 1,
    class: "container",
    key: Math.random() * 9999 + 1,
  });
  num++;
  if (num > 20) {
    setTimeout(() => {
      dynamicComponents.value.shift();
      num--;
    }, Math.random() * 3000);
  }
}, Math.random() * 1000);

onMounted(() => {
  // 获取鼠标位置的元素
  const mousePosition = document.getElementById("mouse-position");

  // 添加鼠标移动事件监听器
  document.addEventListener("mousemove", function (event) {
    // 获取鼠标的当前位置
    const x = event.clientX;
    const y = event.clientY;
    // 将鼠标位置显示在元素中
    mousePosition!.style.left = x-50 + "px";
    mousePosition!.style.top = y-50 + "px";
  });
});
</script>

<template>
  <div v-for="item in dynamicComponents" :key="item.key">
    <Sonwflake
      ref="element"
      class="container"
      :style="{ left: item.left, top: item.top }"
    />
  </div>
  <!-- <div id="mouse-position"></div> -->
</template>

<style lang="less" scoped>

#mouse-position{
  width: 100px; 
  height: 100px; 
  position: absolute;
  background: radial-gradient(50% 50% at 50% 50%, #a19f9f 10%, rgba(136, 248, 97, 0.4) 58.41%, rgba(217, 217, 217, 0.00) 100%);
  border-radius: 90px;
}
.container {
  width: 30px;
  height: 30px;
  display: block;
  position: absolute;
  animation: myMove2 4s linear infinite;
}
.container1 {
  width: 30px;
  height: 30px;
  display: block;
  position: absolute;
  animation: myMove 4s linear infinite;
}

@keyframes myMove {
  0% {
    transform: translateY(0%) rotateX(45deg);
    opacity: 1;
  }

  10% {
    transform: translate(2%, 200%) rotateX(45deg);
  }

  50% {
    transform: translate(10%, 1000%) scale(2) rotateX(90deg) rotateY(90deg);
  }

  75% {
    transform: translate(20%, 1200%) scale(1) rotateX(135deg) rotateY(135deg);
  }

  99% {
    opacity: 0.9;
  }

  100% {
    transform: translateY(1940%) scale(0.5) rotateX(180deg) rotateY(180deg);
    opacity: 0;
  }
}

@keyframes myMove2 {
  0% {
    transform: translateY(0%) rotateX(45deg);
    opacity: 1;
  }

  10% {
    transform: translate(2%, 200%) rotateX(45deg);
  }

  50% {
    transform: translate(10%, 1000%) scale(2) rotateX(90deg) rotateY(90deg);
  }

  75% {
    transform: translate(20%, 1200%) scale(1) rotateX(135deg) rotateY(135deg);
  }

  99% {
    opacity: 0.9;
  }

  100% {
    transform: translateY(1940%) scale(0.5) rotateX(180deg) rotateY(180deg);
    opacity: 0;
  }
}
</style>
