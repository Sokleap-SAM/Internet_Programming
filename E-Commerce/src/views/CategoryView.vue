<template>
    <div class="app">
        <MenuItemComponents />
        <PageHeaderComponent :categoryName="categoryName" />
    </div>
</template>

<script>
import MenuItemComponents from '@/components/MenuItemComponents.vue';
import PageHeaderComponent from '@/components/PageHeaderComponent.vue';
import { useRoute } from 'vue-router';
import { useProductStore } from '@/stores/product';
import { computed } from 'vue';
export default {
    name: 'CategoryView',
    components: {
        MenuItemComponents,
        PageHeaderComponent,
    },
    setup() {
        const productStore = useProductStore()
        const route = useRoute();
        const categoryId = parseInt(route.params.categoryId);

        // Use computed property instead of method
        const categoryName = computed(() => {
            const category = productStore.getCategoryById(categoryId);
            return category ? category.name : 'All Categories';
        });
        return {
            productStore,
            categoryName
        }
    },
    async mounted() {
        await this.productStore.fetchCategories(); 
        window.scrollTo(0, 0);
    },
}
</script>

<style scoped>
.app {
    padding: 8px;
    min-width: 1628px;
}
</style>