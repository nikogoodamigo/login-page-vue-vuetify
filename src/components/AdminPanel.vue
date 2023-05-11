<template>
  <AdminToolbar />
  <v-card class="admin-panel-form">
    <v-row>
      <v-col class="data-block" id="block-1">
        <v-card class="block-headline">
          <v-row>
            <v-col>
              <div>
                <h2>Grupy</h2>
              </div>
            </v-col>
            <v-col>
              <div class="d-flex justify-end">
                <v-btn variant="elevated" type="submit"> Więcej </v-btn>
              </div>
            </v-col>
          </v-row>
          <div class="block-data">
            <v-virtual-scroll :items="items" height="400">
              <template v-slot:default="{ item, index }">
                <div
                  :class="[
                    index % 2 === 0 ? 'py-2' : index % 5 == 0 ? 'py-8' : 'py-4',
                    index % 2 === 0 ? 'bg-grey-lighten-2' : index % 5 === 0 ? 'bg-grey-darken-2' : '',
                    'px-2'
                  ]"
                >
                  Grupa {{ item }}
                </div>
              </template>
            </v-virtual-scroll>
          </div>
        </v-card>
      </v-col>
      <v-col class="data-block">
        <v-card class="block-headline">
          <v-row>
            <v-col>
              <div>
                <h2>Oczekujące</h2>
              </div>
            </v-col>
            <v-col>
              <div class="d-flex justify-end">
                <v-btn variant="elevated" type="submit"> Więcej </v-btn>
              </div>
            </v-col>
          </v-row>
          <div class="block-data">
            <DataBlock />
          </div>        
        </v-card>
      </v-col>
    </v-row>
  </v-card>
  <BasicFooter />
</template>

<script>

import AdminToolbar from './AdminToolbar.vue';
import DataBlock from './DataBlock.vue';
import BasicFooter from './BasicFooter.vue';


  export default {
    components:{
      AdminToolbar,
      DataBlock,
      BasicFooter
    },
    computed: {
      items () {
        return Array.from({ length: 10 }, (k, v) => v + 1)
      },
    },


  }
</script>

<style scoped>

.admin-panel-form{
  height:85%;
}

.data-block{
  margin-top: 40px;
  margin-left: 35px;
  margin-right: 15px;
}

.block-headline{
  padding: 20px;
}

.block-data{
  padding-top: 20px;
}

</style>
