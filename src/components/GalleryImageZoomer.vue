<template>
    <div class="product-zoomer">
        <div @mousemove="handleMouseMove"
             @mouseenter="showZoomedImage = true"
             @mouseleave="showZoomedImage = false">
            <div class="main-image-container">
                <img :src="activeImage" class="img-fluid" alt="Product Image" ref="productImage"/>
            </div>
            <div class="zoomed-image-container" v-if="showZoomedImage" :style="zoomedImageStyle"></div>
        </div>
        <div class="image-gallery">
            <div
                v-for="(image, index) in thumbs"
                :key="index"
                class="thumbnail"
                :class="{ active: activeImageIndex === index }"
                @click="changeActiveImage(index)"
            >
                <img :src="image" alt="Product Thumbnail"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            zoomerOptions: {
                zoomFactor: 2
            },
            activeImageIndex: 0,
            showZoomedImage: false,
            imagePath: 'https://usamaagro.com/server/public/images/20230524200213_original__media_68.jpg',
            zoomedImageStyle: {
                backgroundImage: '',
                backgroundPosition: '0% 0%',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '200% 200%',
                zIndex: 9999
            },
            imageGallery: [
                "https://usama.wardan.biz/server/public/images/20230524200213_original__media_68.jpg",
                "https://usama.wardan.biz/server/public/images/20230524200152_original__media_482.jpg",
                "https://usama.wardan.biz/server/public/images/20230524200153_original__media_398.jpg",
                "https://usama.wardan.biz/server/public/images/20230524200202_original__media_107.jpg",
                "https://usama.wardan.biz/server/public/images/20230524200225_original__media_71.jpg",
                "https://usama.wardan.biz/server/public/images/20230524200152_original__media_482.jpg"
            ],
            thumbs: [
            "https://usama.wardan.biz/server/public/images/20230524200213image_72x72_media_341.png",
            "https://usama.wardan.biz/server/public/images/20230524200152image_72x72_media_97.png",
            "https://usama.wardan.biz/server/public/images/20230524200153image_72x72_media_73.png",
            "https://usama.wardan.biz/server/public/images/20230524200202image_72x72_media_112.png",
            "https://usama.wardan.biz/server/public/images/20230524200225image_72x72_media_144.png",
            "https://usama.wardan.biz/server/public/images/20230524200152image_72x72_media_97.png"
    ]
        };
    },
    computed: {
        activeImage() {
            return this.imageGallery[this.activeImageIndex];
        }
    },
    methods: {
        handleMouseMove(event) {
            if (!this.showZoomedImage) return;

            const container = this.$refs.productImage.getBoundingClientRect();
            const offsetX = event.clientX - container.left;
            const offsetY = event.clientY - container.top;

            const zoomedWidth = container.width / this.zoomerOptions.zoomFactor;
            const zoomedHeight = container.height / this.zoomerOptions.zoomFactor;

            const bgPosX = (offsetX / container.width) * 100;
            const bgPosY = (offsetY / container.height) * 100;

            const bgSizeX = (container.width / zoomedWidth) * 100;
            const bgSizeY = (container.height / zoomedHeight) * 100;

            this.zoomedImageStyle.backgroundImage = `url(${this.activeImage})`;
            this.zoomedImageStyle.backgroundPosition = `${bgPosX}% ${bgPosY}%`;
            this.zoomedImageStyle.backgroundSize = `${bgSizeX}% ${bgSizeY}%`;
        },
        changeActiveImage(index) {
            this.activeImageIndex = index;
        }
    },
};
</script>

<style>
.product-zoomer {
    position: relative;
    display: inline-block;
}

.image-gallery {
    display: flex;
    overflow-x: auto;
    margin-bottom: 10px;
}

.thumbnail {
    width: 80px;
    height: 80px;
    margin-right: 10px;
    cursor: pointer;
}

.thumbnail img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.thumbnail.active {
    border: 2px solid #000;
}

.main-image-container {
    position: relative;
    overflow: hidden;
}

.zoomed-image-container {
    position: absolute;
    top: 0;
    left: 100%;
    width: 400px; /* Adjust as per your needs */
    height: 400px; /* Adjust as per your needs */
    overflow: hidden;
    margin-left: 10px; /* Adjust the margin to create spacing */
}

.zoomed-image-container img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.img-fluid,
.img-thumbnail {
    height: auto;
    max-width: 100%;
}
</style>