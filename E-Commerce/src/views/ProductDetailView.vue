<template>
    <div class="app"  v-if="product">
        <MenuItemComponents />
        <div class="breadcrumbs">
            <span>
                Home
            </span>
            <img src="@/assets/small_angle_right.svg" />
            <span>
                Vegetables & tubers
            </span>
            <img src="@/assets/small_angle_right.svg" />
            <span>
                Seeds of Change Organic
            </span>
        </div>
        <div class="product-details">
            <ProductImageComponent :image="'http://localhost:3000/' + product.image" />
            <ProductDetailComponent :name="product.name" :rating-count="product.rating" :price="product.price" :discount-as-percentage="product.promotionAsPercentage" :instock="product.instock" />
        </div>
        <div class="footer">
            <div class="tabs-navigation">
                <button v-for="tab in tabs" :key="tab.id" class="tab-button"
                    :class="{ 'active-tab': currentTab === tab.id }" @click="changeTab(tab.id)">
                    {{tab.label}}
                </button>
            </div>
            <div class="footer-content">
                Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far
                quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial
                scallop tightly neurotic hungrily some and dear furiously this apart.
                <br /><br />
                Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed that alas
                rethought much decently richly and wow against the frequent fluidly at formidable acceptably flapped
                besides and much circa far over the bucolically hey precarious goldfinch mastodon goodness gnashed a
                jellyfish and one however because.
            </div>
        </div>
    </div>
</template>

<script>
import MenuItemComponents from '@/components/MenuItemComponents.vue';
import ProductImageComponent from '@/components/ProductImageComponent.vue';
import ProductDetailComponent from '@/components/ProductDetailComponent.vue';
import { useRoute } from 'vue-router';
import { useProductStore } from '@/stores/product';
import { computed } from 'vue';
export default {
    name: 'ProductDetailView',
    components: {
        MenuItemComponents,
        ProductImageComponent,
        ProductDetailComponent,
    },
    data() {
        return {
            currentTab: 'description',
            tabs: [
                { id: 'description', label: 'Description' },
                { id: 'additional', label: 'Additional Info' },
                { id: 'reviews', label: 'Reviews (5)' }
            ],
            isLoading: true,
        };
    },
    methods: {
        changeTab(tabId) {
            this.currentTab = tabId;
        }
    },
    setup() {
        const productStore = useProductStore()
        const route = useRoute();
        const productID = parseInt(route.params.productId);

        const product = computed(() => {
            const p = productStore.getProductById(productID);
            return p;
        });
        return {
            productStore,
            product,
        }
    },
    async mounted() {
        await this.productStore.fetchProducts();
        this.isLoading = false;
    },
}
</script>

<style scoped>
.app {
    padding: 8px;
    min-width: 1628px;
}

.breadcrumbs {
    display: flex;
    flex-direction: row;
    font-family: 'Lato', sans-serif;
    size: 18px;
    color: #7E7E7E;
    gap: 15px;
}

.breadcrumbs span:last-child {
    color: #3BB77E;
}

.product-details {
    display: flex;
    flex-direction: row;
    gap: 40px;
    margin: 20px 0px;
}

.footer {
    margin-top: 60px;
    border: 1px solid #F2F3F4;
    border-radius: 15px;
    padding: 40px 50px 80px 50px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.tabs-navigation {
    display: flex;
    flex-direction: row;
    gap: 10px
}

.tab-button {
    justify-content: center;
    padding: 10px 20px;
    color: #B6B6B6;
    border: 1px solid #F2F3F4;
    border-radius: 30px;
    font-family: 'Quicksand', sans-serif;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
}

.active-tab {
    background-color: #FFFFFF;
    color: #3BB77E;
}

.footer-content {
    font-family: 'Lato', sans-serif;
    font-size: 16px;
    line-height: 24px;
    color: #7E7E7E;
}
</style>