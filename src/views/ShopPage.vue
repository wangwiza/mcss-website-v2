<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../supabase'

const countries = ref([])

async function getCountries() {
    let { data: test, error } = await supabase
        .from('test')
        .select()
    console.log(test)
    console.log(error)
    countries.value = test
}

onMounted(() => {
    getCountries()
})
</script>

<template>
    <div class="collection__wrapper">
        <div class="collection__grid">
            <div class="collection__inner">
                <div class="collection__item">
                    <p>{{ countries.value }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.collection__wrapper {
    width: 100%;
    margin-bottom: 30px;
    padding: 0 30px;
    position: relative;
    max-width: 1660px;
    margin: 0 auto;
}

.collection__grid {
    list-style: none;
    margin: 0;
    padding: 0;
    margin-left: -30px;
}

.collection__inner {
    display: flex;
    flex-wrap: wrap;
}

.collection__item {
    width: 16.666%;
    box-sizing: border-box;
    float: left;
    min-height: 1px;
    padding-left: 30px;
    vertical-align: top;
}

.collection__item-view {
    position: relative;
    text-align: center;
    margin-bottom: 30px;
}
</style>