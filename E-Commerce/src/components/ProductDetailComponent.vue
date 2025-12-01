<template>
    <div class="container">
        <div class="tag" :class="instock > 1000 ? 'in-stock' : 'out-of-stock'">
            {{ stockStatus }}
        </div>
        <div class="title">
            {{ name }}
        </div>
        <div class="rating">
            <span v-for="index in 5" :key="index" class="star" :class="{ filled: index <= ratingCount }">
                ★
            </span>
            <span class="rating-text">({{ ratingCount.toFixed(1) }})</span>
        </div>
        <div class="price">
            <div class="current-price">{{ currentPrice }}</div>
            <div class="original-price">{{ originalPriceFormatted }}</div>
        </div>
        <div class="description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima
            nisi modi, quasi, odio minus dolore impedit fuga eum eligendi? Officia doloremque facere quia. Voluptatum,
            accusantium!
        </div>
        <div class="quantity-block">
            <div class="quantity">
                1
                <div class="quantity-button">
                    <button>
                        <img src="@/assets/small_angle_up.svg" />
                    </button>
                    <button class="decrease-button">
                        <img src="@/assets/small_angle_down.svg" />
                    </button>
                </div>
            </div>
            <button class="add-button">
                <img src="@/assets/white_cart_icon.svg" class="cart-icon" />
                <span>Add To Cart</span>
            </button>
            <button class="wishlist-button">
                <img src="@/assets/wishlist_icon.svg" class="cart-icon" />
            </button>
            <button class="share-button">
                <img src="@/assets/share_icon.svg" class="cart-icon" />
            </button>
        </div>
        <div>
            <div class="text">
                <span>
                    Vendor:
                </span>
                <span>
                    NestMart
                </span>
            </div>
            <div class="text">
                <span>
                    SKU:
                </span>
                <span>
                    FWM15VKT
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductDetailComponent',
    props: {
        name: {
            type: String,
            required: true,
        },
        ratingCount: {
            type: [Number, String],
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        discountAsPercentage: {
            type: Number,
            required: true,
        },
        instock: {
            type: Number,
            required: true,
        }
    },
    computed: {
        currentPrice() {
            const multiplier = 1 - (this.discountAsPercentage / 100);
            const discountedPrice = this.price * multiplier;
            return `$${discountedPrice.toFixed(2)}`;
        },
        originalPriceFormatted() {
            return `$${this.price.toFixed(2)}`;
        },
        stockStatus() {
            return this.instock > 0 ? 'In Stock' : 'Out of Stock';
        },
    }
}
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.tag {
    padding: 5px 0px 5px 10px;
    max-width: 110px;
    font-family: 'Quicksand', sans-serif;
    font-size: 14px;
    font-weight: bold;
    border-radius: 4px;
    display: inline-block;
}

.in-stock {
    color: #3BB77E; 
    background: #DEF9EC;
}

.out-of-stock {
    color: orangered; 
    background: #F2DEDE;
}

.title {
    font-family: 'Quiclsand', sans-serif;
    font-size: 40px;
    font-weight: bold;
    color: #253D4E;
    line-height: 48px;
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

.rating-text {
    font-family: 'Lato', sans-serif;
    margin: 4px 0px 0px 8px;
    color: #7E7E7E;
    font-size: 12px;
}

.price {
    display: flex;
    flex-direction: row;
}

.current-price {
    font-size: 72px;
    font-weight: bold;
    color: #3BB77E;
    margin-right: 60px;
    font-family: 'Quicksand', sans-serif;
}

.original-price {
    font-size: 32px;
    color: #B6B6B6;
    font-family: 'Quicksand', sans-serif;
    font-weight: bold;
    text-decoration: line-through;
    margin-top: 45px;
}

.description {
    font-family: 'Lato', sans-serif;
    font-size: 18px;
    color: #7E7E7E;
    line-height: 26px;
    max-width: 650px;
}

.quantity-block {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    margin: 50px 0px;
}

.quantity {
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 7px;
    border: 1.75px solid #3BB77E;
    padding: 0px 5px 0px 20px;
    color: #3BB77E;
    gap: 20px;
    font-family: 'Quicksand', sans-serif;
    font-size: 20px;
}

.quantity-button {
    display: flex;
    flex-direction: column;
}

.quantity-button button {
    border: none;
    background: transparent;
    cursor: pointer;
}

.add-button {
    height: 100%;
    padding: 0px 20px;
    background-color: #3BB77E;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;
    font-size: 18px;
    font-family: 'Quicksand', sans-serif;
    font-weight: bold;
    color: #FFFFFF;
}

.wishlist-button {
    cursor: pointer;
    border: 1px solid #F2F3F4;
    justify-content: center;
    background-color: transparent;
    border-radius: 5px;
    width: 50px;
    height: 100%;
}

.share-button {
    cursor: pointer;
    border: 1px solid #F2F3F4;
    justify-content: center;
    background-color: transparent;
    border-radius: 5px;
    width: 50px;
    height: 100%;
}

.text {
    display: flex;
    flex-direction: row;
    font-family: 'Lato', sans-serif;
    font-size: 18px;
    gap: 20px;
}

.text span:first-child {
    color: #253D4E;
}

.text span:last-child {
    color: #B6B6B6;
}
</style>