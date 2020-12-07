<template>
<v-app>
  <v-form ref="form" @submit.prevent="add">
    <v-container>
        <h1 class="text-center">Add your card!</h1>
        <v-row>
            <v-col cols="12" md="4">
                <v-text-field v-model="objetoEdit.name" label="Name" type="text" required></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
                <v-text-field v-model="objetoEdit.image" label="Image URL" type="text" required></v-text-field>
            </v-col>
        </v-row>
            <v-btn color="success" class="mr-4" type="submit">Add</v-btn>
            <v-btn color="primary" class="mr-4" @click="goBack"> Return</v-btn>
    </v-container>
  </v-form>
</v-app>
</template>

<script>
export default {
    name: 'Add',
    data() {
        return {
        objetoEdit: {
            id: '',
            name: '',
            image: ''
        }
        }
    },
    methods: {
        add(){
            if(this.objetoEdit.name && this.objetoEdit.image){
                this.$router.push('/cards')
                this.$store.dispatch('addingCharacter',this.objetoEdit);
            }
        },
        goBack(){
            this.$router.push('/cards')
        }
    }
}
</script>