<template>
      <div
      
      >
        <product-thumbnail
         
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
      
    };
  }
};
</script>

