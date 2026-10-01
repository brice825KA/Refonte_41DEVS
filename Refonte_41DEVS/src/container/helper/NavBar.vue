<script lang="js" setup>
import ic_headers from "@/asset/icons/ic_41DEVS.svg"
</script>

<template>
    <div class="flex items-center py-10 px-25 justify-between">
        <div class=""><router-link to='/'><img :src="ic_headers"></router-link></div>
        <div class="flex items-center justify-center gap-10">
            <div class="font-family-[Gilroy] font-normal text-2xl text-[#584175]"><router-link to="/companies">Expertise</router-link></div>
            <div class="font-family-[Gilroy] font-normal text-2xl text-[#584175]"><router-link to='/industries'>Industries</router-link></div>
        </div>
        <div class="bg-[#5C308C] px-10 py-3 rounded-xl font-medium text-lg text-[#FFFFFF]"><router-link to="/contact">Contacter-nous</router-link></div>
    </div>
</template>

<style scoped>
</style>