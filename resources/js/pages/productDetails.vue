<template>
    <div class="container py-5">
        <div class="row">
            <div class="col-8">
                <div class="card">
                    <div class="card-header">
                        <h2> {{ product.title }} </h2>
                    </div>
                    <div class="card-body">
                        <div>
                            <img :src="product.image" alt="" class="img-fluid">
                        </div>
                        <div class="mt-3">
                            <label class="badge badge-danger mb-3">  {{ product.category.name }} </label>
                            <h3>${{ product.price }}</h3>
                        </div>
                        <div class="mt-2">
                            {{ product.description }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <router-link :to="{ name: 'home'}" class="btn btn-primary">Go to Home</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                product: [],
                apiCallLoaded: false,
            }
        },
        methods: {
            async loadProductData(){
                let slug = this.$route.params.slug;
                let { data } = await axios.get('/api/products/'+slug);

                this.product = data;
            },
        },
        mounted(){
            this.loadProductData();
        }
    }
</script>
