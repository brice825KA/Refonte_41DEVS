<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const isSuccess = computed(() => route.query.status === 'success')
const errorMessage = computed(() => (route.query.error as string) || '')

function goHome() {
    router.push('/')
}

function goContact() {
    router.push('/contact')
}
</script>

<template>
    <div class="min-h-[85vh] flex items-center justify-center py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 bg-[radial-gradient(circle_at_50%_15%,rgba(165,94,255,0.35),transparent_45%),linear-gradient(180deg,#1e0735_0%,#0c0020_60%,#050010_100%)]">
        <div class="relative w-full max-w-xl mx-auto overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 sm:p-10 md:p-12 text-center shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <!-- Glow background effect -->
            <div
                class="absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full blur-3xl pointer-events-none opacity-40"
                :class="isSuccess ? 'bg-purple-500' : 'bg-rose-500'"
                aria-hidden="true"
            ></div>

            <!-- SUCCESS STATE -->
            <div v-if="isSuccess" class="relative z-10 flex flex-col items-center">
                <!-- Icon badge -->
                <div class="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-purple-600 to-emerald-400 p-0.5 shadow-[0_0_35px_rgba(52,211,153,0.35)] mb-6 flex items-center justify-center">
                    <div class="w-full h-full rounded-full bg-[#140526] flex items-center justify-center">
                        <svg class="w-10 h-10 sm:w-12 sm:h-12 text-emerald-400 stroke-current" fill="none" viewBox="0 0 24 24" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M20 6L9 17l-5-5" />
                        </svg>
                    </div>
                </div>

                <!-- Title -->
                <h1 class="font-['PP_Neue_Montreal',Arial,sans-serif] font-semibold text-2xl sm:text-3xl md:text-4xl text-white mb-3">
                    Informations envoyées
                </h1>

                <!-- Description -->
                <p class="font-['PP_Neue_Montreal',Arial,sans-serif] text-sm sm:text-base md:text-lg text-white/70 max-w-md mx-auto mb-8 leading-relaxed">
                    Merci pour votre message ! Vos informations ont bien été transmises à l'équipe 41DEVS. Un de nos conseillers prendra contact avec vous dans les plus brefs délais.
                </p>

                <!-- Actions -->
                <div class="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full">
                    <button
                        type="button"
                        class="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-medium text-sm sm:text-base text-white bg-gradient-to-r from-purple-600 to-[#5C308C] hover:from-purple-500 hover:to-purple-700 transition-all duration-300 shadow-[0_4px_20px_rgba(124,58,237,0.4)] cursor-pointer"
                        @click="goHome"
                    >
                        Retour à l'accueil
                    </button>
                    <button
                        type="button"
                        class="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-medium text-sm sm:text-base text-white/90 bg-white/5 hover:bg-white/10 border border-white/15 transition-all duration-300 cursor-pointer"
                        @click="goContact"
                    >
                        Envoyer un autre message
                    </button>
                </div>
            </div>

            <!-- ERROR STATE -->
            <div v-else class="relative z-10 flex flex-col items-center">
                <!-- Icon badge -->
                <div class="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-rose-500 to-purple-600 p-0.5 shadow-[0_0_35px_rgba(244,63,94,0.35)] mb-6 flex items-center justify-center">
                    <div class="w-full h-full rounded-full bg-[#140526] flex items-center justify-center">
                        <svg class="w-10 h-10 sm:w-12 sm:h-12 text-rose-400 stroke-current" fill="none" viewBox="0 0 24 24" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                    </div>
                </div>

                <!-- Title -->
                <h1 class="font-['PP_Neue_Montreal',Arial,sans-serif] font-semibold text-2xl sm:text-3xl md:text-4xl text-white mb-3">
                    Informations non envoyées
                </h1>

                <!-- Description -->
                <p class="font-['PP_Neue_Montreal',Arial,sans-serif] text-sm sm:text-base md:text-lg text-white/70 max-w-md mx-auto mb-4 leading-relaxed">
                    Une erreur est survenue lors de l'enregistrement de votre message. Veuillez vérifier votre connexion ou réessayer ultérieurement.
                </p>

                <!-- Error detail banner if present -->
                <div v-if="errorMessage" class="w-full max-w-md p-3.5 mb-6 rounded-xl bg-rose-500/10 border border-rose-500/20 text-xs sm:text-sm text-rose-200">
                    {{ errorMessage }}
                </div>

                <!-- Actions -->
                <div class="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full">
                    <button
                        type="button"
                        class="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-medium text-sm sm:text-base text-white bg-gradient-to-r from-purple-600 to-[#5C308C] hover:from-purple-500 hover:to-purple-700 transition-all duration-300 shadow-[0_4px_20px_rgba(124,58,237,0.4)] cursor-pointer"
                        @click="goContact"
                    >
                        Réessayer
                    </button>
                    <button
                        type="button"
                        class="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-medium text-sm sm:text-base text-white/90 bg-white/5 hover:bg-white/10 border border-white/15 transition-all duration-300 cursor-pointer"
                        @click="goHome"
                    >
                        Retour à l'accueil
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
