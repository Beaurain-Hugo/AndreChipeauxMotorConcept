<template>
      <div
        v-for="product in productList"
        v-bind:key="product.title"
      >
        <product-thumbnail
          v-bind:key="product.title"
          :product="product"
          :thumbnail-id="'thumbnail-'"
        ></product-thumbnail>
      </div>
    
</template>

<script>


import ProductThumbnail from "@/components/product-thumbnail.vue";

export default {
  components: {
    ProductThumbnail,
  },
  data() {
    return {
      productList: [
        {
          obj3DSettings: {
            cameraPosition: [-1.8, 0.6, 2.7]
          }
        },
      ]
    };
  }
};
</script>

