<template>
    <div class="contact-me">
        <div class="numbered-header">
            <i class='bx bx-phone-incoming'></i>
            Contact Me
        </div>
        <p class="header-des">You can contact me through the social media below.</p>
        <ul>
            <li @click="goToLink('https://www.facebook.com/kitztakit.calixtoawisan')"><i class='bx bxl-facebook-circle' ></i></li>
            <li @click="goToLink('https://www.linkedin.com/in/kateawisan/')">
                <i class='bx bxl-linkedin-square' ></i>
            </li>
            <li @click="goToLink('https://www.instagram.com/kitztakit/')">
                <i class='bx bxl-instagram-alt' ></i>
            </li>
        </ul>
        <button>
            Contact
        </button>
    </div>
</template>
<script>
export default {
    methods: {
        goToLink(link){
            window.open(link,'_blank')
        }
    }
}
</script>
<style lang="scss">
    .contact-me {
        button {
            border-radius: 20px;
            border: none;
            padding: 15px 40px;
            background: var(--gradient);
            color: #eee;
            cursor: pointer;
            user-select: none;
            outline: none;
            transition: 0.3s;
            border: 2px solid #fff;

            &:active {
                background: var(--highlight);
            }
        }

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