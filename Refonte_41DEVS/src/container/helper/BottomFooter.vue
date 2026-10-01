<script setup lang="js">
import logo_footer from '../../asset/icons/ic_41DEVSFooter.svg'
</script>

<template>
    <div class="flex justify-between items-center py-10">
        <!--First Column-->
        <div id="FirstCol" class="gap-y-5 grid">
            <div class="border-0"><img :src="logo_footer" class="border"></div>
            <div class="grid gap-y-1">
                <div class="" id="footer-text">Contacter-nous et notre conseiller clientele vous</div>
                <div class="" id="footer-text">répondra avec des questions sur votre projet.</div>
            </div>
            <div class="grid gap-y-1">
                <div class="" id="footer-text"><a href='#'>contact@41devs.com</a></div>
                <div class="" id="footer-text">(00229) 96 730 496 / 94 876 363</div>
            </div>
        </div>
        <!--Second Column-->
        <div class="flex gap-15" id="SecondCol">
            <div class="" id="first-down">
                <div class="" id="Footer-text">Adresse</div>
                <div class="grid gap-y-1">
                    <div class="" id="footer-text">Contactez-nous et notre</div>
                    <div class="" id="footer-text">conseiller clientèle vous répondra</div>
                </div>
            </div>

            <div class="" id="second-down ">
                <div class="" id="Footer-text">Liens Rapides</div>
                <div class="grid gap-y-1">
                    <div class="" id="footer-text"><a href="#">Services</a></div>
                    <div class="" id="footer-text"><a href="#">Project</a></div>
                    <div class="" id="footer-text"><a href="#">Carrière</a></div>
                </div>
            </div>

            <div class="" id="third-down">
                <div class="" id="Footer-text">Suivez-nous</div>
                <div class="grid gap-y-1">
                    <div class="" id="footer-text"><a href="#">Linkedin</a></div>
                    <div class="" id="footer-text"><a href="#">Facebook</a></div>
                    <div class="" id="footer-text"><a href="#">Dribble</a></div>
                    <div class="" id="footer-text"><a href="#">Instagram</a></div>
                </div>
            </div>
        </div>
    </div>
    <div class="py-10 border-t border-[#FFFFFF29]">
        <div class="flex gap-12.5">
            <div class="" id="footer-text">© 41DEVS 2024. Tous droits réservés</div>
            <div class="" id="footer-text"><a href="#">Termes de services</a></div>
            <div class="" id="footer-text"><a href="#">Polices de cookies</a></div>
            <div class="" id="footer-text"><a href="#">Politique de confidentialité</a></div>
        </div>
    </div>
</template>

<style scoped>

#footer-text {
    font-family: 'PP Neue Montreal';
    font-weight: 400;
    font-size: large;
    font-style: Medium;
    color: #FFFFFFB5;
}

#Footer-text {
    color:#FFFFFF;
    font-size: 24px;
    font-weight: 500;
    font-style: Medium;
    padding-bottom: 5px;
}

</style>