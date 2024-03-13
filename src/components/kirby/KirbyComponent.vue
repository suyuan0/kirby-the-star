<template>
  <div class="kirby-wrap">
    <svg id="kirby" class="kirby" viewBox="0 0 200 200">
      <use ref="star" href="#star" class="kirby-star-spit" />
      <defs>
        <path
          ref="bodySwallow"
          d="M167.58,120.58c0,18-6,30.75-62.29,29.58C49,149,43,138.58,43,120.58S70.89,85,105.29,85 S167.58,102.59,167.58,120.58z"
        ></path>
        <path
          id="star"
          class="kirby-star"
          d="M119.43,124.74l4.63-5.32a4.08,4.08,0,0,0-2.39-6.7l-5.23-1a.9.9,0,0,1-.56-.39l-4.67-7.69a4.28,4.28,0,0,0-7.27,0l-4.68,7.69a.85.85,0,0,1-.56.39l-5.23,1a4.09,4.09,0,0,0-2.39,6.7l4.63,5.32a.77.77,0,0,1,.18.72l-1.51,6a4.19,4.19,0,0,0,5.82,4.73l7-3a.89.89,0,0,1,.68,0l7,3a4.19,4.19,0,0,0,5.82-4.73l-1.51-6A.82.82,0,0,1,119.43,124.74Z"
        ></path>
      </defs>
      <g id="legLeft" ref="legRight">
        <ellipse class="kirby-foot" cx="90" cy="141.5" rx="23" ry="26"></ellipse>
        <ellipse class="kirby-stroke" cx="85" cy="141.5" rx="23" ry="26"></ellipse>
      </g>
      <g
        id="legRight"
        data-svg-origin="102 97.5"
        transform="matrix(1,0,0,1,0,0)"
        style="translate: none; rotate: none; scale: none; transform-origin: 0px 0px"
      >
        <ellipse class="kirby-foot" cx="138" cy="134.5" rx="23" ry="26"></ellipse>
        <ellipse class="kirby-stroke" cx="138" cy="129.5" rx="23" ry="26"></ellipse>
      </g>
      <g
        id="armLeft"
        ref="armLeft"
        data-svg-origin="100 97.5"
        transform="matrix(1,0,0,1,0,0)"
        style="translate: none; rotate: none; scale: none; transform-origin: 0px 0px"
      >
        <circle id="armLeft-2" class="kirby-body" cx="51.5" cy="76" r="20.5"></circle>
        <circle class="kirby-stroke" cx="50.5" cy="82" r="20.5"></circle>
      </g>
      <g
        id="body"
        ref="body"
        data-svg-origin="43 153"
        transform="matrix(1,0,0,1,0,0)"
        style="translate: none; rotate: none; scale: none; transform-origin: 0px 0px"
      >
        <path
          class="kirby-body"
          id="bodyFill"
          ref="bodyFill"
          d="M159,95.5 C159,127.25637 133.25637,153 101.5,153 69.74363,153 44,127.25637 44,95.5 44,63.74363 69.74363,38 101.5,38 133.25637,38 159,63.74363 159,95.5 z"
        ></path>
        <path
          class="kirby-stroke"
          id="bodyStroke"
          ref="bodyStroke"
          d="M158,91.5 C158,123.25637 132.25637,149 100.5,149 68.74363,149 43,123.25637 43,91.5 43,59.74363 68.74363,34 100.5,34 132.25637,34 158,59.74363 158,91.5 z"
        ></path>
      </g>
      <g
        id="armRight"
        ref="armRight"
        data-svg-origin="101 97.49999618530273"
        transform="matrix(1,0,0,1,0,0)"
        style="translate: none; rotate: none; scale: none; transform-origin: 0px 0px"
      >
        <path class="kirby-body" d="M141,58.73A20.5,20.5,0,1,1,154.68,94.5"></path>
        <path class="kirby-stroke" d="M136,58.73A20.5,20.5,0,1,1,149.68,94.5"></path>
      </g>
      <g
        id="face"
        ref="face"
        data-svg-origin="72 125.12000274658203"
        transform="matrix(1,0,0,1,0,0)"
        style="translate: none; rotate: none; scale: none; transform-origin: 0px 0px"
      >
        <path
          id="eyeRight"
          ref="eyeRight"
          class="kirby-eye"
          d="M84,84.53c0,5.8-1.57,9.47-3.5,9.47S77,90.33,77,84.53,78.57,73,80.5,73,84,78.73,84,84.53Z"
          data-svg-origin="80.5 90"
          transform="matrix(1,0,0,1,0,0)"
          style="translate: none; rotate: none; scale: none; transform-origin: 0px 0px"
        ></path>
        <path
          id="eyeLeft"
          ref="eyeLeft"
          class="kirby-eye"
          d="M68,84.53c0,5.8-1.57,9.47-3.5,9.47S61,90.33,61,84.53,62.57,73,64.5,73,68,78.73,68,84.53Z"
          data-svg-origin="64.5 90"
          transform="matrix(1,0,0,1,0,0)"
          style="translate: none; rotate: none; scale: none; transform-origin: 0px 0px"
        ></path>
        <path
          id="eyeRightClosed"
          ref="eyeRightClosed"
          class="kirby-stroke"
          d="M80.69,125.12c.37-1.41,1.89-3.8,4-6.35a22.84,22.84,0,0,1,5.61-5.14"
          data-svg-origin="85.49500274658203 125.12000274658203"
          transform="matrix(1,0,0,0,0,125.12)"
          style="translate: none; rotate: none; scale: none; transform-origin: 0px 0px"
        ></path>
        <path
          id="eyeLeftClosed"
          ref="eyeLeftClosed"
          class="kirby-stroke"
          d="M55.05,113.61c1.33.61,3.42,2.52,5.56,5.07a23.08,23.08,0,0,1,4.09,6.42"
          data-svg-origin="59.87499809265137 125.0999984741211"
          transform="matrix(1,0,0,0,0,125.1)"
          style="translate: none; rotate: none; scale: none; transform-origin: 0px 0px"
        ></path>
        <g ref="cheeks">
          <path
            id="cheekRight"
            class="kirby-blush kirby-stroke"
            d="M93,92.94A22.41,22.41,0,0,1,101.66,89l1.09,5.41s2.74-2.94,8.66-3.93"
          ></path>
          <path
            id="cheekLeft"
            class="kirby-blush kirby-blush-small kirby-stroke"
            d="M47,92.94A11,11,0,0,1,51.19,89l.52,5.41a8,8,0,0,1,4.19-3.93"
          ></path>
        </g>
      </g>
      <path
        id="mouth"
        ref="mouth"
        class="kirby-stroke"
        d="M77,98c0,1.93-2.12,3.5-4.5,3.5S68,99.93,68,98"
      ></path>
      <g
        id="mouthOpen"
        ref="mouthOpen"
        class="kirby-mouth-open"
        data-svg-origin="71 103"
        transform="matrix(0,0,0,0,71,103)"
        style="translate: none; rotate: none; scale: none; transform-origin: 0px 0px"
      >
        <path
          class="kirby-stroke kirby-mouth-open-inner"
          d="M94,105.69c0,14.36-11,23.31-22,23.31s-18-9-18-23.31S61,77,72,77,94,91.33,94,105.69Z"
        ></path>
        <path
          class="kirby-stroke kirby-mouth-open-tongue"
          d="M72,129a22,22,0,0,0,18.91-11.18C90,109.51,82.8,101.07,74,101.07c-9.39,0-17,9.6-17,18.41,0,.11,0,.21,0,.32A16.16,16.16,0,0,0,72,129Z"
        ></path>
      </g>
      <g
        id="mouthFull"
        ref="mouthFull"
        class="kirby-mouth-full"
        data-svg-origin="73.31500244140625 101.76000213623047"
        transform="matrix(0,0,0,0,73.315,101.76)"
        style="translate: none; rotate: none; scale: none; transform-origin: 0px 0px"
      >
        <path
          class="kirby-stroke"
          d="M68.45,101.5a6.42,6.42,0,0,1,4-1,7.1,7.1,0,0,1,4,1"
        ></path>
        <path
          class="kirby-stroke kirby-mouth-cheek"
          d="M78.07,106.19a5.17,5.17,0,0,1-1.2-4.75,5.63,5.63,0,0,1,2.76-4.11"
        ></path>
        <path
          class="kirby-stroke kirby-mouth-cheek"
          d="M67,99a4,4,0,0,1,1.5,2.76,4.31,4.31,0,0,1-.46,3.15"
        ></path>
      </g>
      <path
        id="mouthFrown"
        ref="mouthFrown"
        class="kirby-stroke"
        d="M70,133.5a2.2,2.2,0,0,1,2-1,2.4,2.4,0,0,1,2,1"
        data-svg-origin="72 132.99735260009766"
        transform="matrix(1,0,0,0,0,132.99735)"
        style="translate: none; rotate: none; scale: none; transform-origin: 0px 0px"
      ></path>
      <g
        id="hat"
        ref="hat"
        data-svg-origin="0 0"
        transform="matrix(0,0,0,0,0,0)"
        style="translate: none; rotate: none; scale: none; transform-origin: 0px 0px"
      ></g>
      <g
        id="envelope"
        ref="envelope"
        data-svg-origin="164.17000579833984 54"
        transform="matrix(0,0,0,0,164.17001,64)"
        style="translate: none; rotate: none; scale: none; transform-origin: 0px 0px"
      >
        <rect
          class="kirby-envelope"
          x="130.99"
          y="9"
          width="67.5"
          height="45"
          rx="10"
        ></rect>
        <rect
          class="kirby-stroke"
          x="129.85"
          y="3"
          width="67.5"
          height="45"
          rx="10"
        ></rect>
        <polyline class="kirby-stroke" points="131.85 10 163.6 31.5 195.35 10"></polyline>
        <path
          class="kirby-envelope-star kirby-stroke"
          ref="envelopeStar"
          d="M170,31l2.48-2.93a2.26,2.26,0,0,0-1.28-3.68l-2.8-.56a.46.46,0,0,1-.3-.22l-2.51-4.23a2.26,2.26,0,0,0-3.89,0l-2.51,4.23a.46.46,0,0,1-.3.22l-2.8.56a2.26,2.26,0,0,0-1.28,3.68L157.25,31a.45.45,0,0,1,.1.4l-.81,3.32a2.26,2.26,0,0,0,3.12,2.6l3.76-1.67a.48.48,0,0,1,.37,0l3.76,1.67a2.26,2.26,0,0,0,3.12-2.6l-.81-3.32A.45.45,0,0,1,170,31Z"
          data-svg-origin="163.64500427246094 27.894429206848145"
          transform="matrix(0,0,0,0,163.645,27.89443)"
          style="translate: none; rotate: none; scale: none; transform-origin: 0px 0px"
        ></path>
      </g>
    </svg>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, type Ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { MorphSVGPlugin } from 'gsap-trial/MorphSVGPlugin'

