<script setup lang="js">
import { ref } from 'vue'

const countries = [
    { code: 'CI', name: "Côte d'Ivoire", flag: '🇨🇮' },
    { code: 'SN', name: 'Sénégal', flag: '🇸🇳' },
    { code: 'FR', name: 'France', flag: '🇫🇷' },
]

const selectedCountry = ref(countries[0])
</script>

<template>
    <div class="py-10 px-25 flex items-center gap-65">
        <div
            id="FirstCol"
            class="grid w-full max-w-105 grid-cols-[80px_2px_minmax(0,1fr)] items-start gap-4 bg-[linear-gradient(110deg,#f5efff_0%,#fff_68%)] px-5 py-6 text-[#17131d] font-['PP_Neue_Montreal',Arial,sans-serif] max-sm:grid-cols-[72px_2px_minmax(0,1fr)] max-sm:gap-3 max-sm:px-3.5 max-sm:py-4"
        >
            <div class="flex flex-col items-start gap-4.5 pt-1" aria-label="Sélection du pays">
                <div
                    class="flex h-6 w-17.5 items-center justify-center gap-1 rounded-[5px] border border-[#a855f7] bg-white text-[10px] font-semibold hover:bg-purple-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-700"
                    role="status"
                >
                    <span aria-hidden="true">{{ selectedCountry.flag }}</span>
                    <span>{{ selectedCountry.code }}</span>
                </div>
                <div class="flex flex-col items-start gap-4.5" role="radiogroup" aria-label="Choisir un pays">
                    <button
                        v-for="country in countries"
                        :key="country.code"
                        type="button"
                        role="radio"
                        :aria-checked="selectedCountry.code === country.code"
                        class="flex cursor-pointer items-center gap-1.25 whitespace-nowrap rounded-sm text-left text-[9px] font-semibold hover:text-purple-800 focus-visible:outline-2 focus-visible:outline-purple-700"
                        @click="selectedCountry = country"
                    >
                        <span class="text-[10px]" aria-hidden="true">{{ country.flag }}</span>
                        {{ country.name }}
                    </button>
                </div>
            </div>

            <div class="h-full min-h-62 w-0.5 bg-[linear-gradient(#6b21a8,#f2eafd)]" aria-hidden="true"></div>

            <div class="flex flex-col gap-5.5 text-xs leading-[1.55]">
                <section>
                    <h2 class="m-0 text-xs font-medium">Contactez-nous</h2>
                    <a class="block text-[#858188] no-underline" href="tel:+22900000000">+229 00,00 00 00</a>
                    <a class="block text-[#858188] no-underline" href="mailto:contact@41devs.com">contact@41devs.com</a>
                </section>

                <section>
                    <h2 class="m-0 text-xs font-medium">Notre adresse</h2>
                    <p class="m-0 text-[#858188]">Gbèdjiromèdé,</p>
                    <p class="m-0 text-[#858188]">Imm SYECA, 2ème étage</p>
                </section>

                <section>
                    <h2 class="m-0 text-xs font-medium">Nos réseaux</h2>
                    <p class="m-0 text-[#858188]">Facebook</p>
                    <p class="m-0 text-[#858188]">LinkedIn</p>
                    <p class="m-0 text-[#858188]">Dribble</p>
                    <p class="m-0 text-[#858188]">Instagram</p>
                </section>
            </div>
        </div>
        <div class="" id="SecondCol">
            <div class="">
                <div class="">Travaillons ensemble</div>
                <div class="">sur votre projet</div>
            </div>
            <div class="">

                <div class="">
                    <div class="">Contactez-nous, et l'un de nos conseillers clientèle vous répondra pour discuter de votre</div>
                    <div class=""> projet</div>
                </div>

                <div class="">
                    <div class="">Quel est votre nom</div>
                    <div class=""><input type="text" placeholder="Nom et prénoms" class=""></div>
                </div>

                <div class="">
                    <div class="">Quel est votre organisation</div>
                    <div class=""><input type="text" placeholder="Organisation/Entreprise" class=""></div>
                </div>

                <div class="">
                    <div class="">Parler nous de votre projet</div>
                    <div class=""><textarea placeholder="Message" class=""></textarea></div>
                </div>
                <div><button type="submit"><RouterLink to='#'>Envoyer</RouterLink></button></div>
            </div>
        </div>
    </div>
</template>

<style scoped>
input, textarea {
    border: none;
    outline: none;
    border-bottom: 1px solid #C9C9C9;
}
</style>