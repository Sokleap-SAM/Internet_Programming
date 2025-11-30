<template>
    <div class="container">
        <div class="title">
            {{ categoryName }}
        </div>
        <div class="breadcrumbs">
            <span>
                Home
            </span>
            <img src="@/assets/small_angle_right.svg" />
            <span>
                Categories
            </span>
            <img src="@/assets/small_angle_right.svg" />
            <span>
                {{ categoryName }}
            </span>
        </div>
        <div>
            <img src="@/assets/left_wallpaper.png" class="left-wallpaper" />
            <img src="@/assets/right_wallpaper.png" class="right-wallpaper" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'PageHeaderComponent',
    props: {
        categoryName: {
            type: String,
            required : true,
        }
    }
}
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    padding: 60px 0px 60px 60px;
    background-color: #3BB77E33;
    border-radius: 20px;
    position: relative;
}

.title {
    font-family: 'Quicksand', sans-serif;
    font-size: 48px;
    font-weight: bold;
    color: #253D4E;
    position: relative; 
    z-index: 5;
}

.breadcrumbs {
    font-family: 'Lato', sans-serif;
    font-size: 18px;
    color: #7E7E7E;
    display: flex;
    gap: 15px;
    position: relative; 
    z-index: 5;
}

.left-wallpaper{
    position: absolute;
    top: 60px;
    left: -430px;
    width: 60%;
    overflow: hidden;
    opacity: 0.1;
    z-index: 1;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
}

.right-wallpaper{
    position: absolute;
    top: 0px;
    right: 0px;
    width: 60%;
    overflow: hidden;
    opacity: 0.1;
    z-index: 1;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
}
</style>