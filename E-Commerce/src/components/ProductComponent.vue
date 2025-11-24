<template>
    <div class="container">
        <div v-if="badge" :class="['badge', { 
         'hot': badge === 'Hot', 
         'sale': badge === 'Sale' 
        }]">
            {{badge}}
        </div>
        <img :src="image" class="image"/>
        <div class="content-wrapper">
            <h3 class="group-brand">{{ group }}</h3>
            <h2 class="product-name">{{ name }}</h2>
            <div class="rating">
                <span v-for="index in 5" :key="index" class="star" :class="{ filled: index <= ratingCount }">
                    ★
                </span>
                <span class="rating-text">({{ ratingCount.toFixed(1) }})</span>
            </div>
            <h3 class="size">{{ size }}</h3>
            <div class="product-footer">
                <div class="current-price">{{ currentPrice }}</div>
                <div class="original-price">{{ originalPriceFormatted }}</div>
                <button class="add-button">Add +</button>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    name: 'ProductComponent',
    props: {
        badge: {
            type: String,
            default: '',
        },
        group: {
            type: String,
            required: true,
        },
        ratingCount: {
            type: Number,
            required: true,
        },
        image: {
            required:true,
        },
        size: {
            type: [String, Number],
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        discountAsPercentage: {
            type: Number,
            default: 0,
        },
    },
    computed: {
        currentPrice() {
            const multiplier = 1 - (this.discountAsPercentage / 100);
            const discountedPrice = this.price * multiplier;
            console.log(discountedPrice);
            return `$${discountedPrice.toFixed(2)}`;
        },
        originalPriceFormatted() {
            return `$${this.price.toFixed(2)}`;
        }
    }
}
</script>
<style scoped>
.container {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 20px 0px 0px 0px;
    width: 302px;
    min-height: 402px;
    border: 1px solid #BCE3C9;
    border-radius: 5px;
    position: relative;
}

.badge {
    border-radius: 0px 20px 20px 0px;
    font-size: 12px;
    color: #FFFFFF;
    background-color: #3BB77E;
    position: absolute;
    padding: 6px 12px;
    font-family: 'Lato', sans-serif;
}

.badge.hot {
  background-color: #FD6E6E;
}

.badge.sale {
  background-color: #FDC040;
}

.image {
    padding: 10px 80px 0px 30px;
    position: absolute;
    max-width: 100%;
    max-height: 100%;
    margin-top: 50px;
}

.content-wrapper {
    margin-top: 200px;
    padding: 20px;
    position: absolute;
}

.group-brand {
    font-size: 12px;
    font-weight: 400;
    color: #7E7E7E;
}

.product-name {
    font-size: 14px;
    font-weight: bold;
    color: #253D4E;
    margin-right: 50px;
    font-family: 'Quicksand', sans-serif;
}

.rating {
    display: flex;
    flex-direction: row;
}

.star {
  font-size: 16px;
  color: #d1d5db;
}

.star.filled {
  color: #ffb020;
}

.rating-text{
    margin: 4px 0px 0px 10px;
    color: #7E7E7E;
    font-size: 12px;
}

.size{
    font-size: 12px;
    color: #7E7E7E;
}

.product-footer{
    display: flex;
    flex-direction: row;
}

.current-price{
    font-size: 20px;
    font-weight: bold;
    color: #3BB77E;
    margin-right: 10px;
    font-family: 'Quicksand', sans-serif;
}

.original-price{
    font-size: 12px;
    color: #7E7E7E;
    font-family: 'Quicksand', sans-serif;
    text-decoration: line-through;
    margin-right: auto;
    margin-top: 8px;
}

.add-button{
    background-color: #DEF9EC;
    border: none;
    border-radius: 5px;
    padding: 5px 10px 5px 10px;
    font-size: 14px;
    font-weight: bold;
    color: #3BB77E;
    cursor: pointer;
    font-family: 'Quicksand', sans-serif;
}
</style>