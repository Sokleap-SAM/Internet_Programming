<template>
    <div class="container">
        <div class="big-tumbnail">
            <button  class="search-button">
                <img src='@/assets/search_icon.svg' />
            </button>
            <img :src="mainImage" class="main-image" />
        </div>
        <div class="small-thumbnail-navigations">
            <button class="nav-arrow" @click="navLeft">←</button>
            <div class="thumbnails-container">
                <div v-for="(image, index) in thumbnails" :key="index" class="thumbnail-wrapper"
                    :class="{ 'active': image === mainImage }" @click="setMainImage(image)">
                    <img :src="image" :alt="'Thumbnail ' + (index + 1)" class="thumbnail-image" />
                </div>
            </div>
            <button class="nav-arrow" @click="navRight">→</button>
        </div>
    </div>
</template>

<script>
// import mangoImage from '@/assets/mango.jpg'
import orangeImage from '@/assets/orange.png'
import paperImage from '@/assets/paper.png'
import starwberryImage from '@/assets/strawberry.png'
import almondImage from '@/assets/almond.png'
export default {
    name: 'ProductImageComponent',
    data() {
        return {
            mainImage: null,
            thumbnails: [
                orangeImage,
                paperImage,
                starwberryImage,
                almondImage,
            ]
        }
    },
    methods: {
        setMainImage(imagePath) {
            this.mainImage = imagePath;
        },
        navRight() {
            const currentIndex = this.thumbnails.indexOf(this.mainImage);
            const nextIndex = (currentIndex + 1) % this.thumbnails.length;
            this.setMainImage(this.thumbnails[nextIndex]);
        },
        navLeft() {
            const currentIndex = this.thumbnails.indexOf(this.mainImage);
            const prevIndex = (currentIndex - 1 + this.thumbnails.length) % this.thumbnails.length;
            this.setMainImage(this.thumbnails[prevIndex]);
        }
    },
    mounted() {
        if (this.image) {
            this.mainImage = this.image;
        }
    },
    props: {
        image: {
            required: true,
        }
    }
}
</script>

<style scoped>
.container {
    width: 870px;
}

.big-tumbnail {
    border-radius: 15px;
    border: 1px solid #E5E5E5;
    position: relative;
    padding: 120px 30px;
    overflow: hidden;
}

.search-button {
    position: absolute;
    top: 30px;
    right: 30px;
    width: 24px;
    color: #B6B6B6;
    background-color: transparent;
    border: none;
    cursor: pointer;
}

.main-image {
    width: 784px;
    height: 421px;
    object-fit: cover;
}

.small-thumbnail-navigations {
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  align-items: center;
  gap: 20px;
}

.thumbnails-container {
  display: flex;
  gap: 20px; 
  border-radius: 15px;
}

.thumbnail-wrapper {
  width: 100px; 
  height: 100px;
  cursor: pointer;
  border-radius: 15px;
  border: 1px solid #F2F3F4;
  overflow: hidden;
  padding: 20px 0px;
}

.thumbnail-wrapper:hover {
  border-color: #ccc;
}

.thumbnail-wrapper.active {
  border-color:#3BB77E;
}

.thumbnail-image {
  width: 100%;
  height: 100%;
  object-fit: contain; 
}

.nav-arrow {
  background: #F2F3F4;
  border-radius: 30px;
  width: 40px;
  height: 40px;
  justify-content: center;
  font-size: 18px;
  cursor: pointer;
  border: none;
  color: #7E7E7E;
}

.nav-arrow:hover {
  background: #3BB77E;
  color: #FFFFFF;
}
</style>