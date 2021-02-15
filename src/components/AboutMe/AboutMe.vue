<template>
    <div>
        <div  class="about-me">
            <div class="image">
                <img src="./../../assets/image/kate.jpg" alt="">
            </div>
            <div class="kate-info">
                <h2>Kate Awisan</h2>
                <h5>kateawisan@gmail.com</h5>
                <p>Hi! I'm Kate Awisan a graphic designer from beautiful Asian country Philippines. I got my Bachelors degree in Information Technology at Kings College of the Philippines in 2019. My work is mostly focused on print designs, branding, and product desgins. I'm also fund of creating social media contents and illustrations. <br><br>
                <q><b>The best way to predict the future is to create it.</b></q>
                </p>
                <div class="social-medias">
                    <ul>
                        <li v-for="sm in socialMedia" :key="sm.link" @click="openLink(sm.link)"><i :class='sm.class' :style="sm.style"></i></li>
                    </ul>
                </div>
            </div>
        </div>
        
        <Experience />
    </div>
</template>
<script>
import Experience from './../Experience'
export default {
    name: "AboutMe",
    components: {
        Experience
    },
    data: () => {
        return {
            socialMedia: [
                {
                    link: 'https://www.facebook.com/kitztakit.calixtoawisan',
                    style: 'color: #3b5998',
                    class: 'bx bxl-facebook'
                },
                {
                    link: 'https://www.linkedin.com/in/kateawisan/',
                    style: 'color: #0e76a8',
                    class: 'bx bxl-linkedin'
                },
                {
                    link: 'https://www.instagram.com/kateawisan/',
                    style: 'background: -webkit-linear-gradient(#8a3ab9, #e95950); -webkit-background-clip: text;-webkit-text-fill-color: transparent;',
                    class: 'bx bxl-instagram'
                },
                {
                    link: 'https://twitter.com/AwisanKate',
                    style: 'color: #00acee',
                    class: 'bx bxl-twitter'
                },
                {
                    link: 'https://www.pinterest.ph/kateawisan/',
                    style: 'color: #E60023',
                    class: 'bx bxl-pinterest-alt'
                }
            ]
        }
    },
    methods: {
        openLink(link) {
            window.open(link,'_blank')
        }
    }
}
</script>
<style lang="scss" src="./AboutMe.scss" />