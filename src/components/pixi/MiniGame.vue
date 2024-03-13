<script lang="ts" setup>
import * as PIXI from "pixi.js";
import { onMounted } from "vue";

let p5Arr: any = [];
for (let i2 = 1; i2 <= 52; i2++) {
  let temp2 = "../../../src/assets/img/pixi/vortex/x" + i2 + ".png";
  p5Arr.push(temp2);
}
function test() {
  animatedCapguy.stop();
}
let animatedCapguy = new PIXI.AnimatedSprite.fromFrames(p5Arr);

onMounted(() => {
  let app = new PIXI.Application({ width: 1900, height: 1000 });
  document.body.appendChild(app.view);

  const capguyFrames = [
    "../../../src/assets/img/pixi/capguy/walk_01.png",
    "../../../src/assets/img/pixi/capguy/walk_02.png",
    "../../../src/assets/img/pixi/capguy/walk_03.png",
    "../../../src/assets/img/pixi/capguy/walk_04.png",
    "../../../src/assets/img/pixi/capguy/walk_05.png",
    "../../../src/assets/img/pixi/capguy/walk_06.png",
    "../../../src/assets/img/pixi/capguy/walk_07.png",
    "../../../src/assets/img/pixi/capguy/walk_08.png",
  ];

  // 加载图片资源
  PIXI.Loader.shared
    .add("move", "../../../src/assets/img/pixi/121.json")
    .load(onResourceLoaded).load(animatedCapguy);

  function onResourceLoaded(loader: any, resources: any) {
    // create an animated sprite

    // configure + start animation:
    animatedCapguy.animationSpeed = 1/10; 
    animatedCapguy.loop= false
    animatedCapguy.play();

    app.stage.addChild(animatedCapguy);

    // app.ticker.add(delta => gameLoop(delta));

    // function gameLoop(delta) {
    //   animatedCapguy.x = (animatedCapguy.x + 5*delta) % (600 + 200);
    // }
  }
});
</script>

<template>
  <div id="game"></div>
</template>

<style lang="less" scoped></style>
