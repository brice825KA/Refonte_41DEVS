<script setup lang="js">
import logo_footer from '../../asset/icons/ic_41DEVSFooter.svg'
</script>

<template>
    <div class="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 py-8 lg:py-10">
        <!--First Column-->
        <div id="FirstCol" class="gap-y-5 grid">
            <div class="border-none transition delay-150 duration-300 ease-in-out">
                <img :src="logo_footer" class="h-8 sm:h-10 w-auto" alt="41DEVS">
            </div>
            <div class="grid gap-y-1">
                <div class="font-['PP_Neue_Montreal'] font-normal text-sm sm:text-base lg:text-lg text-[#FFFFFFB5]">Contacter-nous et notre conseiller clientele vous</div>
                <div class="font-['PP_Neue_Montreal'] font-normal text-sm sm:text-base lg:text-lg text-[#FFFFFFB5]">répondra avec des questions sur votre projet.</div>
            </div>
            <div class="grid gap-y-1">
                <div class="font-['PP_Neue_Montreal'] font-normal text-sm sm:text-base lg:text-lg text-[#FFFFFFB5]">
                    <a href="mailto:contact@41devs.com" class="hover:text-white transition-colors">contact@41devs.com</a>
                </div>
                <div class="font-['PP_Neue_Montreal'] font-normal text-sm sm:text-base lg:text-lg text-[#FFFFFFB5]">(00229) 96 730 496 / 94 876 363</div>
            </div>
        </div>

        <!--Second Column-->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-15 w-full lg:w-auto" id="SecondCol">
            <div class="" id="first-down">
                <div class="font-['PP_Neue_Montreal'] font-medium text-xl sm:text-2xl text-[#FFFFFF] pb-1.5">Adresse</div>
                <div class="grid gap-y-1">
                    <div class="font-['PP_Neue_Montreal'] font-normal text-sm sm:text-base lg:text-lg text-[#FFFFFFB5]">Contactez-nous et notre</div>
                    <div class="font-['PP_Neue_Montreal'] font-normal text-sm sm:text-base lg:text-lg text-[#FFFFFFB5]">conseiller clientèle vous répondra</div>
                </div>
            </div>

            <div class="" id="second-down">
                <div class="font-['PP_Neue_Montreal'] font-medium text-xl sm:text-2xl text-[#FFFFFF] pb-1.5">Liens Rapides</div>
                <div class="grid gap-y-1">
                    <div class="font-['PP_Neue_Montreal'] font-normal text-sm sm:text-base lg:text-lg text-[#FFFFFFB5]">
                        <router-link to="/companies" class="hover:text-white transition-colors">Services</router-link>
                    </div>
                    <div class="font-['PP_Neue_Montreal'] font-normal text-sm sm:text-base lg:text-lg text-[#FFFFFFB5]">
                        <router-link to="/industries" class="hover:text-white transition-colors">Projets</router-link>
                    </div>
                    <div class="font-['PP_Neue_Montreal'] font-normal text-sm sm:text-base lg:text-lg text-[#FFFFFFB5]">
                        <a href="#" class="hover:text-white transition-colors">Carrière</a>
                    </div>
                </div>
            </div>

            <div class="" id="third-down">
                <div class="font-['PP_Neue_Montreal'] font-medium text-xl sm:text-2xl text-[#FFFFFF] pb-1.5">Suivez-nous</div>
                <div class="grid gap-y-1">
                    <div class="font-['PP_Neue_Montreal'] font-normal text-sm sm:text-base lg:text-lg text-[#FFFFFFB5]">
                        <a href="#" class="hover:text-white transition-colors">Linkedin</a>
                    </div>
                    <div class="font-['PP_Neue_Montreal'] font-normal text-sm sm:text-base lg:text-lg text-[#FFFFFFB5]">
                        <a href="#" class="hover:text-white transition-colors">Facebook</a>
                    </div>
                    <div class="font-['PP_Neue_Montreal'] font-normal text-sm sm:text-base lg:text-lg text-[#FFFFFFB5]">
                        <a href="#" class="hover:text-white transition-colors">Dribble</a>
                    </div>
                    <div class="font-['PP_Neue_Montreal'] font-normal text-sm sm:text-base lg:text-lg text-[#FFFFFFB5]">
                        <a href="#" class="hover:text-white transition-colors">Instagram</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Copyright and Policies -->
    <div class="py-6 sm:py-8 lg:py-10 border-t border-[#FFFFFF29]">
        <div class="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 sm:gap-6 lg:gap-12.5">
            <div class="font-['PP_Neue_Montreal'] font-normal text-xs sm:text-sm lg:text-base text-[#FFFFFFB5]">© 41DEVS 2024. Tous droits réservés</div>
            <div class="font-['PP_Neue_Montreal'] font-normal text-xs sm:text-sm lg:text-base text-[#FFFFFFB5]">
                <a href="#" class="hover:text-white transition-colors">Termes de services</a>
            </div>
            <div class="font-['PP_Neue_Montreal'] font-normal text-xs sm:text-sm lg:text-base text-[#FFFFFFB5]">
                <a href="#" class="hover:text-white transition-colors">Polices de cookies</a>
            </div>
            <div class="font-['PP_Neue_Montreal'] font-normal text-xs sm:text-sm lg:text-base text-[#FFFFFFB5]">
                <a href="#" class="hover:text-white transition-colors">Politique de confidentialité</a>
            </div>
        </div>
    </div>
</template>