gsap.registerPlugin(MorphSVGPlugin)
/**接收父级组件传递过来的参数用来执行对应的动画 */
const props = defineProps({
  swallow: Boolean,
  spit: Boolean
})
const emits = defineEmits(['animationdone'])

type positionType = { x: number, y: number } | null
type morphSVGType = gsap.SVGPathValue | undefined

const bodyPathFill: Ref<morphSVGType> = ref(void 0);
const bodyPathStroke: Ref<morphSVGType> = ref(void 0);
const starIsVisible = ref(0);
const starPosition: Ref<positionType> = ref(null);
const bodySwallow = ref(null) as any
const mouth = ref(null)
const mouthOpen = ref(null)
const face = ref(null)
const armLeft = ref(null)
const armRight = ref(null)
const legRight = ref(null)
const mouthFull = ref(null)
const body = ref(null)
const envelope = ref(null)
const envelopeStar = ref(null)
const eyeLeft = ref(null)
const eyeRight = ref(null)
const eyeLeftClosed = ref(null)
const eyeRightClosed = ref(null)
const hat = ref(null)
const star = ref(null)
const mouthFrown = ref(null)
const cheeks = ref(null)
const bodyFill: any = ref(null)
const bodyStroke: any = ref(null)

onMounted(() => {
  bodyPathFill.value = MorphSVGPlugin.convertToPath(bodyFill.value) as any
  bodyPathStroke.value = MorphSVGPlugin.convertToPath(bodyStroke.value) as any

  gsap.set(mouthOpen.value, {
    transformOrigin: '17px 26px',
    scale: 0
  })

  gsap.set(mouthFull.value, {
    transformOrigin: 'center center',
    scale: 0
  })

  gsap.set(mouthFrown.value, {
    transformOrigin: 'center center',
    scaleY: 0
  })

  gsap.set(eyeLeft.value, {
    transformOrigin: 'center 17px'
  })

  gsap.set(eyeRight.value, {
    transformOrigin: 'center 17px'
  })

  gsap.set(eyeLeftClosed.value, {
    transformOrigin: 'center bottom',
    scaleY: 0
  })

  gsap.set(eyeRightClosed.value, {
    transformOrigin: 'center bottom',
    scaleY: 0
  })

  gsap.set(face.value, {
    transformOrigin: '25px bottom'
  })

  gsap.set(armLeft.value, {
    transformOrigin: '70px 42px'
  })

  gsap.set(armRight.value, {
    transformOrigin: '-35px 44px'
  })

  gsap.set(legRight.value, {
    transformOrigin: '-13px -6px'
  })

  gsap.set(body.value, {
    transformOrigin: 'left bottom'
  })

  gsap.set(bodyStroke.value, {
    transformOrigin: 'center bottom'
  })

  gsap.set(bodyFill.value, {
    transformOrigin: 'center bottom'
  })

  gsap.set(hat.value, {
    scale: 0,
    transformOrigin: 'center bottom'
  })

  gsap.set(envelope.value, {
    scale: 0,
    transformOrigin: 'center bottom',
    y: 10
  })

  gsap.set(envelopeStar.value, {
    scale: 0,
    transformOrigin: 'center center'
  })

  gsap.set(star.value, {
    scale: 0,
    transformOrigin: 'center center'
  })
})

