<template>
    <v-card class="content">
        <h3>{{ counter }}</h3>
        <v-btn @click="addOne">Add 1</v-btn>
        <v-btn @click="minusOne">Minus 1</v-btn>
    </v-card>
</template>

<script>
export default{
    
    computed:{
        counter() {
            return this.$store.state.counter;
        }
    },
    methods: {
        addOne() {
            this.$store.state.counter++;
        },
        minusOne() {
            this.$store.state.counter--;
        }
    }

}

</script>
