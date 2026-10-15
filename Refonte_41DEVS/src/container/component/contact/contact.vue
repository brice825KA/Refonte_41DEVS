<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { sendContactMessage } from '@/services/firebase'

const router = useRouter()

const fullName = ref('')
const organization = ref('')
const message = ref('')
const isSubmitting = ref(false)
const validationError = ref('')

const countries = [
    { code: 'CI', name: "Côte d'Ivoire", flag: '🇨🇮' },
    { code: 'SN', name: 'Sénégal', flag: '🇸🇳' },
    { code: 'FR', name: 'France', flag: '🇫🇷' },
    { code: 'BJ', name: 'Bénin', flag: '🇧🇯' },
    { code: 'TG', name: 'Togo', flag: '🇹🇬' },
    { code: 'GH', name: 'Ghana', flag: '🇬🇭' },
    { code: 'NG', name: 'Nigeria', flag: '🇳🇬' },
    { code: 'BF', name: 'Burkina Faso', flag: '🇧🇫' },
    { code: 'ML', name: 'Mali', flag: '🇲🇱' },
    { code: 'NE', name: 'Niger', flag: '🇳🇪' },
    { code: 'CM', name: 'Cameroun', flag: '🇨🇲' },
    { code: 'GN', name: 'Guinée', flag: '🇬🇳' },
    { code: 'GA', name: 'Gabon', flag: '🇬🇦' },
    { code: 'CD', name: 'RD Congo', flag: '🇨🇩' },
    { code: 'MA', name: 'Maroc', flag: '🇲🇦' },
    { code: 'AR', name: 'Argentine', flag: '🇦🇷' },
    { code: 'BS', name: 'Bahamas', flag: '🇧🇸' },
    { code: 'BB', name: 'Barbade', flag: '🇧🇧' },
    { code: 'BZ', name: 'Belize', flag: '🇧🇿' },
    { code: 'BO', name: 'Bolivie', flag: '🇧🇴' },
    { code: 'BR', name: 'Brésil', flag: '🇧🇷' },
    { code: 'CA', name: 'Canada', flag: '🇨🇦' },
    { code: 'CL', name: 'Chili', flag: '🇨🇱' },
    { code: 'CO', name: 'Colombie', flag: '🇨🇴' },
    { code: 'CR', name: 'Costa Rica', flag: '🇨🇷' },
    { code: 'CU', name: 'Cuba', flag: '🇨🇺' },
    { code: 'DM', name: 'Dominique', flag: '🇩🇲' },
    { code: 'DO', name: 'R dominicaine', flag: '🇩🇴' },
    { code: 'EC', name: 'Équateur', flag: '🇪🇨' },
    { code: 'SV', name: 'Salvador', flag: '🇸🇻' },
    { code: 'GD', name: 'Grenade', flag: '🇬🇩' },
    { code: 'GT', name: 'Guatemala', flag: '🇬🇹' },
    { code: 'GY', name: 'Guyana', flag: '🇬🇾' },
    { code: 'HT', name: 'Haïti', flag: '🇭🇹' },
    { code: 'HN', name: 'Honduras', flag: '🇭🇳' },
    { code: 'JM', name: 'Jamaïque', flag: '🇯🇲' },
    { code: 'MX', name: 'Mexique', flag: '🇲🇽' },
    { code: 'NI', name: 'Nicaragua', flag: '🇳🇮' },
    { code: 'PA', name: 'Panama', flag: '🇵🇦' },
    { code: 'PY', name: 'Paraguay', flag: '🇵🇾' },
    { code: 'PE', name: 'Pérou', flag: '🇵🇪' },
    { code: 'LC', name: 'Sainte-Lucie', flag: '🇱🇨' },
    { code: 'SR', name: 'Suriname', flag: '🇸🇷' },
    { code: 'TT', name: 'Trinité-et-Tobago', flag: '🇹🇹' },
    { code: 'US', name: 'États-Unis', flag: '🇺🇸' },
    { code: 'UY', name: 'Uruguay', flag: '🇺🇾' },
    { code: 'VE', name: 'Venezuela', flag: '🇻🇪' },
    { code: 'CN', name: 'Chine', flag: '🇨🇳' },
    { code: 'IN', name: 'Inde', flag: '🇮🇳' },
    { code: 'ID', name: 'Indonésie', flag: '🇮🇩' },
    { code: 'JP', name: 'Japon', flag: '🇯🇵' },
    { code: 'MY', name: 'Malaisie', flag: '🇲🇾' },
    { code: 'PH', name: 'Philippines', flag: '🇵🇭' },
    { code: 'SG', name: 'Singapour', flag: '🇸🇬' },
    { code: 'KR', name: 'Corée du Sud', flag: '🇰🇷' },
    { code: 'TH', name: 'Thaïlande', flag: '🇹🇭' },
    { code: 'VN', name: 'Vietnam', flag: '🇻🇳' },
]

