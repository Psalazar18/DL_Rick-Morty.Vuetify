<template>
  <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="login">
    <v-container>
        <h1 class="text-center">Inicia Sesión</h1>
        <v-row>
            <v-col cols="12" md="4">
                <v-text-field v-model="email" :rules="emailRules" label="Email" type="email" required></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
                <v-text-field v-model="password" label="Password" type="passwords" required></v-text-field>
            </v-col>
        </v-row>
        <div>
            <v-btn color="success" class="mr-4" type="submit">Login</v-btn>
            <v-btn color="error" class="mr-4" @click="reset"> Reset</v-btn>
        </div>
    </v-container>
  </v-form>
</template>

<script>
import firebase from 'firebase';
export default {
    name: 'Login',
    data: () => ({
      valid: false,
      email: '',
      password: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
    }),
    methods: {
        login(){
            if(this.email && this.password && this.password >= 6){
                firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                .then(resp => {
                    console.log(resp)
                    this.$router.push('/cards');
                }).catch(error => {
                    if (error.code == "auth/wrong-password") {
                    console.log(error);
                    } else if(error.code == "auth/invalid-email") {
                    console.log(error);
                    } else if(error.code == "auth/user-disabled"){
                    console.log(error);
                    } else {
                    console.log(error);
                    this.$router.push('/register');
                    }
                })
            }
        },       
        reset() {
            this.$refs.form.reset()
        },
    },

}
</script>

<style>

</style>