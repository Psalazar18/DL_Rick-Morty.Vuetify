<template>
<v-app>
  <v-container>
    <div class="text-center my-5">
      <v-btn color="cyan darken-2" class="mr-4" @click="signOut">Sign Out</v-btn>
      <v-btn color="cyan" class="mr-4" @click="Add">Add</v-btn>
    </div>
    <v-row no-gutters style="height: 150px;">
      <v-col md="4" lg="4" v-for="(item,index) in traerCharacters" :key="index">
        <v-card max-width="350" class="my-3" >
          <v-img :src="item.image"></v-img>
          <v-card-text class="black--text">
            <v-card-title class="text-center">{{item.name}}</v-card-title>
          </v-card-text>
        
            <div class="text-center">
              <v-btn color="lime lighten-1" class="mr-4 mb-3" @click="Edit(item.id)">Edit</v-btn>
              <v-btn color="deep-orange darken-4" class="mb-3" @click="Delete(item.id)">Delete</v-btn>              
            </div>
        </v-card>
      </v-col>
      </v-row>
      
  </v-container>
</v-app>
</template>

<script>
import { mapGetters } from "vuex";
import firebase from 'firebase';
export default {
  name: 'Cards',
  methods: {
    signOut(){
      firebase.auth().signOut().then(() => {
            this.$router.replace('/login');
            console.log('salio')
        }).catch((error) => {
            console.error(error);
        });
    },
    Add(){
      this.$router.push('/add')
    },
    Delete(id){
      this.$confirm('This will permanently delete the file. Continue?', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning'
        }).then(() => {
      this.$message({
        type: 'success',
        message: 'Elemento borrado'
      });
      this.$store.dispatch('eliminarCharacter',id);
        }).catch((error) => {
          console.log(error)
        this.$message({
          type: 'info',
          message: 'No se pudo borrar...'
        });          
      });
    },
    Edit(id){
      this.$router.push({name: 'Editar', params:{id:id}});
    }
  },
  computed: {
    ...mapGetters(['traerCharacters'])
  }
}
</script>