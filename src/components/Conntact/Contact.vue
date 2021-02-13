<template>
    <div class="contact-me">
        <div class="numbered-header">
            <i class='bx bx-phone-incoming'></i>
            Contact Me
        </div>
        <p class="header-des">You can contact me through the social media below.</p>
        <ul>
            <li @click="goToLink('https://kateawisan@gmail.com', true)"><i class='bx bx-mail-send'></i></li>
            <li @click="goToLink('https://www.linkedin.com/in/kateawisan/')">
                <i class='bx bxl-linkedin-square' ></i>
            </li>
            <li @click="goToLink('https://www.instagram.com/kateawisan/')">
                <i class='bx bxl-instagram-alt' ></i>
            </li>
        </ul>
        <ContactForm />
    </div>
</template>
<script>
import ContactForm from './Form'
export default {
    components: {ContactForm},
    methods: {
        goToLink(link, mail=false){
            window.open(mail ? "mailto:"+link:link)
        }
    }
}
</script>
<style lang="scss">
    .contact-me {

        ul {
            list-style: none;
            display: flex;
            gap: 20px;
            margin: 0;
            padding: 0;
            li {
                font-size: 50px;
                opacity: 0.3;
                transition: 0.3s;
                cursor: pointer;
                color: var(--highlight);

                &:hover {
                    opacity: 1;
                }
            }
        }
    }
</style>