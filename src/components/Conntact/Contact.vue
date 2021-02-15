<template>
    <div class="contact-me">
        <div class="numbered-header">
            <i class='bx bx-phone-incoming'></i>
            Contact Me
        </div>
        <p class="header-des">You can contact me through the social media below.</p>
        <div class="centerform">
            <ContactForm />
        </div>
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
        .centerform {
            display: flex;
            justify-content: center;
        }
    }
</style>