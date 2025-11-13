<template>
  <div class="container">
    <img :src="image" />
    <h3 class="title">{{ title }}</h3>
    <span class="count">{{ productCount }} items</span>
  </div>
</template>

<script>
export default {
  name: 'CategoryComponent',
  props: {
    title: {
      type: String,
      required: true,
    },
    productCount: {
      type: Number,
      required: true,
    },
    image: {
      required: true,
    },
    containerColor: {
      type: String,
      default: '#81b13d99',
    },
  },
}
</script>

<style scoped>
.container {
  border: 1px solid #81b13d;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 9px 10px 8.5px;
  background-color: v-bind('containerColor');
}
.count {
  color: #B6B6B6;
  font-family: 'Lato', sans-serif;
  font-size: 12px;
}
.title {
  font-size: 16px;
  font-family: 'Quicksand', sans-serif;
  font-weight: bold;
  color: #253D4E;
}
</style>