watch(() => props.swallow, (newValue) => {
  if (newValue) {
    aswallow()
  }
})

watch(() => props.spit, (newValue) => {
  if (newValue) {
    aspit()
  }
})

function aswallow(): any {
  if (props.swallow) {
    animateInhale()
      .then(animatePuffed as any)
      .then(animateSwallow)
      .then(animatePowerUp)
      .then(() => {
        emits('animationdone')
      })
  }
}

function aspit(): any {
  if (props.spit) {
    console.log(2)
    animateInhale()
      .then(animatePuffed)
      .then(animateSpit)
      .then(() => {
        emits('animationdone')
      })
  }
}
/**吸取数据动画 */
function animateInhale() {
  const tlInhale = gsap.timeline()

  const delay = 0.1
  const tlMouth = gsap.timeline()
  tlMouth
    .to(mouth.value, {
      duration: delay,
      scale: 0
    })
    .to(mouthOpen.value, {
      duration: 0.5,
      scale: 1
    })

  const kirbyFace = gsap.to(face.value, {
    delay,
    duration: 0.5,
    rotation: 5,
    y: -20
  })

  const kirbyArmLeft = gsap.to(armLeft.value, {
    delay,
    duration: 0.7,
    rotation: 80
  })

  const kirbyArmRight = gsap.to(armRight.value, {
    delay,
    duration: 0.7,
    rotation: -15
  })

  const kirbyLegRight = gsap.to(legRight.value, {
    delay: delay + 1,
    duration: 1,
    rotation: -15
  })

  tlInhale.add(tlMouth, 0)
  tlInhale.add(kirbyFace, 0)
  tlInhale.add(kirbyArmLeft, 0)
  tlInhale.add(kirbyArmRight, 0)
  tlInhale.add(kirbyLegRight, 0)
  return tlInhale
}
/**身体吸取数据动画 */
function animatePuffed() {
  const tlPuffed = gsap.timeline()

  const tlMouth = gsap.timeline()
  tlMouth
    .to(mouthOpen.value, {
      duration: 0.2,
      scale: 0
    })
    .to(mouthFull.value, {
      duration: 0.1,
      scale: 1,
      y: {
        duration: 0,
        value: 0
      } as any
    })

  const kirbyFace = gsap.to(face.value, {
    duration: 0.5,
    rotate: 0,
    y: 0
  })

  const kirbyBody = gsap.to(body.value, {
    duration: 1.5,
    ease: 'elastic',
    scale: 1.1
  })

  const kirbyArmLeft = gsap.to(armLeft.value, {
    duration: 0.3,
    rotate: 0
  })

  const kirbyArmRight = gsap.to(armRight.value, {
    duration: 1.5,
    ease: 'elastic',
    rotation: 0,
    x: 10
  })

  const kirbyLegRight = gsap.to(legRight.value, {
    duration: 0.6,
    rotation: 0,
    y: 10
  })

  tlPuffed.add(tlMouth, 0)
  tlPuffed.add(kirbyFace, 0)
  tlPuffed.add(kirbyBody, 0)
  tlPuffed.add(kirbyArmLeft, 0)
  tlPuffed.add(kirbyArmRight, 0)
  tlPuffed.add(kirbyLegRight, 0)
  return tlPuffed
}
/**吞下数据动画 */
function animateSwallow() {
  const tlSwallow = gsap.timeline()
  const tlEyes = gsap.timeline()
  const tlMouth = gsap.timeline()
  const dur = {
    duration: 0.8,
    ease: 'elastic'
  }

  tlEyes
    .to([eyeLeft.value, eyeRight.value], {
      duration: 0.1,
      scaleY: 0,
      y: 20
    })
    .to([eyeLeftClosed.value, eyeRightClosed.value], {
      duration: 0.1,
      scaleY: 1,
      y: 0
    })

  tlMouth
    .to(mouthFull.value, {
      duration: 0.1,
      scaleY: 0,
      y: 35
    })
    .to(mouthFrown.value, {
      duration: 0.1,
      scaleY: 1,
      y: {
        duration: 0,
        value: 0
      } as any,
      onComplete: () => {
        starIsVisible.value = 2
      }
    })

  const kirbyCheeks = gsap.to(cheeks.value, {
    ...dur,
    y: 40
  })

  const kirbyBody = gsap.to(body.value, {
    ...dur,
    scale: 1
  })

  const bodyStroke = gsap.to(['#bodyStroke', '#bodyFill'], {
    ...dur,
    morphSVG: bodySwallow.value
  })

  const kirbyArmLeft = gsap.to(armLeft.value, {
    ...dur,
    rotation: 70,
    y: 50
  })

  const kirbyArmRight = gsap.to(armRight.value, {
    ...dur,
    rotation: -50,
    x: 0,
    y: 50
  })

  tlSwallow.add(tlEyes, 0)
  tlSwallow.add(tlMouth, 0)
  tlSwallow.add(kirbyCheeks, 0)
  tlSwallow.add(kirbyBody, 0)
  tlSwallow.add(bodyStroke, 0)
  tlSwallow.add(kirbyArmLeft, 0)
  tlSwallow.add(kirbyArmRight, 0)
  return tlSwallow
}
/**邮件出现上升动画 */
function animatePowerUp() {
  const tlPowerUp = gsap.timeline()

  const delay = 0.6
  const tlEnvelope = gsap.timeline()

  animateReset()

  const kirbyLegRight = gsap.to(legRight.value, {
    delay: delay + 1,
    duration: 1,
    rotation: -15
  })

  const kirbyHat = gsap.to(hat.value, {
    onStart: () => {
      starPosition.value = {
        x: -10,
        y: -85
      }
      starIsVisible.value = 6
    },
    startAt: {
      opacity: 1,
      scale: 0,
      y: 0
    },
    delay,
    duration: 0.6,
    ease: 'elastic',
    scale: 1
  })

  tlEnvelope
    .to(envelope.value, {
      startAt: {
        opacity: 1,
        scale: 0,
        y: 10
      },
      delay: delay + 0.3,
      duration: 0.6,
      ease: 'elastic',
      scale: 1
    })
    .to(envelopeStar.value, {
      startAt: {
        rotation: 500
      },
      duration: 1,
      rotation: 0,
      scale: 1
    })
    .to(envelope.value, {
      delay: 1,
      duration: 0.2,
      scaleY: 0.7
    })
    .to(envelope.value, {
      duration: 0.1,
      scaleY: 1,
      y: -5
    })
    .to(envelope.value, {
      duration: 1.5,
      ease: 'power2.inOut',
      opacity: 0,
      y: -110
    })
    .to(hat.value, {
      delay: 0.5,
      duration: 0.3,
      opacity: 0,
      scale: 0.7,
      y: -20
    })
    .to(legRight.value, {
      duration: 0.6,
      rotation: 0
    })

  tlPowerUp.add(kirbyLegRight, 0)
  tlPowerUp.add(kirbyHat, 0)
  tlPowerUp.add(tlEnvelope, 0)
  return tlPowerUp
}
/**重置动画 */
function animateReset() {
  const tlEyes = gsap.timeline()
  const tlMouth = gsap.timeline()
  const dur = {
    delay: 0.2,
    duration: 1,
    ease: 'elastic'
  }
  tlEyes
    .to([eyeLeftClosed.value, eyeRightClosed.value], {
      delay: 0.2,
      duration: 0.1,
      scaleY: 0,
      y: -20
    })
    .to([eyeLeft.value, eyeRight.value], {
      duration: 0.2,
      scaleY: 1,
      y: {
        duration: 0.1,
        value: 0
      } as any
    })

  tlMouth
    .to(mouthFrown.value, {
      delay: 0.2,
      duration: 0.1,
      scaleY: 0,
      y: -35
    })
    .to(mouth.value, {
      duration: 0.1,
      scale: 1
    })

  gsap.to(cheeks.value, {
    ...dur,
    y: 0
  })

  gsap.to('#bodyStroke', {
    ...dur,
    morphSVG: bodyPathStroke.value
  })

  gsap.to('#bodyFill', {
    ...dur,
    morphSVG: bodyPathFill.value
  })

  gsap.to(armLeft.value, {
    ...dur,
    rotation: 0,
    y: 0
  })

  gsap.to(armRight.value, {
    ...dur,
    rotation: 0,
    y: 0
  })

  gsap.to(legRight.value, {
    y: 0
  })
}

