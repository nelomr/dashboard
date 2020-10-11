<template>
  <div class="home">
    <HomeDashboard msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeDashboard from '@/components/HomeDashboard.vue'

export default {
  name: 'Home',
  components: {
    HomeDashboard
  }
}
</script>
