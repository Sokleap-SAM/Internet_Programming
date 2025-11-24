<template>
    <div class="container">
        <h2 class="title">
            {{ title }}
        </h2>
        <ul class="category-list">
            <li><a href="#" class="category-item active">All</a></li>
            <li><a href="#" class="category-item">Milks & Dairies</a></li>
            <li><a href="#" class="category-item">Coffes & Teas</a></li>
            <li><a href="#" class="category-item">Pet Foods</a></li>
            <li><a href="#" class="category-item">Meats</a></li>
            <li><a href="#" class="category-item">Vegetables</a></li>
            <li><a href="#" class="category-item">Fruits</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'MenuComponent',
    props: {
        title: {
            type: String,
            default: 'Feature Categories',
        },
    },
}
</script>

<style scoped>
.container {
    padding: 40px 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}


.title{
    font-family: 'Quicksand', sans-serif;
    font-size: 32px;
    font-weight: bold;
    color: #253D4E;
}

.category-list {
    display: flex;
    flex-direction: row;
    list-style: none;
    padding: 0;
    margin: 0;
    gap: 20px; 
}

.category-item {
    font-family: 'Lato', sans-serif; 
    font-size: 16px;
    color: #253D4E; 
}

.category-item:hover {
    color: #3BB77E;
}

.category-item.active {
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
}
</style>