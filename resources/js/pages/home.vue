<template>
    <div class="container">
        <div class="row">
            <div class="col-3" v-for="product in products" :key="product.id">
                <div class="card">
                    <img :src="product.image" class="card-img-top" style="height: 150px; object-fit: cover; overflow: hidden" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">
                            {{ product.title }}
                        </h5>
                        <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
        <pre>
            {{ products }}
        </pre>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                products: [],
            }
        },
        methods: {
            async loadProducts(){
                let { data } = await axios.get('/api/products');

                this.products = data.data;
            }
        },
        mounted(){
            this.loadProducts();
        }
    }
</script>
