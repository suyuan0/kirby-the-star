<script lang="ts" setup></script>

<template>
  <div class="header"></div>
  <div class="left">
    <div class="character">
      <div class="equip-left">
        <div class="equip" v-for="i in 4" :key="i"></div>
      </div>
      <div class="character-img"></div>
      <div class="equip-right">
        <div class="equip" v-for="i in 4" :key="i"></div>
      </div>
    </div>
    <div class="character-skill"></div>
  </div>
  <div class="right">
    <div class="list"></div>
    <div class="baby-info">
      <div class="info"></div>
      <div class="skill"></div>
      <div class="star-map"></div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.header {
  height: 80px;
  background-color: yellowgreen;
}
.left {
  float: left;
  width: 900px;
  height: 900px;
  background-color: pink;

  .character {
    display: flex;

    .equip-left {
      width: 150px;
      height: 600px;
      background-color: aquamarine;

      .equip{
        width: 150px;
        height: 150px;
        margin: 0;
        padding: 0;
      }
    }
    .character-img {
      width: 600px;
      height: 600px;
      background-color: black;
    }
    .equip-right {
      width: 150px;
      height: 600px;
      background-color: aquamarine;

      .equip{
        width: 150px;
        height: 150px;
        margin: 0;
        padding: 0;
      }
    }
  }
}
.right {
  float: right;
  width: 1000px;
  height: 900px;
  display: flex;

  .list{
    width: 350px;
    height: 900px;
    background-color: purple;
  }

  .baby-info{
    width:660px ;
    height: 900px;
    background-color: crimson;
    display: flex;
    flex-direction: column;
    .info{
      height: 450px;
      width:100%;
      background-color: dodgerblue;
    }

    .skill{
      width: 100%;
      height: 220px;
      background-color: hotpink;
    }
  }
}
</style>
