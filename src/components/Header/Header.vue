<template>
    <div class="my-header" :class="{show:!showMobileNav}">
        <div class="open-nav-button" :class="{show:!showMobileNav}" @click="showMobileNav = !showMobileNav">
            <i class='bx bx-menu-alt-right' ></i>
        </div>
        <div class="nav-menu">
            <ul>
                <li @click="showMobileNav = !showMobileNav">
                    <router-link to="/works"><i class='bx bx-file' ></i> Portfolio</router-link>
                </li>
                <!-- <li @click="showMobileNav = !showMobileNav">
                    <router-link to="/"><i class='bx bx-home' ></i> Home</router-link>
                </li> -->
                <li @click="showMobileNav = !showMobileNav">
                    <router-link to="/aboutme"><i class='bx bx-user' ></i> About Me</router-link>
                </li>
                
                <li @click="showMobileNav = !showMobileNav">
                    <router-link to="contact"><i class='bx bx-phone-call' ></i> Contact Me</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: "Header",
    data: () => {
        return {
            showMobileNav: false
        }
    }
}
</script>
<style lang="scss" src='./style.scss'></style>