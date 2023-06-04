<template>
    <div class="product-zoomer"
         @mousemove="handleMouseMove"
         @mouseenter="showZoomedImage = true"
         @mouseleave="showZoomedImage = false">
        <div class="image-container">
            <img :src="imagePath" class="img-fluid" alt="Product Image" ref="productImage" />
        </div>
        <div class="zoomed-image-container" v-if="showZoomedImage" :style="zoomedImageStyle"></div>
    </div>
</template>

<script>
export default {
    props: {
        imagePath: {
            type: String,
            required: true
        },
        zoomerOptions: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            showZoomedImage: false,
            // imageUrl: 'https://usamaagro.com/server/public/images/20230524200213_original__media_68.jpg',
            zoomedImageStyle: {
                backgroundImage: '',
                backgroundPosition: '0% 0%',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '200% 200%',
            },
            // zoomFactor: 3, // Adjust the zoom factor as per your needs
        };
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

            this.zoomedImageStyle.backgroundImage = `url(${this.imagePath})`;
            this.zoomedImageStyle.backgroundPosition = `${bgPosX}% ${bgPosY}%`;
            this.zoomedImageStyle.backgroundSize = `${bgSizeX}% ${bgSizeY}%`;
        },
    },
};
</script>

<style>
.product-zoomer {
    position: relative;
    display: inline-block;
}

.image-container {
    position: relative;
    overflow: hidden;
}

.zoomed-image-container {
    position: absolute;
    top: 0;
    left: 100%;
    width: 300px; /* Adjust as per your needs */
    height: 300px; /* Adjust as per your needs */
    overflow: hidden;
    margin-left: 10px; /* Adjust the margin to create spacing */
}

.zoomed-image-container img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
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
.img-fluid, .img-thumbnail {
    height: auto;
    max-width: 100%;
}
</style>
