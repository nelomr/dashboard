<template>
    <v-sheet
      class="v-sheet--offset mx-auto"
      :color="sale.color"
      elevation="12"
      max-width="calc(100% - 32px)"
    >
    <v-sparkline
      :labels="sale.labels"
      :value="sale.sales"
      color="white"
      line-width="2"
      padding="16"
    ></v-sparkline>
  </v-sheet>
</template>

<script>
export default {
  name: 'Sales',
  props: {
    sale: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>