<template>
  <v-data-table
    :headers="productsHeader"
    :items="products"
    :items-per-page="5"
    :multiSort="true"
    class="elevation-1"
  ></v-data-table>
</template>

<script>
export default {
  name: 'Products',
  props: {
    products: {
      type: Array,
      deafult: () =>([])
    }
  },
  computed: {
    productsHeader() {
      let hdrs = [];
      for (const product in this.products[0]) {
        product !== '__typename' && hdrs.push({text:product, value: product})
      }
      return hdrs;
    }
  }
}
</script>