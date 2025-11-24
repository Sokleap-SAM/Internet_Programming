<script>
import CategoryComponent from './components/CategoryComponent.vue'
import MenuComponent from './components/MenuComponent.vue'
import PromotionComponent from './components/PromotionComponent.vue'
import { useProductStore } from './stores/product'
import ProductComponent from './components/ProductComponent.vue'

export default {
  name: 'App',
  components: {
    CategoryComponent,
    PromotionComponent,
    MenuComponent,
    ProductComponent,
  },
  setup() {
    const productStore = useProductStore()
    
    return {
      productStore, 
    }
  },
  async mounted() {
    await this.productStore.fetchCategories()
    await this.productStore.fetchPromotions()
    await this.productStore.fetchProducts()
  },
}
</script>

<template>
  <div class="app">
    <MenuComponent title="Featured Categories"/>
    <div class="category-wrapper">
      <CategoryComponent v-for="category in productStore.categories" :key="category['id']" :title="category['name']"
        :product-count="category['productCount']" :container-color="category['color']"
        :image="'http://localhost:3000/' + category['image']" />
    </div>
    <div class="promotion-wrapper">
      <PromotionComponent v-for="promotion in productStore.promotions" :key="promotion['id']"
        :title="promotion['title']" :image="'http://localhost:3000/' + promotion['image']"
        :container-color="promotion['color']" :button-color="promotion['buttonColor']" />
    </div>
    <MenuComponent title="Popular Product"/>
    <div class="product-wrapper">
      <ProductComponent v-for="product in productStore.getProductsWithBadges" 
    :key="product.id"
    :badge="product.badge"             
    :name="product.name"               
    :group="product.group"             
    :price="product.price"             
    :size="product.size"
    :rating-count="product.rating"     
    :image="'http://localhost:3000/' + product.image"
    :discount-as-percentage="product.promotionAsPercentage"
      />
    </div>
  </div>
</template>

<style scoped>
.app{
  padding: 10px;
}

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

.product-wrapper {
  display: flex;
  flex-direction: row;
  gap: 24px;
  flex-wrap: wrap;
}
</style>