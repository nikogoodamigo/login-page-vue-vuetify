<template>
    <v-sheet class="login-form mx-auto rounded-lg">
        <v-row>
            <h1 class="text-center">Log In</h1>
        </v-row>
        <v-form @submit.prevent="loginAction(this.username, this.password)">
          <v-row class="user-input">
            <v-text-field v-model="username" :rules="rule1" label="Username"></v-text-field>
          </v-row>
          <v-row class="user-input">
            <v-text-field v-model="password" :rules="rule2" label="Password" required></v-text-field>
          </v-row>
          <v-row class="user-input">
            <v-btn  size="large" variant="elevated" type="submit"> SUBMIT </v-btn>
          </v-row>
        </v-form>
      </v-sheet>
</template>

<script>
import {loginAction} from '@/functions/user-login';


export default{
    data: () => ({
      username: '',
      rule1: [
        value => {
          if (!value) {return 'You must enter a username.'}
        },
      ],
      password: '',
      rule2: [
        value => {
            if (!value) {return 'You must enter a password.'}
        },
      ],   
    }),
    methods: {
      loginAction
      }   
}

</script>

<style scoped>
h1 {
    margin-bottom: 25px;
    font-size: 3rem;
}

.login-form{
    width: 30%;
    margin-top: 10%;
    margin-bottom: 10%;
    padding: 25px 50px;
    border-width: 2px;
    border-color: grey;
}

.user-input{
    margin: 10px 0;
}
</style>