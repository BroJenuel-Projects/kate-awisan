<template>
    <div>
        <div  class="about-me">
            <div class="image">
                <img src="./../../assets/image/kate.jpg" alt="">
            </div>
            <div class="kate-info">
                <h2>Kate Awisan</h2>
                <h5>kateawisan@gmail.com</h5>
                <p>Hi! I'm Kate Awisan a experienced graphic designer from beautiful Asian country Philippines. I got my Bachelors degree in Information Technology at Kings College of the Philippines in 2019. My work is mostly focused on designing and creating contents. <br><br>
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
        <Port :ports="ports" />
    </div>
</template>
<script>
import Image1 from "./../../assets/port/CollabsTracking_LLC.png";
import Image2 from "./../../assets/port/Dropbox_LLC.png";
import Image3 from "./../../assets/port/Dropified_LLC.png";
import Image4 from "./../../assets/port/FacebookChat_LLC.png";
import Image5 from "./../../assets/port/Macys.png";
import Image6 from "./../../assets/port/shopify_LLC.png";
import Image7 from "./../../assets/port/SITEL.png";
import Image8 from './../../assets/port/companylisting.png'
import Experience from './../Experience'
import Port from './../Portfolio/Port'
export default {
    name: "AboutMe",
    components: {
        Experience,
        Port
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
            ],
            ports: [
                {
                    img: Image5,
                    images: [Image5,Image7],
                    title: "Macys Customer Service Representative",
                    des:
                        "Experienced Customer Service and Support. I've been one of the customer service representatives of the department store Macy's from a BPO Call Center in the Philippines. More on answering calls, assisting customers' complaints or inquiries, updating them with shipping details, processing refunds, and orders. Note that most of their tools and other managing systems are confidential.",
                },
                {
                    img: Image3,
                    images: [Image3,Image1, Image2, Image4, Image6],
                    title: "Lenny Lemons Social Media Assistant",
                    des:
                        "I've been a Social Media Chat Support from an online store based in Hawaii named Lenny Lemons (lennylemons.com). Handled influencers, brand ambassadors and, customer chats through the social media accounts of the cmpany such as Facebook and Instagram. It includes data entries, reacting, commenting, posting, editing images, creating contents and downloading photos.",
                },
                {
                    img: Image8,
                    images: [Image8],
                    title: 'Freelance Data Entry',
                    des: "A screenshot of the project that I've done in freelancing from upwork by doing some web research, data collections, data extraction from the various website companies in a given timeline."
                },
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