<script lang="js" setup>
import insuranceIcon from '@/asset/icons/ic_industries3.svg'
import financeIcon from '@/asset/icons/ic_industries1.svg'
import publicIcon from '@/asset/icons/ic_industries2.svg'
import healthIcon from '@/asset/icons/ic_industries4.svg'
import entertainmentIcon from '@/asset/icons/ic_industries5.svg'
import securityIcon from '@/asset/icons/ic_industries6.svg'

import insuranceBackdrop from '@/asset/icons/ic_industries_transparent6.svg'
import financeBackdrop from '@/asset/icons/ic_industries_transparent1.svg'
import publicBackdrop from '@/asset/icons/ic_industries_transparent2.svg'
import healthBackdrop from '@/asset/icons/ic_industries_transparent3.svg'
import entertainmentBackdrop from '@/asset/icons/ic_industries_transparent4.svg'
import securityBackdrop from '@/asset/icons/ic_industries_transparent5.svg'

const industries = [
    {
        slug: 'assurance',
        name: ['Assurance'],
        color: 'rgba(196, 161, 239, 1)',
        textColor: '#fff',
        icon: insuranceIcon,
        backdrop: insuranceBackdrop,
        layout: 'insurance',
    },
    {
        slug: 'banque-finance',
        name: ['Banque et', 'Finances'],
        color: 'rgba(173, 221, 254, 1)',
        textColor: '#000',
        icon: financeIcon,
        backdrop: financeBackdrop,
        layout: 'finance',
    },
    {
        slug: 'secteur-public',
        name: ['Secteur public'],
        color: 'rgba(243, 222, 120, 1)',
        textColor: '#000',
        icon: publicIcon,
        backdrop: publicBackdrop,
        layout: 'public',
    },
    {
        slug: 'sante-pharmaceutique',
        name: ['Santé et Industrie', 'pharmaceutique'],
        color: 'rgba(99, 198, 119, 1)',
        textColor: '#fff',
        icon: healthIcon,
        backdrop: healthBackdrop,
        layout: 'health',
    },
    {
        slug: 'divertissement',
        name: ['Divertissement'],
        color: 'rgba(255, 226, 238, 1)',
        textColor: '#000',
        icon: entertainmentIcon,
        backdrop: entertainmentBackdrop,
        layout: 'entertainment',
    },
    {
        slug: 'securite',
        name: ['Sécurité'],
        color: 'rgba(95, 1, 211, 1)',
        textColor: '#fff',
        icon: securityIcon,
        backdrop: securityBackdrop,
        layout: 'security',
    },
]
</script>

<template>
    <section class="grid gap-6 sm:gap-8 lg:gap-10 py-8 sm:py-10 px-4 sm:px-8 md:px-14 lg:px-25">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            <RouterLink
                v-for="industry in industries"
                :key="industry.layout"
                :to="`/industries/${industry.slug}`"
                class="industry-card aspect-auto sm:aspect-square min-h-[140px] border-0 rounded-none shadow-none"
                :class="industry.layout"
                :style="{ backgroundColor: industry.color, color: industry.textColor }"
            >
                <img :src="industry.backdrop" alt="" aria-hidden="true" class="industry-backdrop">
                <img :src="industry.icon" alt="" aria-hidden="true" class="industry-icon">
                <span class="industry-title">
                    <span v-for="line in industry.name" :key="line" class="block">{{ line }}</span>
                </span>
            </RouterLink>
        </div>
    </section>
</template>

<style scoped>
.industry-card {
    position: relative;
    overflow: hidden;
}

.industry-title {
    position: absolute;
    z-index: 2;
    top: 26%;
    left: 7.5%;
    max-width: 75%;
    margin: 0;
    font-family: 'Neue Haas Grotesk Display Pro', sans-serif;
    font-size: 38.89px;
    font-weight: 600;
    font-style: normal;
    line-height: 44.72px;
    letter-spacing: 0;
}

@media (max-width: 1023px) {
    .industry-title {
        font-size: 24px;
        line-height: 1.2;
    }
}

@media (max-width: 639px) {
    .industry-title {
        font-size: 20px;
    }
}

.industry-backdrop,
.industry-icon {
    position: absolute;
    height: auto;
    object-fit: contain;
    pointer-events: none;
}

.industry-backdrop {
    z-index: 0;
}

.industry-icon {
    z-index: 1;
}

.insurance .industry-backdrop {
    top: 37%;
    right: -2%;
    width: 34%;
}

.insurance .industry-icon {
    top: 12%;
    right: -1%;
    width: 38%;
}

.finance .industry-backdrop {
    top: 35%;
    right: -4%;
    width: 39%;
}

.finance .industry-icon {
    top: 10%;
    right: -1%;
    width: 39%;
}

.public .industry-backdrop {
    top: 36%;
    right: -2%;
    width: 38%;
}

.public .industry-icon {
    top: 12%;
    right: -4%;
    width: 39%;
}

.health .industry-backdrop {
    top: 38%;
    right: -2%;
    width: 39%;
}

.health .industry-icon {
    top: 10%;
    right: -5%;
    width: 36%;
}

.entertainment .industry-backdrop {
    top: 39%;
    right: -1%;
    width: 36%;
}

.entertainment .industry-icon {
    top: 12%;
    right: -1%;
    width: 37%;
}

.security .industry-backdrop {
    top: 37%;
    right: -5%;
    width: 38%;
}

.security .industry-icon {
    top: 12%;
    right: -4%;
    width: 38%;
}
</style>
