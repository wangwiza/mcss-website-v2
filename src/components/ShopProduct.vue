<script setup>
import CloudImage from '@/components/CloudImage.vue';

const props = defineProps({
    product: Object
});

const CADollar = new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD',
});
</script>

<template>
<div class="grid-item">
    <div class="grid-item-view">
        <div class="item-image">
            <a class="grid-image" href="https://forms.gle/xLKXqh9bjwMFNrq4A">
                <CloudImage :imageName="product.image"/>
            </a>
        </div>
        <div class="item-title">
            <a href="https://forms.gle/xLKXqh9bjwMFNrq4A">{{product.name}}</a>
        </div>
        <div class="item-price">
            <a href="https://forms.gle/xLKXqh9bjwMFNrq4A">{{ CADollar.format(product.price).replace(/^(\D+)/, '$1 ') }}</a>
        </div>
    </div>
</div>
</template>

<style scoped>
.grid-item {
    box-sizing: border-box;
    float: left;
    min-height: 1px;
    padding-left: 30px;
    vertical-align: top;
}

.grid-item-view {
    position: relative;
    text-align: center;
    margin-bottom: 30px;
}

.item-image {
    overflow: hidden;
    position: relative;
}

.grid-image {
    margin: 0 auto;
}

.item-title {
    font-weight: 500;
    margin-bottom: 0;
    padding-top: 5px;
    color: var(--text-color);
}

.item-price {
    margin-bottom: 5px;
    margin-top: 5px;
    text-align: center;
}

@media only screen and (min-width: 768px) {
    .grid-item {
        clear: both;
        width: 16.666%;
    }
}
</style>