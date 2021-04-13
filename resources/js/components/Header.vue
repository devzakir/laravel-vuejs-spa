<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container">
            <router-link class="navbar-brand" :to="{name: 'home'}">Site Logo</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <router-link :to="{name: 'home'}" class="nav-link">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{name: 'category-list' }">Product Category</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{name: 'product-list' }">Product List</router-link>
                    </li>
                    <li class="nav-item" v-if="auth">
                        <router-link class="nav-link" :to="{name: 'dashboard' }">Dashboard</router-link>
                    </li>
                    <li class="nav-item" v-if="!auth">
                        <router-link class="nav-link" :to="{name: 'login' }">Login</router-link>
                    </li>
                    
                    <li class="nav-item" v-if="!auth">
                        <router-link class="nav-link" :to="{name: 'signup' }">Signup</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    methods: {
    },
    computed: {
        auth(){
            return this.$store.getters.getAuthenticated;
        }
    }
}
</script>

<style>

</style>