function animateStar(el: gsap.TweenTarget, done: () => void) {
  const tl = gsap.timeline({
    onComplete: () => {
      starIsVisible.value = 0
      done()
    }
  })

  gsap.set(el, {
    scale: 0,
    transformOrigin: 'center center'
  })

  if (starIsVisible.value > 2) {
    gsap.set(el, {
      ...starPosition.value
    })

    tl.to(el, {
      delay: 'random(0, 0.5)',
      duration: 'random(0.7, 1.1)',
      opacity: 0,
      rotation: 'random(360, 720)',
      scale: 'random(0.3, 0.6)',
      x: `random(${starPosition.value!.x - 60}, ${starPosition.value!.x + 60})`,
      y: `random(${starPosition.value!.y - 60}, ${starPosition.value!.y + 60})`
    })
  } else {
    tl.to(el, {
      delay: 'random(0, 0.5)',
      duration: 0.7,
      rotation: 500,
      scale: 1,
      x: 'random(-120, 120)',
      y: 'random(-120, -50)'
    }).to(el, {
      duration: 1,
      ease: 'elastic',
      opacity: 0,
      scale: 2
    })
  }
}
/**吐出星星动画 */
function animateSpit() {
  const tlSpit = gsap.timeline()

  const tlMouth = gsap.timeline()

  tlMouth
    .to(mouthFull.value, {
      duration: 0.05,
      scaleY: 0
    })
    .to(mouthOpen.value, {
      duration: 0.4,
      scale: 0.3
    })
    .to(star.value, {
      startAt: {
        opacity: 1,
        rotation: 0,
        scale: 0,
        transformOrigin: 'center center',
        x: -40,
        y: -20
      },
      delay: -0.2,
      duration: 1,
      ease: 'power2.inOut',
      rotation: 720,
      scale: 1,
      x: -350
    })
    .to(star.value, {
      duration: 0.2,
      scaleX: 0.9,
      transformOrigin: 'left center'
    })
    .to(star.value, {
      onStart: () => {
        starPosition.value = {
          x: -350,
          y: -20
        }
        starIsVisible.value = 6
      },
      duration: 0.2,
      opacity: 0,
      scaleX: 1,
      transformOrigin: 'left center'
    })
    .to(
      mouthOpen.value,
      {
        duration: 0.1,
        scale: 0
      },
      '-=1'
    )
    .to(
      mouth.value,
      {
        duration: 0.1,
        scale: 1
      },
      '-=0.9'
    )

  const kirbyBody = gsap.to(body.value, {
    duration: 0.2,
    scale: 1
  })

  const kirbyArmRight = gsap.to(armRight.value, {
    duration: 0.7,
    x: 0
  })

  const kirbyLegRight = gsap.to(legRight.value, {
    duration: 0.6,
    rotation: 0,
    y: 0
  })

  tlSpit.add(tlMouth, 0)
  tlSpit.add(kirbyBody, 0)
  tlSpit.add(kirbyArmRight, 0)
  tlSpit.add(kirbyLegRight, 0)
  return tlSpit
}
/**添加样式方法，style中配置了就可以不执行这个方法 */
function styleInject(css: string, ref?: { insertAt?: any } | undefined) {
  if (ref === void 0) ref = {}
  const insertAt = ref.insertAt

  if (!css || typeof document === 'undefined') {
    return
  }

  const head = document.head || document.getElementsByTagName('head')[0]
  const style = document.createElement('style') as any
  style.type = 'text/css'

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild)
    } else {
      head.appendChild(style)
    }
  } else {
    head.appendChild(style)
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css
  } else {
    style.appendChild(document.createTextNode(css))
  }
}

