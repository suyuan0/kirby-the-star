// 引入vue中定义的指令对应的类型定义
import { type Directive } from 'vue'

export const Draggable: Directive = {
  // mounted是指令的一个生命周期
  mounted(el, b) {
    const oDiv = el // 当前元素
    oDiv.style.position = 'absolute'
    // let self = this // 上下文
    // 禁止选择网页上的文字
    document.onselectstart = function () {
      return false
    }
    oDiv.onmousedown = function (e:any) {
      
      const disW = oDiv.offsetWidth
      const disH = oDiv.offsetHeight
      // 鼠标按下，计算当前元素距离可视区的距离
      const disX = e.clientX - oDiv.offsetLeft
      const disY = e.clientY - oDiv.offsetTop
      document.onmousemove = function (e) {
        // 通过事件委托，计算移动的距离
        const l = e.clientX - disX
        const t = e.clientY - disY
        if (disW + oDiv.offsetLeft > document.documentElement.clientWidth) {
          oDiv.style.left = document.documentElement.clientWidth - 1 - disW + 'px'
          document.onmousemove = null
        } else if (disH + oDiv.offsetTop > document.documentElement.clientHeight) {
          oDiv.style.top =
            document.documentElement.clientHeight - 1 - disH + 'px'
          document.onmousemove = null
        } else if (oDiv.offsetTop < 0) {
          oDiv.style.top = '1px'
          document.onmousemove = null
        } else if (oDiv.offsetLeft < 0) {
          oDiv.style.left = '1px'
          document.onmousemove = null
        } else {
          // 移动当前元素
          oDiv.style.left = l + 'px'
          oDiv.style.top = t + 'px'
        }
        
      }
      document.onmouseup = function () {
        document.onmousemove = null
        document.onmouseup = null
      }
      // return false不加的话可能导致黏连，就是拖到一个地方时div粘在鼠标上不下来，相当于onmouseup失效
      return false
    }
  }
}
