import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/categories/:categoryId",
      name: "Category",
      component: () => import("@/views/CategoryView.vue"),
    },
    {
      path: "/products/:productId",
      name: "ProductDetail",
      component: () => import("@/views/ProductDetailView.vue"),
    },
  ],
});

export default router;