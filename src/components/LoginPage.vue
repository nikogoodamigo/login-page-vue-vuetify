<template>
      <BasicToolbar />
      <v-row>
        <v-col>
          <LoginForm />
        </v-col>
        <v-col>
          <v-card>

          </v-card>
        </v-col>
      </v-row>

</template>

<script>
import BasicToolbar from '@/components/BasicToolbar.vue';
import LoginForm from './LoginForm.vue';

  export default {
    name: 'LoginPage',

    components:{BasicToolbar, LoginForm},
  };
</script>
