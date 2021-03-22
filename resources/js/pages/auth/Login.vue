<template>
    <div>
        <div class="container">
            <div class="py-5">
                <div class="row">
                    <div class="col-6 offset-3">
                        <div class="card card-default">
                            <div class="card-header">
                                Login
                            </div>
                            <div class="card-body">
                                <form action="" method="post" @click.prevent="login()">
                                    <div class="form-group">
                                        <label for="">Email</label>
                                        <input type="text" class="form-control" placeholder="email">
                                    </div>
                                    <div class="form-group">
                                        <label for="">Password</label>
                                        <input type="text" class="form-control" placeholder="password">
                                    </div>
                                    <div class="form-group">
                                        <button type="submit" class="btn btn-success px-4">Login</button>
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
export default {
    methods: {
        login(){
            axios.get('/sanctum/csrf-cookie').then(response => {
                console.log('hello');
                axios.post('/login', {
                    email: 'web.zakirbd@gmail.com',
                    password: 'password',
                }).then(response => {
                    console.log(response);
                });
            });
        },
        getUserData(){
            axios.get('/api/user').then(response => {
                console.log(response.data);
            });
        }
    },
    mounted(){ 
        this.getUserData();
    }
}
</script>

<style>

</style>
