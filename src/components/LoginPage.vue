<template>
      <BasicToolbar />
      <v-card class="content">
        <LoginForm />
      </v-card>
      <BasicFooter />
</template>

<script>
import BasicToolbar from '@/components/BasicToolbar.vue';
import LoginForm from './LoginForm.vue';
import BasicFooter from './BasicFooter.vue';

  export default {
    name: 'LoginPage',

    components:{
      BasicToolbar, 
      LoginForm,
      BasicFooter,
    },
  };
</script>

<style scoped>

.content{
  height: 85%;
}

</style>