</script>

<style lang="scss">
$black: #87213c;
$white: #fff;

$primary-color: #f9dde3;
$primary-color-tint: #fcf2f5;
$secondary-color: #ff2961;
$accent-color: #fae798;

$mail-color: #326dcc;
$star-sparkly-color: #b8d7ff;

$primary-font: 'Fredoka One', sans-serif;

:root {
	--black: #{$black};
	--white: #{$white};
	--primary-color: #{$primary-color};
	--primary-color-tint: #{$primary-color-tint};
	--secondary-color: #{$secondary-color};
	--accent-color: #{$accent-color};
	--mail-color: #{$mail-color};
	--star-color: #{$accent-color};
	--star-sparkly-color: #{$star-sparkly-color};
}
	
@import url('https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap');
	
* { box-sizing: border-box; }

body {
	display: grid;
	place-items: center;
	min-height: 100vh;
	background-color: var(--primary-color-tint);
	font-size: 16px;
	line-height: 1;
	font-family: $primary-font;
}

.container {
	display: grid;
	grid-template-columns: 2fr 1fr;
	align-items: center;
	width: 400px;
	max-width: 400px;
}

.input-text {
	position: absolute;
	z-index: 5;
	width: 17rem;
	font-size: 1.25rem;
	line-height: 1.5;
	color: var(--black);
	transform: translate(1rem, 0.625rem);
	overflow: hidden;

	&-letter {
		display: inline-block;
		transform-origin: center bottom;
	}
}

