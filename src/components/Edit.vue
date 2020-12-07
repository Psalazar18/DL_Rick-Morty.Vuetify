<template>
<v-app>
  <v-form ref="form" @submit.prevent="edit">
    <v-container>
        <h1 class="text-center">Edit your card!</h1>
        <v-row>
            <v-col cols="12" md="4">
                <v-text-field v-model="objetoEdit.name" label="Name" type="text" required></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
                <v-text-field v-model="objetoEdit.image" label="Image URL" type="text" required></v-text-field>
            </v-col>
        </v-row>
            <v-btn color="success" class="mr-4" type="submit">Edit</v-btn>
            <v-btn color="primary" class="mr-4" @click="goBack"> Return</v-btn>
    </v-container>
  </v-form>
</v-app>
</template>

<script>
export default {
  name: 'Edit',
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
    edit(){
      this.$store.dispatch('Editing', this.objetoEdit);
    },
    goBack(){
      this.$router.push('/cards')
    }
  },
  created() {
        let datos = {};
        datos = this.$store.getters.traerCharacters.find(resp => resp.id === this.$route.params.id)
        console.log(datos)
        if (datos){
            this.objetoEdit.name = datos.name;
            this.objetoEdit.image = datos.image;
            this.objetoEdit.id = datos.id;
        }
    },
}
</script>

<style>

</style>