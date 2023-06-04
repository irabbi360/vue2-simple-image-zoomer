# vue2-simple-image-zoomer

Simple Image Zoomer component of Vue.js

## Features

- Compatible with native `real time` behavior
- Touch device support
## Requirements

Vue >= 2.0
# Installation

## NPM
```
npm install --save vue2-simple-image-zoomer
```
## Yarn
```
yarn add vue2-simple-image-zoomer
```

## Usage

### Basic Usage
Just import vue2-simple-image-zoomer component and use it in your components. The props are object & it must required, so you can use `zoomerOptions` as a object.

```html
<template>
  <simple-image-zoomer
    :zoomer-options="zoomerOptions"
  >
  </simple-image-zoomer>
</template>

<script>
import SimpleImageZoomer from 'vue2-simple-image-zoomer'
// you probably need to import built-in style
import 'vue2-simple-image-zoomer/dist/vue2-simple-image-zoomer.css'

export default {
  data () {
    return {
      zoomerOptions: {
              imagePath: 'https://example.com/product_image.jpg',
              zoomFactor: 3,
          }
    }
  },
  components: {
      SimpleImageZoomer
  }
}
</script>

<style>

</style>
```
### Available props:


### Install Globally
```
Vue.use(Vue2SimpleImageZoomer)
```

### Use Components Locally
```
import SimpleImageZoomer from 'vue2-simple-image-zoomer'
```

### Nuxt.js Usage

create a plugin file `vue2-simple-image-zoomer.js` inside `/plugins` dir

```js
import Vue from 'vue'
import SimpleImageZoomer from 'vue2-simple-image-zoomer'

Vue.component('simple-image-zoomer', SimpleImageZoomer)
```

import a plugin in nuxt.config.js with disable ssr mode

```js
plugins: [{ src: '~/plugins/vue2-simple-image-zoomer', ssr: false }]
```

## License

MIT