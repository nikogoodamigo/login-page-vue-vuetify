<template>
  <v-app>
    <v-main>
      <LoginPage />
      <AdminPanel />
    </v-main>
  </v-app>
</template>

<script>
// import LoginPage from './components/LoginPage.vue';
import AdminPanel from './components/AdminPanel.vue';

export default {
  name: 'App',

  components: {
    // LoginPage,
    AdminPanel

},

  data: () => ({
    //
  }),
}
</script>
