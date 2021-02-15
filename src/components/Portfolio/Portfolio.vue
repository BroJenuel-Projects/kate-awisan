<template>
    <div class="my-portfolio">
        <Modal v-if="showModal" @close="showModal = false">
            <h3 slot="header">{{select.title}}</h3>
            <div slot="body">
                <VueSlickCarousel v-bind="settings" style="text-align: center;">
                    <div v-for="(image, i) in select.images" :key="i" class="center0img">
                        <img :src="image">
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
            I'm showing some of the things that I do in my past job/work.
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