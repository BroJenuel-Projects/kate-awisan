<template>
    <div class="my-experince">
        <div class="numbered-header">
            <i class='bx bx-user front-icon' ></i>
            Experience
        </div>
        <div class="experiences">
            <template v-for="exp in experiences">
                <div class="exp-item" :key="exp.company">
                    <h3>{{exp.role}} <span class="exp-company">@ {{exp.company}}</span></h3>
                    <h5>{{exp.date}}</h5>
                    <p><q>{{exp.des}}</q></p>
                </div>
            </template>
        </div>
    </div>
</template>
<script>
export default {
    name: "Experience",
    data: () => {
        return {
            experiences: [
                {
                    company: 'Lenny Lemons',
                    date: 'November 2020 - February 2021',
                    role: "Social Media Chat Support",
                    des: "I've been a Social Media Chat Support from an online store based in Hawaii named Lenny Lemons (lennylemons.com), handled both influencers, brand ambassadors and, customer chats from their social media accounts such as Facebook and Instagram. It also includes reacting, commenting, posting, editing images, and downloading photos from the influencers to drop box."
                },
                {
                    company: 'Sitel',
                    date: 'July 2019 - October 2019',
                    role: 'Customer Service Represintative',
                    des: "Experienced Customer Service and Support from various companies. I've been one of the customer service representatives of the department store Macy's in the office-based BPO Call Center in the Philippines, most done tasks are answering calls, assisting customers' complaints or inquiries, updating them with shipping details, processing refunds, and orders. Note that most of their tools and other managing systems are confidential."
                },
                {
                    company: 'iLearn Skills Development Academy',
                    date: 'September 2018 - December 2018',
                    role: 'Graphic Designer',
                    des: "I worked as an intern and been one of the graphic designers team. I mostly create logos, posters and magazine of the company. Been also doing data entry like excel/word data extracting and updating informations."
                }
            ]
        }
    }
}
</script>
<style lang="scss" src="./Experience.scss" />