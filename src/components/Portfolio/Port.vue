<template>
    <div class="modal-component">
        <Modal v-if="showModal" @close="showModal = false">
            <h3 slot="header">{{ select.title }}</h3>
            <div slot="body">
                <VueSlickCarousel v-bind="settings" style="text-align: center">
                    <div
                        v-for="(image, i) in select.images"
                        :key="i"
                        class="center0img"
                    >
                        <img :src="image" />
                    </div>
                </VueSlickCarousel>
                <br />
                <br />
                <div style="text-align: center">
                    {{ select.des }}
                </div>
            </div>
        </Modal>
        <div class="item-container">
            <div
                v-for="port in ports"
                :key="port.title"
                class="item-box"
                @click="
                    showModal = true;
                    select = port;
                "
            >
                <div class="item-image">
                    <img :src="port.img" alt="" />
                </div>
                <div class="item-details">
                    <p style="font-size: 14px;">{{ port.title }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import Modal from "./Modal.vue";
export default {
    name: "Port",
    components: { VueSlickCarousel, Modal },
    props: {
        ports: { type: Array },
    },
    data: () => {
        return {
            showModal: false,
            select: {},
            settings: {
                dots: true,
                dotsClass: "slick-dots custom-dot-class",
                edgeFriction: 0.35,
                infinite: false,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        };
    },
};
</script>
<style lang="scss">