<template>
<div class="product-thumbnail" :id="thumbnailId">
        <product-view
          :container-id="thumbnailId"
          :model-settings="product.obj3DSettings"
        ></product-view>
      </div>
</template>

<script>
import ProductView from "./product-view.vue";

export default {
  name: "ProductThumbnail",
  components: {
    ProductView
  },
  props: {
    product: {
      type: Object,
      required: true
    },
    thumbnailId: {
      type: String,
      required: true
    }
  }
};
</script>


<style>
.product-thumbnail {
  width: 100%;
  height: 80vh;
}
.title {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  text-align: center;
  border-bottom: 1px solid #ccc;
}
</style>