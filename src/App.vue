<template>
  <div id="app">
      <div class="container">
          <div class="row">
              <div class="col-md-6">
                  <SimpleImageZoomer :imagePath="imagePath" :zoomer-options="zoomerOptions"/>
              </div>
              <div class="col-md-6">
                  <p>
                      Breakpoints are the building blocks of responsive design. Use them to control when your layout can be adapted at a particular viewport or device size.
                  </p>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import SimpleImageZoomer from './components/SimpleImageZoomer.vue'

export default {
  name: 'App',
  components: {
      SimpleImageZoomer
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
