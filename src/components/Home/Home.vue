<template>
    <div class="home-page">
        <div class="banner-content">
            <div class="kate-details">
                <p>KATE AWISAN</p>
            </div>
        </div>
        <div class="my-doings">
            <div class="card-box">
                <div class="card-image">
                    <img :src="Ds" />
                </div>
                <div class="card-details">
                    <h3>Social Media Assistant & Customer Service Representative</h3>
                    <p>Address customer issues and resolve them in a timely and efficient manner. Support reps interact with customers on a variety of channels such as phone, email, and social media, and ensure that all valid customer concerns are being dealt with immediately.</p>
                </div>
            </div>

            <div class="card-box">
                <div class="card-image">
                    <img :src="Tr" />
                </div>
                <div class="card-details">
                    <h3>Graphic Designer</h3>
                    <p>I communicate ideas to inspire, inform, or captivate consumers through both physical and virtual art forms that include images, words, or graphics. If you surround yourself with creative inspiration, you are much more likely to act on that inspiration!.</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Banner from './../../assets/image/banner.png'
import ImageKate from './../../assets/image/kate.jpg'
import Ds from './../../assets/image/homepage/ds.jpg'
import Tr from './../../assets/image/homepage/tr.jpg'
export default {
    data: () => {
        return {
            Banner,
            ImageKate,
            Ds,
            Tr
        }
    }
}
</script>
<style lang="scss" src="./style.scss"></style>