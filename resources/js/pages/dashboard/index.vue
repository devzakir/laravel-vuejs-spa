<template>
  <div class="container mt-5">
      <div class="row">
          <div class="col-4">
            <div class="list-group">
                <a href="#" class="list-group-item list-group-item-action">Demo Link</a>
                <a href="#" class="list-group-item list-group-item-action" @click.prevent="logout">Logout</a>
            </div>
          </div>
          <div class="col-8">
              <div class="card">
                    <div class="card-header">
                        Dashboard
                    </div>
                    <div class="card-body">
                        Welcome, {{ user.name }}
                    </div>
                </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    methods: {
        logout() {
            axios.post('/logout').then(response => {
                this.$toast.success({
                    title:'Success!',
                    message:'Logout Successful!'
                });

                this.$router.push({ name: 'login' });
            });
        }
    },
    computed: {
        user() {
            return this.$store.getters.getUser;
        }
    }
}
</script>

<style>

</style>
