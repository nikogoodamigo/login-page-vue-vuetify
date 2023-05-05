<template>
    <v-toolbar density="compact">
      <v-toolbar-title>CMA</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn>Grupy</v-btn>
      <v-btn>Oczekujące</v-btn>
      <v-btn @click="logoutAction">Wyloguj</v-btn>
    </v-toolbar>
</template>

<script>
import { router } from '@/router';

export default { 
  methods: {
    logoutAction (){
      router.push('/')
    }
  }
};
</script>
