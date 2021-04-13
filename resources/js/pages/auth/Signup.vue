<template>
    <div>
        <div class="container">
            <div class="py-5">
                <div class="row">
                    <div class="col-6 offset-3">
                        <div class="card card-default">
                            <div class="card-header">
                                Sign up
                            </div>
                            <div class="card-body">
                                <form action="" method="post" @submit.prevent="createUser()">
                                    <div class="form-group">
                                        <label for="">Name</label>
                                        <input type="text" v-model="signupForm.name" class="form-control" placeholder="name" :class="{ 'is-invalid': signupForm.errors.has('name') }">
                                        <has-error :form="signupForm" field="name"></has-error>
                                    </div>
                                    <div class="form-group">
                                        <label for="">Email</label>
                                        <input type="text" v-model="signupForm.email" class="form-control" placeholder="email" :class="{ 'is-invalid': signupForm.errors.has('email') }">
                                        <has-error :form="signupForm" field="email"></has-error>
                                    </div>
                                    <div class="form-group">
                                        <label for="">Password</label>
                                        <input type="password" v-model="signupForm.password" class="form-control" placeholder="password" :class="{ 'is-invalid': signupForm.errors.has('password') }" >  
                                        <has-error :form="signupForm" field="password"></has-error>                                       
                                    </div>
                                    <div class="form-group">
                                        <label for="">Confirm Password</label>
                                        <input type="password" v-model="signupForm.password_confirmation" class="form-control" placeholder="confirm password" :class="{ 'is-invalid': signupForm.errors.has('password_confirmation') }" >  
                                        <has-error :form="signupForm" field="password_confirmation"></has-error>                                       
                                    </div>
                                    <div class="form-group">
                                        <button type="submit" class="btn btn-success px-4">Create an Account</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Form } from 'vform'

export default {
    data(){
        return {
            signupForm: new Form({
                name: '',
                email: '',
                password: '',
                password_confirmation: '',
            }),
        }
    },
    methods: {
        async createUser(){
            await axios.get('/sanctum/csrf-cookie');

            await this.signupForm.post('/register');
            await this.getUserData();

            this.$toast.success({
                title:'Success!',
                message:'Your account has been created!'
            });
            
            this.$router.push({ name: 'dashboard' });
        },
        async getUserData(){
            await axios.get('/api/user').then(response => {
                let user = response.data;
                this.$store.commit('SET_USER', user);
                this.$store.commit('SET_AUTHENTICATED', true);

                localStorage.setItem("auth", true);
            });
        }
    },
    mounted(){ 
        
    }
}
</script>

<style>

</style>