const selectedCountry = ref({ code: 'CI', name: "Côte d'Ivoire", flag: '🇨🇮' })
const countryList = ref<HTMLElement | null>(null)
const scrollbarThumbHeight = ref(35)
const scrollbarThumbTop = ref(0)

function updateScrollbar() {
    const list = countryList.value
    if (!list) return

    const visibleRatio = list.clientHeight / list.scrollHeight
    scrollbarThumbHeight.value = Math.max(visibleRatio * 100, 12)
    scrollbarThumbTop.value = (list.scrollTop / (list.scrollHeight - list.clientHeight)) *
        (100 - scrollbarThumbHeight.value) || 0
}

async function handleSubmit() {
    validationError.value = ''

    if (!fullName.value.trim()) {
        validationError.value = 'Veuillez saisir votre nom et prénom.'
        return
    }

    if (!message.value.trim()) {
        validationError.value = 'Veuillez nous parler de votre projet.'
        return
    }

    isSubmitting.value = true

    try {
        const result = await sendContactMessage({
            fullName: fullName.value,
            organization: organization.value,
            message: message.value,
            country: selectedCountry.value ? {
                code: selectedCountry.value.code,
                name: selectedCountry.value.name,
                flag: selectedCountry.value.flag,
            } : undefined
        })

        if (result.success) {
            router.push({
                path: '/contact/status',
                query: { status: 'success' }
            })
        } else {
            router.push({
                path: '/contact/status',
                query: {
                    status: 'error',
                    error: result.error || 'Impossible d\'enregistrer vos informations.'
                }
            })
        }
    } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : 'Une erreur inattendue est survenue.'
        router.push({
            path: '/contact/status',
            query: { status: 'error', error: msg }
        })
    } finally {
        isSubmitting.value = false
    }
}

onMounted(updateScrollbar)
</script>

