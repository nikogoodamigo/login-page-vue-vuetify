<template>
      <v-card>
        <BasicToolbar />
        <LoginForm />
      </v-card>

</template>

<script>
import BasicToolbar from '@/components/BasicToolbar.vue';
import LoginForm from './LoginForm.vue';

  export default {
    name: 'LoginPage',

    components:{BasicToolbar, LoginForm},
  };
</script>
