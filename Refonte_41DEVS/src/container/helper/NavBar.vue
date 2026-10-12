<script lang="js" setup>
import { ref } from 'vue'
import ic_headers from "@/asset/icons/ic_41DEVS.svg"

const isMobileMenuOpen = ref(false)

function closeMenu() {
    isMobileMenuOpen.value = false
}
</script>

<template>
    <nav class="relative">
        <div class="flex items-center justify-between py-4 sm:py-6 lg:py-10 px-4 sm:px-8 md:px-14 lg:px-25">
            <!-- Logo leading to Accueil -->
            <div class="shrink-0">
                <router-link to="/" @click="closeMenu">
                    <img :src="ic_headers" alt="41DEVS" class="h-7 sm:h-9 lg:h-auto w-auto">
                </router-link>
            </div>

            <!-- Desktop Links -->
            <div class="hidden md:flex items-center justify-center gap-6 lg:gap-10">
                <div class="font-family-[Gilroy] font-normal text-xl lg:text-2xl text-[#584175] hover:text-[#3b1b68] transition-colors">
                    <router-link to="/companies">Expertise</router-link>
                </div>
                <div class="font-family-[Gilroy] font-normal text-xl lg:text-2xl text-[#584175] hover:text-[#3b1b68] transition-colors">
                    <router-link to="/industries">Industries</router-link>
                </div>
            </div>

            <!-- Desktop CTA -->
            <div class="hidden md:block bg-[#5C308C] hover:bg-[#492272] transition-colors px-6 lg:px-10 py-2.5 lg:py-3 rounded-xl font-medium text-base lg:text-lg text-[#FFFFFF]">
                <router-link to="/contact">Contacter-nous</router-link>
            </div>

            <!-- Mobile Hamburger Button -->
            <button 
                type="button"
                class="md:hidden flex items-center justify-center p-2 text-[#584175] hover:text-[#3b1b68] focus:outline-none"
                aria-label="Toggle navigation menu"
                @click="isMobileMenuOpen = !isMobileMenuOpen"
            >
                <svg v-if="!isMobileMenuOpen" class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg v-else class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>

        <!-- Mobile Menu Dropdown -->
        <div 
            v-if="isMobileMenuOpen" 
            class="md:hidden bg-[#F8F8F8] border-t border-purple-100 px-6 py-6 flex flex-col gap-5 shadow-lg animate-in slide-in-from-top duration-200"
        >
            <router-link 
                to="/companies" 
                class="font-family-[Gilroy] font-normal text-xl text-[#584175] hover:text-[#3b1b68] py-1"
                @click="closeMenu"
            >
                Expertise
            </router-link>
            <router-link 
                to="/industries" 
                class="font-family-[Gilroy] font-normal text-xl text-[#584175] hover:text-[#3b1b68] py-1"
                @click="closeMenu"
            >
                Industries
            </router-link>
            <router-link 
                to="/contact" 
                class="bg-[#5C308C] hover:bg-[#492272] text-center px-6 py-3 rounded-xl font-medium text-base text-[#FFFFFF] mt-2 transition-colors"
                @click="closeMenu"
            >
                Contacter-nous
            </router-link>
        </div>
    </nav>
</template>