import { defineStore } from 'pinia'

export const useAnimation = defineStore('animation', {
  state: (): any => ({
    baseImg: '111px'
  }),
  actions: {
    setBaseImg(newImg: any) {
      this.baseImg = newImg
      console.log(this.baseImg)
    }
  }
})
