<script lang="ts" setup>
import Kirby from "@/components/kirby/KirbyComponent.vue";
import aircraftIcon from "@/components/icon/aircraftIcon.vue";
import {gsap} from "gsap";
import { nextTick, onMounted, ref, type Ref } from "vue";

const aircraft:Ref<HTMLElement | null> = ref(null)
const iconButton:Ref<HTMLElement | null> = ref(null)

function animateText() {
			const tlJiggle = gsap.timeline({ 
				defaults: {
					duration: 0.1
				}
			});
			
			tlJiggle
				.to(aircraft.value, {
          x: 120,
          y: -500,
          rotation: -160,
          scale:2,
          duration: 1,
        })
        .to(aircraft.value, {
          x: -1200,
          y: 80,
          duration: 1,
          scale:8,
          opacity: 0
        })
        .to(aircraft.value, {
          x: 0,
          y: 0,
          scale:1,
          opacity: 1,
          rotation: 0,
        })
		}

onMounted(() => {
  iconButton.value!.addEventListener('click', () => {
    nextTick(animateText);
  })
})
</script>

<template>
  <div class="login">
    <div class="img"></div>
    <div class="form-box">
      <div class="form">
        <div style="width: 65%; float: left; height: 250px" class="input-box">
          <div class="input-wrap">
            <div v-if="emailText" class="input-text">
              <span
                v-for="(letter, index) in emailText"
                :key="index"
                class="input-text-letter"
                >{{ letter }}</span
              >
            </div>
            <div :class="{ disabled: emailIsDisabled }" class="dreamy-input">
              <label class="dreamy-input-label" for="dreamyInput">Email</label>
              <input
                id="dreamyInput"
                v-model="emailValue"
                :aria-describedby="isNotValid ? 'dreamyInputErr' : undefined"
                :disabled="emailIsDisabled"
                autocomplete="off"
                class="dreamy-input-control"
                type="email"
                @keydown.enter="submitMail"
              />
              <transition name="fade">
                <span v-if="isNotValid" id="dreamyInputErr" class="dreamy-input-error">
                  Please enter a valid email.
                </span>
              </transition>
              <button
                aria-label="Subscribe"
                class="dreamy-input-button"
                @click="submitMail"
              >
                <svg class="dreamy-input-button-svg" viewBox="0 0 35 35">
                  <path
                    class="dreamy-input-button-star"
                    d="M29.36,23.14l4.63-5.32c2.08-2.39,0.77-6.08-2.39-6.7l-5.23-1.02c-0.23-0.05-0.44-0.19-0.56-0.39l-4.67-7.7 c-1.64-2.69-5.64-2.69-7.27,0l-4.67,7.7c-0.12,0.2-0.33,0.34-0.56,0.39L3.4,11.13c-3.16,0.62-4.47,4.31-2.39,6.7l4.63,5.32 c0.17,0.2,0.24,0.47,0.18,0.73L4.31,29.9c-0.83,3.32,2.61,6.12,5.82,4.74l7.03-3.03c0.22-0.09,0.47-0.09,0.68,0l7.03,3.03 c3.21,1.38,6.65-1.42,5.82-4.74l-1.51-6.04C29.12,23.61,29.18,23.34,29.36,23.14z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div class="input-wrap">
            <div v-if="emailText" class="input-text">
              <span
                v-for="(letter, index) in emailText"
                :key="index"
                class="input-text-letter"
                >{{ letter }}</span
              >
            </div>
            <div :class="{ disabled: emailIsDisabled }" class="dreamy-input">
              <label class="dreamy-input-label" for="dreamyInput">Email</label>
              <input
                id="dreamyInput"
                v-model="emailValue"
                :aria-describedby="isNotValid ? 'dreamyInputErr' : undefined"
                :disabled="emailIsDisabled"
                autocomplete="off"
                class="dreamy-input-control"
                type="email"
                @keydown.enter="submitMail"
              />
              <transition name="fade">
                <span v-if="isNotValid" id="dreamyInputErr" class="dreamy-input-error">
                  Please enter a valid email.
                </span>
              </transition>
              <button
                aria-label="Subscribe"
                class="dreamy-input-button"
                @click="submitMail"
              >
                <svg class="dreamy-input-button-svg" viewBox="0 0 35 35">
                  <path
                    class="dreamy-input-button-star"
                    d="M29.36,23.14l4.63-5.32c2.08-2.39,0.77-6.08-2.39-6.7l-5.23-1.02c-0.23-0.05-0.44-0.19-0.56-0.39l-4.67-7.7 c-1.64-2.69-5.64-2.69-7.27,0l-4.67,7.7c-0.12,0.2-0.33,0.34-0.56,0.39L3.4,11.13c-3.16,0.62-4.47,4.31-2.39,6.7l4.63,5.32 c0.17,0.2,0.24,0.47,0.18,0.73L4.31,29.9c-0.83,3.32,2.61,6.12,5.82,4.74l7.03-3.03c0.22-0.09,0.47-0.09,0.68,0l7.03,3.03 c3.21,1.38,6.65-1.42,5.82-4.74l-1.51-6.04C29.12,23.61,29.18,23.34,29.36,23.14z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="form-right">
          <Kirby />
        </div>
        <div ref="iconButton" class="icon-button">
          <span>登</span>
          <div ref="aircraft" class="icon"><aircraftIcon class="icon_1"  /></div>
          <span>录</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import url("../../src/assets/less/login.less");

.input-box {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

.icon-button {
  width: 150px;
  border: 1px solid black;
  height: 40px;
  border-radius: 60px;
  position: relative;
  border-top: none;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: space-around;
  align-items: center;
}
.icon_1{
  width: 50px;
  height: 50px;
}
.icon {
  width: 50px;
  height: 50px;
  position: absolute;
  top:-25px;
}

.form-right {
  width: 30%;
  height: 250px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  flex-wrap: nowrap;
}
</style>
