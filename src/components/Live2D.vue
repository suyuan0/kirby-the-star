<script setup lang="ts">
// import { init } from '@/utils/live2dInit'
import { onMounted, ref } from "vue";

import * as PIXI from "pixi.js";
import { Live2DModel, MotionPreloadStrategy, InternalModel } from "pixi-live2d-display";

import reloadIcon from "../components/icon/reloadIcon.vue";

const model1 = "../../src/assets/model2/HK416_805/normal.model3.json";
const model2 = "../../src/assets/UG/ugofficial.model3.json";
const model3 = '../../src/assets/model2/231110/yili.model3.json'

// 挂载pixi
window.PIXI = PIXI;
async function init(modelURL: String) {
  // const model = await Live2DModel.from('https://cdn.jsdelivr.net/gh/guansss/pixi-live2d-display/test/assets/shizuku/shizuku.model.json', { motionPreload: MotionPreloadStrategy.NONE, })
  // 引入模型
  const model = await Live2DModel.from(modelURL, {
    motionPreload: MotionPreloadStrategy.NONE,
  });

  // 创建模型对象
  const app = new PIXI.Application({
    // 配置模型舞台
    view: document.getElementById("canvas_view") as HTMLCanvasElement,
    // 背景是否透明
    transparent: true,
    autoDensity: true,
    antialias: true,
    width: 400,
    height: 400,
  });

  // 添加模型到舞台
  app.stage.addChild(model);
  // 模型的缩放
  model.scale.set(0.1);
  // 模型的位置,x,y相较于窗口左上角
  model.x = 0;
  // 添加模型状态管理器
  const a = new InternalModel(model);
  model.InternalModel = a;
  // 绑定模型点击事件动作
  model.on("pointerdown", (hitAreas) => {
    // hitAreas:模型的一些上下文
    const { x, y } = hitAreas.data.global;
    const point = model.hitTest(x, y);
    model.motion("Tap", 0);
    // 设置表情
    // model.expression(num)
  });
  // model.idleMotionPriority = "TapHead"

  // 绑定模型拖拽方法
  // draggable(model)
  //添加模型范围遮罩
  // addFrame(model)
  /**
   * 模型区域范围遮罩
   * @param {Live2DModel} model -模型对象
   */
  function addFrame(model: any) {
    const foreground = PIXI.Sprite.from(PIXI.Texture.WHITE);
    foreground.width = model.internalModel.width;
    foreground.height = model.internalModel.height;
    foreground.alpha = 0.2;

    model.addChild(foreground);
    foreground.visible = true;
  }
  /**
   * 模型拖拽方法
   * @param {Live2DModel} model -模型对象
   */
  function draggable(model: any) {
    model.buttonMode = true;
    model.on("pointerdown", (e: any) => {
      model.dragging = true;
      model._pointerX = e.data.global.x - model.x;
      model._pointerY = e.data.global.y - model.y;
    });
    model.on("pointermove", (e: any) => {
      if (model.dragging) {
        model.position.x = e.data.global.x - model._pointerX;
        model.position.y = e.data.global.y - model._pointerY;
      }
    });

    model.on("pointerupoutside", () => (model.dragging = false));
    model.on("pointerup", () => (model.dragging = false));
  }

  // 查看模型触发区域
  const hitAreas = model.internalModel.hitAreas;
}

const live2dBtn = ref();

function MouseEvent() {
  live2dBtn.value.style.visibility = "visible";
  const childrenElement = live2dBtn.value.children;
  for (let i = 0; i < childrenElement.length; i++) {
    childrenElement[i].style.top = `${30 * i}px`;
  }
}

function mouseLeaveEvent() {
  const childrenElement = live2dBtn.value.children;
  for (let i = 0; i < childrenElement.length; i++) {
    childrenElement[i].style.removeProperty("top");
  }
  live2dBtn.value.style.visibility = "hidden";
}

onMounted(() => {
  init(model3);
});
</script>

<template>
  <div class="box1" @mouseenter="MouseEvent" @mouseleave="mouseLeaveEvent">
    <div ref="live2dBtn" class="live2d-btn" style="position: absolute">
      <div data-title="更换模型" @click="init(model1)" class="btn"><reloadIcon class="btn-icon" /></div>
      <div data-title="测试1" class="btn"><reloadIcon class="btn-icon" /></div>
      <div data-title="测试2" class="btn"><reloadIcon class="btn-icon" /></div>
      <div data-title="测试3" class="btn"><reloadIcon class="btn-icon" /></div>
    </div>

    <div class="tips">
      <div>测试文字测试文字测试</div>
    </div>


    <div class="live2d" style="width: 400px; height: 400px; overflow: hidden">
      <canvas id="canvas_view"></canvas>
    </div>
  </div>
</template>

<style scoped>
.live2d-btn {
  display: flex;
  visibility: hidden;
}
.btn {
  position: absolute;
  transition: all 0.3s;
  top: 0px;
  .btn-icon {
    width: 30px;
    height: 30px;
  }
}
.btn:hover:after {
    position:absolute;
    height: auto;
    width: 50px;
    top:-0px;
    left:35px;
    content:attr(data-title);
    color:blue;
    border:1px solid #242424;
    border-radius:2px ;
    background-color:pink;
}
.tips{
  position: absolute;
  left: 20%;
  color: #fff;
  height: 60px;
  width: 200px;
  background: rgba(5, 5, 66, 0.5);
  border: 1px solid #fff;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
}
</style>