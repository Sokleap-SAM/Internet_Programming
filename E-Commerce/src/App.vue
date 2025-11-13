<script>
import CategoryComponent from './components/CategoryComponent.vue'
import PromotionComponent from './components/PromotionComponent.vue'
const burgerImage = new URL('@/assets/burger.png', import.meta.url).href
const peachImage = new URL('@/assets/peach.png', import.meta.url).href
const kiwiImage = new URL('@/assets/kiwi.png', import.meta.url).href
const appleImage = new URL('@/assets/apple.png', import.meta.url).href
const snackImage = new URL('@/assets/snack.png', import.meta.url).href
const plumImage = new URL('@/assets/plum.png', import.meta.url).href
const cabbageImage = new URL('@/assets/cabbage.png', import.meta.url).href
const headphoneImage = new URL('@/assets/headphone.png', import.meta.url).href
const cakeImage = new URL('@/assets/cake.png', import.meta.url).href
const orangeImage = new URL('@/assets/orange.png', import.meta.url).href
const onionImage = new URL('@/assets/onion.jpg', import.meta.url).href
const juiceImage = new URL('@/assets/juice.png', import.meta.url).href
const backetImage = new URL('@/assets/backet.jpg', import.meta.url).href

export default {
  name: 'App',
  data() {
    return {
      burgerImage,
      peachImage,
      kiwiImage,
      appleImage,
      snackImage,
      plumImage,
      cabbageImage,
      headphoneImage,
      cakeImage,
      orangeImage,
      onionImage,
      juiceImage,
      backetImage,
    }
  },
  components: {
    CategoryComponent,
    PromotionComponent,
  },
}
</script>

<template>
  <div class="app">
    <div class="category-wrapper">
    <CategoryComponent title="Cake & Milk" :product-count="14" :image="burgerImage" container-color="#F2FCE4" />
    <CategoryComponent title="Peach" :product-count="17" :image="peachImage" container-color="#FFFCEB" />
    <CategoryComponent title="Organic Wiki" :product-count="21" :image="kiwiImage" container-color="#ECFFEC" />
    <CategoryComponent title="Apple" :product-count="68" :image="appleImage" container-color="#FEEFEA" />
    <CategoryComponent title="Snack" :product-count="34" :image="snackImage" container-color="#FFF3EB" />
    <CategoryComponent title="Plum" :product-count="25" :image="plumImage" container-color="#FFF3FF" />
    <CategoryComponent title="Cabbage" :product-count="65" :image="cabbageImage" container-color="#F2FCE4" />
    <CategoryComponent title="Headphone" :product-count="33" :image="headphoneImage" container-color="#FFFCEB" />
    <CategoryComponent title="Cake" :product-count="53" :image="cakeImage" container-color="#F2FCE4" />
    <CategoryComponent title="Orange" :product-count="63" :image="orangeImage" container-color="#FFF3FF" />
  </div>
  <div class="promotion-wrapper">
    <PromotionComponent title="Everyday Fresh & Clean with Our Products" :image="onionImage" container-color="#F0E8D5" />
    <PromotionComponent title="Make your Breakfast Healthy and Easy" :image="juiceImage" container-color="#F3E8E8" />
    <PromotionComponent title="The best Organic Products Online" :image="backetImage" container-color="#E7EAF3" button-color = "#FDC040" />
  </div>
  </div>
</template>

<style scoped>
.category-wrapper {
  display: flex;
  flex-direction: row;
  gap: 24px;
  justify-content: flex-start;
}
.promotion-wrapper {
  margin-top: 70px;
  display: flex;
  flex-direction: row;
  gap: 24px;
}
</style>