<template>
    <div class="py-8 sm:py-12 lg:py-15 px-4 sm:px-8 md:px-14 lg:px-20 xl:px-25 flex flex-col lg:flex-row gap-10 lg:gap-16 xl:gap-32 2xl:gap-65 bg-[linear-gradient(110deg,#f5efff_0%,#fff_68%)] overflow-hidden">
        <div
            id="FirstCol"
            class="grid w-full max-w-full lg:max-w-105 grid-cols-[80px_4px_minmax(0,1fr)] items-stretch gap-6 sm:gap-10 px-4 sm:px-5 py-6 text-[#17131d] font-['PP_Neue_Montreal',Arial,sans-serif] max-sm:grid-cols-[72px_4px_minmax(0,1fr)] max-sm:gap-3 max-sm:px-3.5 max-sm:py-4 shrink-0"
        >
            <div class="flex flex-col items-start gap-4.5 pt-1" aria-label="Sélection du pays">
                <div
                    class="flex h-6 w-17.5 items-center justify-center gap-1 rounded-[5px] border border-[#a855f7] bg-white text-[10px] font-semibold hover:bg-purple-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-700"
                    role="status"
                >
                    <span aria-hidden="true">{{ selectedCountry.flag }}</span>
                    <span>{{ selectedCountry.code }}</span>
                </div>
                <div
                    ref="countryList"
                    class="flex h-31 flex-col items-start gap-2 overflow-y-auto overscroll-contain pr-1 scrollbar-none [&::-webkit-scrollbar]:hidden"
                    role="radiogroup"
                    aria-label="Choisir un pays"
                    @scroll="updateScrollbar"
                >
                    <button
                        v-for="country in countries"
                        :key="country.code"
                        type="button"
                        role="radio"
                        :aria-checked="selectedCountry.code === country.code"
                        class="flex h-5 shrink-0 cursor-pointer items-center gap-1.25 whitespace-nowrap rounded-sm text-left font-['PP_Neue_Montreal',Arial,sans-serif] text-base font-medium leading-none tracking-[0%] hover:text-purple-800 focus-visible:outline-2 focus-visible:outline-purple-700"
                        @click="selectedCountry = country"
                    >
                        <span class="text-[10px]" aria-hidden="true">{{ country.flag }}</span>
                        {{ country.name }}
                    </button>
                </div>
            </div>

            <div class="relative h-62 w-1 self-start rounded-full bg-[#f2eafd]" aria-hidden="true">
                <div
                    class="absolute left-0 w-full rounded-full bg-[#6b21a8] transition-[top] duration-75"
                    :style="{ height: `${scrollbarThumbHeight}%`, top: `${scrollbarThumbTop}%` }"
                ></div>
            </div>

            <div class="flex flex-col gap-5.5 text-xs leading-[1.55]">
                <section>
                    <h2 class="m-0 font-['PP_Neue_Montreal',Arial,sans-serif] text-xl sm:text-2xl font-normal leading-normal sm:leading-9 text-black">Contactez-nous</h2>
                    <a class="block font-['PP_Neue_Montreal',Arial,sans-serif] text-xl sm:text-2xl font-normal leading-normal sm:leading-9 tracking-[0%] text-[#676767] no-underline hover:text-purple-700 transition-colors" href="tel:+22900000000">+229 00,00 00 00</a>
                    <a class="block font-['PP_Neue_Montreal',Arial,sans-serif] text-xl sm:text-2xl font-normal leading-normal sm:leading-9 tracking-[0%] text-[#676767] no-underline hover:text-purple-700 transition-colors" href="mailto:contact@41devs.com">contact@41devs.com</a>
                </section>

                <section>
                    <h2 class="m-0 font-['PP_Neue_Montreal',Arial,sans-serif] text-xl sm:text-2xl font-normal leading-normal sm:leading-9 text-black">Notre adresse</h2>
                    <p class="m-0 font-['PP_Neue_Montreal',Arial,sans-serif] text-xl sm:text-2xl font-normal leading-normal sm:leading-9 tracking-[0%] text-[#676767]">Gbèdjiromèdé,</p>
                    <p class="m-0 font-['PP_Neue_Montreal',Arial,sans-serif] text-xl sm:text-2xl font-normal leading-normal sm:leading-9 tracking-[0%] text-[#676767]">Imm SYECA, 2ème étage</p>
                </section>

                <section>
                    <h2 class="m-0 font-['PP_Neue_Montreal',Arial,sans-serif] text-xl sm:text-2xl font-normal leading-normal sm:leading-9 text-black">Nos réseaux</h2>
                    <p class="m-0 font-['PP_Neue_Montreal',Arial,sans-serif] text-xl sm:text-2xl font-normal leading-normal sm:leading-9 tracking-[0%] text-[#676767]">Facebook</p>
                    <p class="m-0 font-['PP_Neue_Montreal',Arial,sans-serif] text-xl sm:text-2xl font-normal leading-normal sm:leading-9 tracking-[0%] text-[#676767]">LinkedIn</p>
                    <p class="m-0 font-['PP_Neue_Montreal',Arial,sans-serif] text-xl sm:text-2xl font-normal leading-normal sm:leading-9 tracking-[0%] text-[#676767]">Dribble</p>
                    <p class="m-0 font-['PP_Neue_Montreal',Arial,sans-serif] text-xl sm:text-2xl font-normal leading-normal sm:leading-9 tracking-[0%] text-[#676767]">Instagram</p>
                </section>
            </div>
        </div>

        <div class="grid gap-y-5 w-full min-w-0 flex-1" id="SecondCol">
            <div class="font-family-[Neue Haas Grotesk Display Pro] font-semibold text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight lg:leading-20 text-[#000000]">
                <div>Travaillons ensemble</div>
                <div>sur votre projet</div>
            </div>
            <form @submit.prevent="handleSubmit" class="grid gap-y-6 sm:gap-y-10">
                <div class="font-family-[PP Neue Montreal] font-normal text-base sm:text-xl lg:text-2xl leading-relaxed lg:leading-9 text-[#676767] w-full max-w-225">
                    <div>Contactez-nous, et l'un de nos conseillers clientèle vous répondra</div>
                    <div>pour discuter de votre projet</div>
                </div>

                <div class="grid gap-y-3 sm:gap-y-5">
                    <label for="contact-name" class="font-family-[PP Neue Montreal] font-normal text-lg sm:text-xl lg:text-2xl leading-relaxed lg:leading-9 text-[#000000] w-full max-w-225">
                        Quel est votre nom <span class="text-purple-600">*</span>
                    </label>
                    <div>
                        <input
                            id="contact-name"
                            v-model="fullName"
                            type="text"
                            required
                            placeholder="Nom et prénoms"
                            class="w-full border-0 border-b border-[#c9c9c9] text-xl sm:text-2xl md:text-3xl lg:text-4xl py-2 font-['PP_Neue_Montreal',Arial,sans-serif] outline-none focus:border-[#5C308C] transition-colors bg-transparent text-black"
                        >
                    </div>
                </div>

                <div class="grid gap-y-3 sm:gap-y-5">
                    <label for="contact-org" class="font-family-[PP Neue Montreal] font-normal text-lg sm:text-xl lg:text-2xl leading-relaxed lg:leading-9 text-[#000000] w-full max-w-225">
                        Quel est votre organisation
                    </label>
                    <div>
                        <input
                            id="contact-org"
                            v-model="organization"
                            type="text"
                            placeholder="Organisation/Entreprise"
                            class="w-full border-0 border-b border-[#c9c9c9] text-xl sm:text-2xl md:text-3xl lg:text-4xl py-2 font-['PP_Neue_Montreal',Arial,sans-serif] outline-none focus:border-[#5C308C] transition-colors bg-transparent text-black"
                        >
                    </div>
                </div>

                <div class="grid gap-y-3 sm:gap-y-5">
                    <label for="contact-msg" class="font-family-[PP Neue Montreal] font-normal text-lg sm:text-xl lg:text-2xl leading-relaxed lg:leading-9 text-[#000000] w-full max-w-225">
                        Parlez-nous de votre projet <span class="text-purple-600">*</span>
                    </label>
                    <div>
                        <textarea
                            id="contact-msg"
                            v-model="message"
                            required
                            placeholder="Message"
                            class="h-32 sm:h-40 lg:h-49 w-full resize-none border-0 border-b border-[#c9c9c9] text-xl sm:text-2xl md:text-3xl lg:text-4xl py-2 font-['PP_Neue_Montreal',Arial,sans-serif] outline-none focus:border-[#5C308C] transition-colors bg-transparent text-black"
                        ></textarea>
                    </div>
                </div>

                <div v-if="validationError" class="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-base font-medium">
                    {{ validationError }}
                </div>

                <div>
                    <button
                        type="submit"
                        :disabled="isSubmitting"
                        class="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#5C308C] hover:bg-[#492272] disabled:opacity-60 disabled:cursor-not-allowed transition-all text-lg sm:text-xl lg:text-2xl text-[#FFFFFF] rounded-2xl py-3.5 sm:py-4 lg:py-5 px-8 sm:px-12 lg:px-19 cursor-pointer shadow-[0_4px_20px_rgba(92,48,140,0.3)]"
                    >
                        <svg v-if="isSubmitting" class="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>{{ isSubmitting ? 'Envoi en cours...' : 'Envoyer' }}</span>
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
