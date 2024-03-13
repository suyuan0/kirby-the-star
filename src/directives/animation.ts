// 引入vue中定义的指令对应的类型定义
import { type Directive } from 'vue'

export const Animation: Directive = {
  // mounted是指令的一个生命周期
  mounted(el, b) {
    setStyle(el)
  }
}


function setStyle(element: any) {
  element.style.opacity = '1'
  element.style.filter = 'alpha(opacity:50)'
  const a = Math.random()*10 - 5
  setTimeout(() => {
    element.className = 'col animationBox'
  },a)
  setTimeout(() => {
    element.parentNode.removeChild(element)
  }, a+2000)
}