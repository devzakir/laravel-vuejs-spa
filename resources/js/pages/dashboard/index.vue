<template>
  <div class="container">
      <div class="card">
        <div class="card-header">
            Dashboard
        </div>
        <div class="card-body">
            Welcome, {{ user.name }}
        </div>
    </div>
  </div>
</template>

<script>
export default {
    computed: {
        user() {
            return this.$store.getters.getUser;
        }
    }
}
</script>

<style>

</style>
