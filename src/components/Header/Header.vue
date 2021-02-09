<template>
    <div class="my-header" :class="{show:!showMobileNav}">
        <div class="open-nav-button" :class="{show:!showMobileNav}" @click="showMobileNav = !showMobileNav">
            <i class='bx bx-menu-alt-right' ></i>
        </div>
        <div class="nav-title">
            <div @click="showMobileNav = !showMobileNav">
                <router-link to="/" ><i class='bx bxs-user-detail'></i></router-link>
            </div>
            <div class="close-nav-button" @click="showMobileNav = !showMobileNav">
                <i class='bx bx-x'></i>
            </div>
        </div>
        <div class="nav-menu">
            <ul>
                <li @click="showMobileNav = !showMobileNav">
                    <router-link to="/"><i class='bx bx-user' ></i> About Me</router-link>
                    
                </li>
                <li @click="showMobileNav = !showMobileNav">
                    <router-link to="experience"><i class='bx bx-brain' ></i> Experience</router-link>
                    
                </li>
                <li @click="showMobileNav = !showMobileNav">
                    <router-link to="portfolio"><i class='bx bx-file' ></i> Portfolio</router-link>
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