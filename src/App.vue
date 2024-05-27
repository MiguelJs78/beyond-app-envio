<template>
  <v-app>
    <v-main>
      <HeaderPage/>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import HeaderPage from './components/HeaderPage.vue';

export default {
  name: "App",
  components: {
    HeaderPage
  }
};
</script>