.input-wrap {
	position: relative;
}

.cloudy {
	position: absolute;
	top: 50%;
	left: 50%;
	width: 150%;
	transform: translate(-50%, -50%);

	&-poofs {
		fill: var(--white);
	}
}

.fade {
	&-enter-active,
	&-leave-active {
		transition: 0.3s;
	}

	&-enter-from,
	&-leave-to {
		opacity: 0;
	}
}
	
.dreamy-input {
	--offset-top: 0.1875rem;
	--offset-left: -0.125rem;
	--control-height: 3.125rem;

	position: relative;

	&::after {
		content: '';
		position: absolute;
		top: var(--offset-top);
		left: var(--offset-left);
		height: 100%;
		width: 100%;
		border: 3px solid var(--black);
		pointer-events: none;
		transition: border 0.5s ease-in-out;
	}

	&::after,
	&-control {
		border-radius: var(--control-height);
	}

	&-control {
		width: 15.625rem;
		height: var(--control-height);
		padding: 0 calc(1rem + var(--control-height)) 0 1rem;
		border: 0;
		background-color: var(--primary-color);
		font-family: $primary-font;
		font-size: 1.25rem;
		color: var(--black);
		caret-color: var(--secondary-color);
		transition: background-color 0.5s ease-in-out;

		&:focus {
			outline: none;
		}

		&:disabled {
			background-color: var(--primary-color-tint);
		}
	}

	&:focus-within {
		&::after {
			border-color: var(--secondary-color);
		}
	}

	&-label,
	&-error {
		position: absolute;
		left: 1rem;
		font-size: 0.75rem;
		letter-spacing: 0.05em;
	}

	&-label {
		top: -0.75rem;
		color: var(--black);
	}

	&-error {
		bottom: -1.5rem;
		color: var(--secondary-color);
	}

	&-button {
		display: grid;
		place-items: center;
		position: absolute;
		top: calc(var(--offset-top) + 3px);
		right: 0;
		height: var(--control-height);
		width: var(--control-height);
		padding: 0;
		border: 0;
		background-color: transparent;
		color: var(--white);
		cursor: pointer;
		transition: 0.4s ease-in-out;

		&-star {
			fill: currentColor;
			stroke: var(--star-stroke, transparent);
			stroke-width: 3px;
		}

		&-svg {
			width: 40%;
			overflow: visible;
		}

		&:focus {
			outline: none;
			color: var(--secondary-color);
		}

		&:hover {
			--star-stroke: var(--black);
			transform: scale(1.2);
			color: var(--accent-color);
		}
	}

	&.disabled {
		&::after {
			border-color: var(--primary-color);
		}

		.dreamy-input-button {
			color: var(--primary-color);
		}
	}
}
</style>

<style lang="scss" scoped>
.kirby {
  position: relative;
  z-index: 5;
  display: inline-block;
  height: 12.5rem;
  width: 12.5rem;
  overflow: visible;
}
.kirby-stroke {
  stroke: var(--black);
  stroke-width: 3px;
  stroke-miterlimit: 10;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
}
.kirby-body {
  fill: var(--primary-color);
}
.kirby-mouth-open-tongue,
.kirby-foot {
  fill: var(--secondary-color);
}
.kirby-hat-dark,
.kirby-mouth-open-inner,
.kirby-eye {
  fill: var(--black);
}
.kirby-blush {
  stroke: var(--secondary-color);
}
.kirby-blush-small {
  stroke-width: 2.5px;
}
.kirby-star {
  stroke-width: 3px;
  stroke: currentColor;
  fill: var(--star-color);
}
.kirby-star-splashy {
  color: transparent;
}
.kirby-star-spit {
  color: var(--black);
}
.kirby-hat-band {
  fill: var(--accent-color);
}
.kirby-hat {
  fill: var(--mail-color);
}
.kirby-envelope {
  fill: var(--white);
}
.kirby-envelope-star {
  fill: var(--primary-color);
}
</style>
