<script>
import CategoryComponent from '@/components/CategoryComponent.vue'
import PromotionComponent from '@/components/PromotionComponent.vue'
import MenuComponent from '@/components/MenuComponent.vue'
import ProductComponent from '@/components/ProductComponent.vue'
import MenuItemComponents from '@/components/MenuItemComponents.vue'
import { useProductStore } from '@/stores/product'

export default {
  name: 'HomeView',
  components: {
    CategoryComponent,
    PromotionComponent,
    MenuComponent,
    ProductComponent,
    MenuItemComponents,
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
    <MenuItemComponents :is-home-page="true" />
    <MenuComponent title="Featured Categories" />
    <div class="category-wrapper">
      <router-link 
            v-for="category in productStore.categories" 
            :key="category['id']"
            :to="{ name: 'Category', params: { categoryId: category.id } }" 
            style="text-decoration: none;"
        >
        <CategoryComponent :title="category['name']" :product-count="category['productCount']"
          :container-color="category['color']" :image="'http://localhost:3000/' + category['image']" />
    </router-link>
    </div>
    <div class="promotion-wrapper">
      <PromotionComponent v-for="promotion in productStore.promotions" :key="promotion['id']"
        :title="promotion['title']" :image="'http://localhost:3000/' + promotion['image']"
        :container-color="promotion['color']" :button-color="promotion['buttonColor']" />
    </div>
    <MenuComponent title="Popular Product" />
    <div class="product-wrapper">
      <router-link 
            v-for="product in productStore.getProductsWithBadges" 
            :key="product['id']"
            :to="{ name: 'ProductDetail', params: { productId: product.id } }" 
            style="text-decoration: none;"
        >
      <ProductComponent :badge="product.badge"
        :name="product.name" :group="product.group" :price="product.price" :size="product.size"
        :rating-count="product.rating" :image="'http://localhost:3000/' + product.image"
        :discount-as-percentage="product.promotionAsPercentage" />
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.app {
  padding: 8px;
  min-width: 1628px;
}

.category-wrapper {
  display: flex;
  flex-direction: row;
  gap: 17.5px;
  justify-content: flex-start;
  flex-wrap: wrap;
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
  gap: 18px;
  flex-wrap: wrap;
}
</style>