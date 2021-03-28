<template>
  <div class="container mt-5">
      <div class="row">
          <div class="col-4">
            <div class="list-group">
                <router-link :to="{ name: 'dashboard' }" class="list-group-item list-group-item-action">Dashboard</router-link>
                <router-link :to="{ name: 'user-profile' }" class="list-group-item list-group-item-action">User Profile</router-link>
                <a href="#" class="list-group-item list-group-item-action" @click.prevent="logout">Logout</a>
            </div>
          </div>
          <div class="col-8">
              <div class="card">
                    <div class="card-header">
                        User Profile
                    </div>
                    <div class="card-body">
                        <form action="">
                            <div class="row">
                                <div class="col-6">
                                    <div class="form-group">
                                        <label for="">Your Name</label>
                                        <input type="text" class="form-control" placeholder="Your name" v-model="userProfile.name">
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <label for="">Your Email</label>
                                        <input type="text" class="form-control" placeholder="Your email" v-model="userProfile.email">
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <label for="">Your Password</label>
                                        <input type="text" class="form-control" placeholder="Your password">
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <label for="">Confirm Password</label>
                                        <input type="text" class="form-control" placeholder="Confirm password">
                                    </div>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-success">Save Profile</button>
                        </form>
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
            userProfile: new Form({
                name: '',
                email: '',
                password: '',
                confirm_password: '',
            }),
        }
    },
    methods: {
        user() {
            let user = this.$store.getters.getUser;
            this.userProfile.name = user.name;
            this.userProfile.email = user.email;
        }
    },
    created(){
        this.user();
    }
}
</script>

<style>

</style>
