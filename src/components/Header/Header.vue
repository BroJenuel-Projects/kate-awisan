<template>
    <div class="my-header">
        <div class="nav-title">
            <i class='bx bx-envelope'></i>
            <!-- <span>KateAwisan@gmail.com</span> -->
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
                    <a href="#"><i class='bx bx-phone-call' ></i> Contact Me</a>
                    
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