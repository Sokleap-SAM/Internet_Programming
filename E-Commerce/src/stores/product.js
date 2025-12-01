import { defineStore } from 'pinia'
import axios from 'axios'

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [],
    categories: [],
    groups: [],
    promotions: [],
  }),
  getters: {
    getProductsWithBadges: (state) => {
      return state.products.map(product => {
        let badgeString = '';

        if (product.promotionAsPercentage > 15) {
          badgeString = `-${product.promotionAsPercentage}%`;
        } else if (product.countSold >= 1000) {
          badgeString = 'Hot';
        } else if (product.countSold >= 500) {
          badgeString = 'Sale';
        }

        let imagePath = product.image;
        const parsed = JSON.parse(imagePath)
        imagePath = Array.isArray(parsed) ? parsed[0] : imagePath
        imagePath = imagePath.replace(/\\\\/g, '/')

        return {
          ...product,
          badge: badgeString,
          image: imagePath
        };
      });
    },
    getCategoriesByGroup: (state) => {
      return (groupName) => state.categories.filter((category) => category.group === groupName)
    },
    getProductsByGroup: (state) => {
      return (groupName) => state.products.filter((product) => product.group === groupName)
    },
    getProductsByCategory: (state) => {
      return (categoryID) => state.products.filter((product) => product.categoryID === categoryID)
    },
    getPopularProducts: (state) => {
      return state.products.filter((product) => product.countSold >= 10)
    },
    getCategoryById: (state) => {
      return (id) => state.categories.find(category => category.id === id)
    },
    getProductById: (state) => {
      return (id) => {
        const product = state.products.find(p => p.id === id);
        if (!product) return null;
        let imagePath = product.image;
        const parsed = JSON.parse(imagePath);
        imagePath = Array.isArray(parsed) ? parsed[0] : imagePath;
        imagePath = imagePath.replace(/\\\\/g, '/');

        return {
          ...product,
          image: imagePath 
        };
      }
    }
  },
  actions: {
    async fetchCategories() {
      const response = await axios.get('http://localhost:3000/api/categories').then((res) => {
        this.categories = res.data
      })
      return response
    },
    async fetchProducts() {
      const response = await axios.get('http://localhost:3000/api/products').then((res) => {
        this.products = res.data
      })
      return response
    },
    async fetchGroups() {
      const response = await axios.get('http://localhost:3000/api/groups').then((res) => {
        this.groups = res.data
      })
      return response
    },
    async fetchPromotions() {
      const response = await axios.get('http://localhost:3000/api/promotions').then((res) => {
        this.promotions = res.data
      })
      return response
    },
  },
})