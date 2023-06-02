import SimpleImageZoomer from "./components/SimpleImageZoomer.vue";

const Vue2SimpleImageZoomer = {
 install(Vue) {
  // Let's register our component globally
  // https://vuejs.org/v2/guide/components-registration.html
  Vue.component("simple-image-zoomer", SimpleImageZoomer);
 }
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(Vue2SimpleImageZoomer);
}

export default Vue2SimpleImageZoomer;