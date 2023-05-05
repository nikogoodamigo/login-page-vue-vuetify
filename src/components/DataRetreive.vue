<template>
    <div>
        <v-card>
            <v-list :items="items"></v-list>
        </v-card>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      items: []
    };
  },
  mounted() {
    axios.get('/items')
      .then(response => {
        this.items = response.data;
        console.log(response.data)
      })
      .catch(error => {
        console.error(error);
      });
  }
};
</script>