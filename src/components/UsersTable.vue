<template>
  <v-data-table
    :headers="headers"
    :items="users"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
</template>

<script>
export default {
  name: "users",
  props: {
    users: {
      type: Array,
      default: () =>([])
    }
  },
  data () {
    return {
      headers: [
        {
          text: 'Id',
          value: 'id',
        },
        { text: 'User name', value: 'username' },
        { text: 'email', value: 'email' }
      ]
    };
  }
}
</script>