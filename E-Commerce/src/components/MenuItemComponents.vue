<template>
    <div class="container">
        <div class="header">
            <div class="logo">
                <img :src="logoIcon" />
                <div>
                    <h1>
                        Melon
                    </h1>
                    <h2>
                        Mart & Grocery
                    </h2>
                </div>
            </div>
            <SearchBoxComponent />
            <div class="right-icons">
                <div>
                    <img :src="userIcon" />
                    Account
                </div>
                <div>
                    <img :src="compareIcon" />
                    Compare
                </div>
                <div>
                    <img :src="heartIcon" />
                    Wishlist
                </div>
                <div>
                    <img :src="cartIcon" />
                    Cart
                </div>
            </div>
        </div>
        <div class="navigation-block">
            <div class="browse-category">
                <img :src="browseIcon" />
                <select>
                    <option value="option1">Browse All Categories</option>
                </select>
            </div>
            <div class="navigations">
                <span>
                    <img :src="flameIcon" />
                    Hot deals
                </span>
                <div>Home</div>
                <div>
                    <select>
                        <option value="option1">Food</option>
                    </select>
                </div>
                <div>
                    <select>
                        <option value="option1">Vegetabless</option>
                    </select>
                </div>
                <div>Drink</div>
                <div>Cookies</div>
                <div>
                    <select>
                        <option value="option1">Meat & Seafood</option>
                    </select>
                </div>
                <div>Bakery</div>
            </div>
            <div class="hotline">
                <img :src="hotlineIcon" />
                <div>
                    <h1>099 777 888</h1>
                    <h2>24/7 Support Center</h2>
                </div>
            </div>
        </div>
        <div class="figure" v-if="isHomePage">
            <div>
                <h1>
                    Don't miss amazing<br />
                    grocery deals
                </h1>
                <h2>Sign up for the daily newsletter</h2>

                <form class="subscribe-form">
                    <div>
                        <img :src="mailIcon" class="mail-icon" />
                        <input type="email" placeholder="Your email address" class="email-input">
                    </div>
                    <button type="submit" class="subscribe-button">Subscribe</button>
                </form>
            </div>

            <div>
                <img src="@/assets/wallpaper.png" class="wallpaper" />
            </div>

            <div>
                <img src="@/assets/figure.png" class="banner-image" />
            </div>
        </div>
    </div>
</template>
<script>
import logoIcon from '@/assets/logo_icon.svg'
import heartIcon from '@/assets/heart_icon.svg'
import cartIcon from '@/assets/cart_icon.svg'
import userIcon from '@/assets/user_icon.svg'
import compareIcon from '@/assets/compare_icon.svg'
import browseIcon from '@/assets/browse_icon.svg'
import flameIcon from '@/assets/flame_icon.svg'
import hotlineIcon from '@/assets/hotline_icon.svg'
import SearchBoxComponent from './SearchBoxComponent.vue';
import mailIcon from '@/assets/mail_icon.svg'
export default {
    name: 'MenuItemComponents',
    data() {
        return {
            logoIcon,
            heartIcon,
            cartIcon,
            userIcon,
            compareIcon,
            browseIcon,
            flameIcon,
            hotlineIcon,
            mailIcon
        }
    },
    components: {
        SearchBoxComponent,
    },
    props: {
        isHomePage: {
            type: Boolean,
            default: false
        }
    }
}
</script>
<style scoped>
.container {
    margin: 20px 0px;
}

.header {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 100px;
}

.logo {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.logo h1 {
    font-family: "Quicksand", sans-serif;
    font-size: 40px;
    font-weight: bold;
    color: #3BB77E;
    margin: -15px 0px 0px 5px;
    text-align: left;
}

.logo h2 {
    font-family: "Montserrat", sans-serif;
    font-size: 11px;
    font-weight: 600;
    color: #253D4E;
    margin: -7px 0px 0px 5px;
    text-align: left;
}

.right-icons {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 30px;
    margin-left: auto;
    font-family: 'Lato', sans-serif;
    font-size: 16px;
    color: #253D4E;
}

.right-icons div {
    display: flex;
    align-items: center;
    gap: 5px;
}

.navigation-block {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 40px;
}

.browse-category {
    display: flex;
    flex-direction: row;
    background-color: #3BB77E;
    margin: 20px 0px;
    padding: 10px;
    border-radius: 5px;
}

.browse-category select {
    margin-left: 10px;
    background-color: transparent;
    border: none;
    color: #FFFFFF;
    font-size: 16px;
    font-family: 'Quicksand', sans-serif;
    font-weight: bold;
    cursor: pointer;
}

.navigations {
    display: flex;
    gap: 40px;
}

.navigations span {
    display: flex;
    align-items: center;
    gap: 5px;
    font-family: 'Quicksand', sans-serif;
    font-size: 16px;
    font-weight: bold;
    color: #1B1B1B
}

.navigations div {
    align-items: center;
    font-family: 'Quicksand', sans-serif;
    font-size: 16px;
    font-weight: bold;
    color: #253D4E
}

.navigations select {
    align-items: center;
    font-family: 'Quicksand', sans-serif;
    font-size: 16px;
    border: none;
    font-weight: bold;
    color: #253D4E
}

.hotline {
    display: flex;
    flex-direction: row;
    margin-left: auto;
}

.hotline h1 {
    font-family: "Quicksand", sans-serif;
    font-size: 24px;
    font-weight: bold;
    color: #3BB77E;
    margin: -5px 0px 0px 10px;
    text-align: left;
}

.hotline h2 {
    font-family: "Lato", sans-serif;
    font-size: 12px;
    color: #7E7E7E;
    margin: -7px 0px 0px 10px;
    text-align: left;
    letter-spacing: 1px;
}

.figure {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 538px;
    background-color: #FDC04033;
    border-radius: 30px;
    padding: 0px 60px;
    margin-top: 20px;
    overflow: hidden;
    position: relative;
}

.figure h1 {
    font-family: "Quicksand", sans-serif;
    font-size: 72px;
    font-weight: bold;
    color: #253D4E;
    line-height: 78px;
}

.figure h2 {
    font-family: "Lato", sans-serif;
    font-size: 30px;
    color: #7E7E7E;
    margin-top: 30px;
}

.banner-image {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 50%;
    overflow: hidden;
    z-index: 2;
}

.subscribe-form {
    display: flex;
    flex-direction: row;
    border-radius: 30px;
    margin: 60px 200px 0px 0px;
    background-color: #FFFFFF;
    justify-content: space-between;
    align-items: center;
}

.subscribe-form div {
    display: flex;
    align-items: center;
    z-index: 3;
}

.mail-icon {
    margin-left: 20px;
}

.subscribe-form input {
    padding: 20px;
    border: none;
    border-radius: 30px;
}

.subscribe-button {
    background-color: #3BB77E;
    border-radius: 30px;
    border: none;
    padding: 20px 40px;
    font-family: 'Quicksand', sans-serif;
    font-size: 16px;
    font-weight: bold;
    color: #FFFFFF;
    cursor: pointer;
}

.wallpaper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    opacity: 0.1;
    z-index: 1;
    overflow: hidden;
}

.figure div:first-child {
    position: relative;
    z-index: 3;
}
</style>