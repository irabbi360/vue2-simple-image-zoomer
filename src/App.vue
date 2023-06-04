<template>
    <div id="app">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <!--                  <SimpleImageZoomer :imagePath="imagePath" :zoomer-options="zoomerOptions"/>-->
                    <GalleryImageZoomer/>
                </div>
                <div class="col-md-6">
                    <div class="product-details-content ml-70"><h2>Sahiwal Tag No:
                        245</h2>
                        <div class="product-details-price"><span>৳900,000.00</span> <!----></div>
                        <div data-v-79104356="" class="pro-details-rating-wrap"><!----> <!----> <!----> <!----> <!---->
                            <span data-v-79104356=""><a data-v-79104356="" href="#">0 Reviews</a></span></div> <!---->
                        <p data-v-79104356=""></p>
                        <div data-v-79104356="" class="short-description">
                            <div data-v-79104356="">Category: Sahiwal,
                                Live Weight: 730kg
                            </div>
                        </div>
                        <div data-v-79104356="" class="pro-details-quality">
                            <div data-v-79104356="" class="cart-plus-minus">
                                <button data-v-79104356="" class="dec qtybutton">-</button>
                                <input data-v-79104356="" type="text" readonly="readonly" class="cart-plus-minus-box">
                                <button data-v-79104356="" class="inc qtybutton">+</button>
                            </div>
                            <div data-v-79104356="" class="pro-details-cart btn-hover">
                                <button data-v-79104356="" style="border-radius: 33px;">Add To Cart</button>
                            </div>
                            <div data-v-79104356="" class="pro-details-wishlist">
                                <button data-v-79104356="" title="wishlist"><i data-v-79104356=""
                                                                               class="fa fa-heart-o"></i></button>
                            </div>
                            <div data-v-79104356="" class="pro-details-compare">
                                <button data-v-79104356="" title="compare"><i data-v-79104356=""
                                                                              class="pe-7s-shuffle"></i></button>
                            </div>
                        </div>
                        <div data-v-79104356="" class="pro-details-social">
                            <ul data-v-0cecff7e="" data-v-79104356="" class="list-inline my-3 my-md-0 social sm"><!---->
                                <!----> <!----> <!----></ul>
                            <div data-v-79104356="" class="rounded-pill bg-alter-4 p-1 d-inline-block mt-4"
                                 style="width: 262px;">
                                <div data-v-79104356="" class="d-flex align-items-center text-white"><img
                                        data-v-79104356="" src="/_nuxt/assets/images/hotline_icon.jpeg" alt=""
                                        style="height: 50px; width: 50px; border-radius: 50%;"> <span data-v-79104356=""
                                                                                                      class="mx-2 text-white fs-15 fw-600"
                                                                                                      style="font-size: 28px;">
                              
                          </span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import SimpleImageZoomer from './components/SimpleImageZoomer.vue'
import GalleryImageZoomer from './components/GalleryImageZoomer.vue'

export default {
    name: 'App',
    components: {
        // SimpleImageZoomer,
        GalleryImageZoomer,
    },
    data() {
        return {
            imagePath: 'https://usamaagro.com/server/public/images/20230524200213_original__media_68.jpg',
            zoomerOptions: {
                zoomFactor: 3,
            }
        }
    }
}
</script>

<style>

</style>
