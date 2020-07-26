<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h5 class="mb-0">Product Categories</h5>
                        <router-link :to="{name: 'create-category'}" class="btn btn-primary">Create Category</router-link>
                    </div>

                    <div class="card-body">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th style="width: 100px"> Id </th>
                                    <th> Name </th>
                                    <th> Slug </th>
                                    <th style="width: 170px"> Action </th>
                                </tr>
                            </thead>
                            <tbody v-if="categories.length">
                                <tr v-for="category in categories" :key="category.id">
                                    <td style="width: 100px"> {{ category.id }} </td>
                                    <td> {{ category.name }} </td>
                                    <td> {{ category.slug }} </td>
                                    <td style="width: 170px">
                                        <router-link :to="{name: 'edit-category', params: {id: category.id}}" class="btn btn-primary btn-sm">Edit</router-link>
                                        <a @click.prevent="deleteCategory(category)" href="#" class="btn btn-danger btn-sm">Delete</a>
                                    </td>
                                </tr>
                            </tbody>
                            <tbody v-else>
                                <tr>
                                    <td colspan="4">
                                        <h5 class="text-center mt-4 mb-4">No categories found.</h5>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            categories: [],
        }
    },
    methods: {
        loadCategories(){
            axios.get('/api/category').then(response => {
                this.categories = response.data;
            });
        },

        deleteCategory(category){
            axios.delete(`/api/category/${category.id}`).then(() => {
                this.$toast.success({
                    title:'Success!',
                    message:'Category deleted successfully.'
                });
            });

            let index = this.categories.indexOf(category);
            this.categories.splice(index, 1);
        }
    },
    mounted() {
        this.loadCategories();
    }
}
</script>
