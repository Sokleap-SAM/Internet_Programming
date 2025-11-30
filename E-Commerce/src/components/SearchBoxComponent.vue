<template>
    <div class="container">
        <select class="select">
            <option value="option1">All Categories</option>
        </select>
        |
        <div class="search-block">
            <input class="input-text" type="text" placeholder="Search for items" />
            <button class="search-button">
                <img :src="searchIcon" />
            </button>
        </div>
    </div>
</template>

<script>
import searchIcon from '@/assets/search_icon.svg'
export default {
    data() {
        return {
            searchIcon
        }
    },
    name: 'SearchBoxComponent',
}
</script>

<style scoped>
.container {
    width: 700px;
    margin-left: auto;
    padding: 20px;
    border-radius: 5px;
    border: 2px solid #BCE3C9;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 50px;
}

.select {
    margin-right: 10px;
    background-color: transparent;
    color: #253D4E;
    border: none;
    font-size: 14px;
    font-family: 'Quicksand', sans-serif;
    cursor: pointer;
}

.search-block {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-grow: 1;
}

.input-text {
    font-family: 'Lato', sans-serif;
    font-size: 12px;
    color: #B6B6B6;
    background-color: transparent;
    border: none;
    margin-left: 10px;
}

.search-button {
    background-color: transparent;
    border: none;
}
</style>