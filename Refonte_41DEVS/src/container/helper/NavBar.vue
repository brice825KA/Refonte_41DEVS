<script lang="js" setup>
import { onMounted, onUnmounted, ref } from 'vue'
import ic_headers from "@/asset/icons/ic_41DEVS.svg"

const isMobileMenuOpen = ref(false)
const isScrolled = ref(false)

function updateScrollState() {
    isScrolled.value = window.scrollY > 0
}

function closeMenu() {
    isMobileMenuOpen.value = false
}

onMounted(() => {
    updateScrollState()
    window.addEventListener('scroll', updateScrollState, { passive: true })
})

onUnmounted(() => {
    window.removeEventListener('scroll', updateScrollState)
})
</script>

<template>
    <nav class="transition-colors duration-300" :class="{ 'nav-scrolled': isScrolled }">
        <div class="flex items-center justify-between py-4 sm:py-6 lg:py-5 px-10 sm:px-8 md:px-14 lg:px-20">
            <!-- Logo leading to Accueil -->
            <div class="shrink-0">
                <router-link to="/" @click="closeMenu">
                    <img :src="ic_headers" alt="41DEVS" class="h-7 sm:h-9 lg:h-auto w-auto">
                </router-link>
            </div>

            <!-- Desktop Links -->
            <div class="nav-links-pill hidden md:flex items-center justify-center lg:gap-5 rounded-full px-9 py-6 w-3xs h-12">
                <div class="nav-link font-family-[Gilroy] font-normal text-xl lg:text-2xl transition-colors">
                    <router-link to="/companies">Expertise</router-link>
                </div>
                <div class="nav-link font-family-[Gilroy] font-normal text-xl lg:text-2xl transition-colors">
                    <router-link to="/industries">Industries</router-link>
                </div>
            </div>

            <!-- Desktop CTA -->
            <router-link to="/contact"><div class="nav-contact-button hidden md:block px-6 lg:px-10 py-2.5 lg:py-3 rounded-xl font-medium text-base lg:text-lg transition-colors">
                Contacter-nous
            </div></router-link>

            <!-- Mobile Hamburger Button -->
            <button 
                type="button"
                class="nav-link md:hidden flex items-center justify-center p-2 focus:outline-none transition-colors"
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
                class="mobile-menu-link font-family-[Gilroy] font-normal text-xl py-1"
                @click="closeMenu"
            >
                Expertise
            </router-link>
            <router-link 
                to="/industries" 
                class="mobile-menu-link font-family-[Gilroy] font-normal text-xl py-1"
                @click="closeMenu"
            >
                Industries
            </router-link>
            <router-link 
                to="/contact" 
                class="nav-contact-button text-center px-6 py-3 rounded-xl font-medium text-base mt-2 transition-colors"
                @click="closeMenu"
            >
                Contacter-nous
            </router-link>
        </div>
    </nav>
</template>

<style scoped>
.nav-link {
    color: #fff;
}

.nav-links-pill {
    border: 1px solid transparent;
    backdrop-filter: blur(8px);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.18), 0 2px 10px rgba(0, 0, 0, 0.08);
    background:
        linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)) padding-box,
        linear-gradient(
            270deg,
            rgba(255, 255, 255, 0) 50.18%,
            #fff 50.02%,
            rgba(255, 255, 255, 0) 50.18%
        ) border-box;
}

.nav-scrolled {
    background-color: #fff;
}

.nav-scrolled .nav-link {
    color: #584074;
}

.nav-contact-button {
    background-color: #fff;
    color: #000;
}

.nav-contact-button:hover {
    background-color: #eee;
}

.nav-scrolled .nav-contact-button {
    background-color: #5c2f8c;
    color: #fff;
}

.nav-scrolled .nav-contact-button:hover {
    background-color: #492272;
}

.mobile-menu-link {
    color: #584175;
}

.mobile-menu-link:hover {
    color: #3b1b68;
}
</style>