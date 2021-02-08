<template>
    <div class="my-header">
        <div class="nav-title">
            <router-link to="/"><i class='bx bxs-user-detail'></i></router-link>
        </div>
        <div class="nav-menu">
            <ul>
                <li>
                    <router-link to="/"><i class='bx bx-user' ></i> About Me</router-link>
                    
                </li>
                <li>
                    <router-link to="experience"><i class='bx bx-brain' ></i> Experience</router-link>
                    
                </li>
                <li>
                    <router-link to="portfolio"><i class='bx bx-file' ></i> Portfolio</router-link>
                </li>
                <li>
                    <router-link to="contact"><i class='bx bx-phone-call' ></i> Contact Me</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: "Header",
}
</script>
<style lang="scss" src='./style.scss'></style>