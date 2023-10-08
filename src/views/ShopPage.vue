<script setup>
import ShopProduct from '@/components/ShopProduct.vue';
import { products } from '@/data/products.js'
</script>

<template>
    <div class="main-container">
        <div class="collection-grid">
            <div class="collection-main">
                <div class="collection-main-inner">
                    <ShopProduct v-for="product in products" :product="product"/>
                </div>
            </div>
            <div class="pagination">

            </div>
        </div>
    </div>
    
</template>

<style scoped>
.main-container {
    width: 100%;
    padding: 0 30px;
    position: relative;
    max-width: 1660px;
    margin: 0 auto;
}

.collection-grid-main {
    list-style: none;
    margin: 0;
    padding: 0;
    margin-left: -30px;
}

.collection-main-inner {
    display: flex;
    flex-wrap: wrap;
}
</style>