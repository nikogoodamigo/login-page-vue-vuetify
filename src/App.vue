<template>
  <v-app id="app">
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import {router} from './router';

export default {
    name: 'App',
    router,
    data: () => ({
    //
    }),
}
</script>
