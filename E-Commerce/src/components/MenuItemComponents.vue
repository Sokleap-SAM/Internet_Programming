<template>
    <div class="top_part">
        <div class="logo">
            <img :src="logoImage" class="logo-image"/>
            <div class="logo-text">
                <h1 class="text1">
                    Melon
                </h1>
                <h1 class="text2">
                    Mart & Grocery
                </h1>
            </div>
        </div>
        <SearchBoxComponent />
        <div>
            <div>&#x1F464;</div>
            <div>&#x1F5D8;</div>
            <div>&#x2764;</div>
        </div>
    </div>
    <div class="bottom_part">
        <h3>hello</h3>
    </div>
</template>
<script>
import logoImage from '@/assets/logo.png'
import SearchBoxComponent from './SearchBoxComponent.vue';
export default {
    name: 'MenuItemComponents',
    data() {
        return {
            logoImage
        }
    },
    components: {
        SearchBoxComponent
    }
}
</script>
<style scoped>
.logo{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.top_part{
    display: flex;
    flex-direction: row;
    align-items: center;
}

.bottom_part{
    display: flex;
    flex-direction: row;
}

.logo-image{
    width: 78px;
    height: 58px;
}

.logo-text{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 10px;
}

.text1{
    font-size: 24px;
    font-weight: bold;
    color: #3BB77E;
    line-height: 28px;
}

.text2{
    font-size: 14px;
    color: #253D4E;
    line-height: 16px;
}
</style>