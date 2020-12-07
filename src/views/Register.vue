<template>
<v-app>
  <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="register">
    <v-container>
        <h1 class="text-center">Registrate</h1>
        <v-row>
            <v-col cols="12" md="4">
                <v-text-field v-model="email" :rules="emailRules" label="Email" type="email" required></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
                <v-text-field v-model="password" label="Password" type="passwords" required></v-text-field>
            </v-col>
        </v-row>
        <div>
            <v-btn color="primary" class="mr-4" type="submit">Registrar</v-btn>
            <v-btn color="error" class="mr-4" @click="reset"> Reset</v-btn>
            <v-btn color="success" class="mr-4" @click="goBack"> Go Back</v-btn>
        </div>
    </v-container>
  </v-form>
</v-app>
</template>

<script>
import firebase from 'firebase'
export default {
name: 'Register',
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
        register(){
            if(this.email && this.password && this.password >= 6){
                firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(resp => {
                    console.log(resp)
                    this.$router.push('/');
                }).catch(error => {
                    console.log(error)
                })
            }
        },
        reset() {
            this.$refs.form.reset()
        },
        goBack(){
            this.$router.push('/login')
        }
    },

}
</script>

<style>

</style>