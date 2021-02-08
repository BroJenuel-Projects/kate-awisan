<template>
    <div class="my-portfolio">
        <Modal v-if="showModal" @close="showModal = false">
            <h3 slot="header">{{select.title}}</h3>
            <div slot="body">
                <VueSlickCarousel v-bind="settings">
                    <div v-for="(image, i) in select.images" :key="i">
                        <img :src="image" width="500px">
                    </div>
                </VueSlickCarousel>
                <br>
                <br>
                <div>
                    {{select.des}}
                </div>
            </div>
        </Modal>
        <div class="numbered-header">
            <i class="bx bx-file front-icon"></i>
            Portfolio
        </div>
        <p class="header-des">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
            fugiat, officiis suscipit quaerat eligendi libero, eveniet
            consequuntur repellendus recusandae saepe tenetur laborum quo quam.
            Debitis nam architecto harum earum assumenda!
        </p>
        <div class="item-container">
            <div v-for="port in ports" :key="port.title" class="item-box" @click="showModal = true; select = port">
                <div class="item-image">
                    <img :src="port.img" alt="" />
                </div>
                <div class="item-details">
                    <p>{{ port.title }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./script.js"></script>
<style lang="scss" src="./Portfolio.scss"></style>