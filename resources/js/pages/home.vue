<template>
    <div class="container py-5">
        <h2>Our Products</h2>
        <div class="row" v-if="apiCallLoaded">
            <div class="col-3 mb-3" v-for="product in products" :key="product.id">
                <div class="card">
                    <img :src="product.image" class="card-img-top" style="height: 150px; object-fit: cover; overflow: hidden" alt="...">
                    <div class="card-body">
                        <div class="mb-2 d-flex justify-content-between">
                            <label class="badge badge-danger mb-3">  {{ product.category.name }} </label>
                            <h4>${{ product.price }}</h4>
                        </div>
                        <h5 class="card-title">
                            {{ product.title }}
                        </h5>
                        <router-link :to="{ name: 'product-details', params: {slug: product.slug }}" class="btn btn-primary">View Product</router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-center mt-5" v-if="apiCallLoaded">
            <button class="btn btn-primary" :disabled="!next_page_url" @click.prevent="loadMoreProducts(next_page_url)">Load More Products</button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                products: [],
                next_page_url: null,
                apiCallLoaded: false,
            }
        },
        methods: {
            async loadProducts(){
                let { data } = await axios.get('/api/products');

                this.products = data.data;
                this.next_page_url = data.next_page_url;
                this.apiCallLoaded = true;
            },
            async loadMoreProducts(url){
                let { data } = await axios.get(url);
                
                let products = data.data;
                products.forEach(element => {
                    this.products.push(element);
                });
                // this.products.concat();
                this.next_page_url = data.next_page_url;
            },
        },
        mounted(){
            this.loadProducts();
        }
    }
</script>
