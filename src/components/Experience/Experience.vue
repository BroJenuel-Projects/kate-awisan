<template>
    <div class="my-experince">
        <div class="numbered-header">
            <i class="bx bx-user front-icon"></i>
            Experience
        </div>
        <div class="experiences">
            <template v-for="exp in experiences">
                <div :key="exp.company">
                    <div class="exp-item" >
                        <h3>
                            {{ exp.role }}
                            <span class="exp-company">@ {{ exp.company }}</span>
                        </h3>
                        <h5>{{ exp.date }}</h5>
                        <p>
                            <q>{{ exp.des }}</q>
                        </p>
                        
                    </div>
                    <Port :ports="exp.ports" />
                </div>
            </template>
        </div>
    </div>
</template>
<script>
import Image1 from "./../../assets/port/CollabsTracking_LLC.png";
import Image2 from "./../../assets/port/Dropbox_LLC.png";
import Image3 from "./../../assets/port/Dropified_LLC.png";
import Image4 from "./../../assets/port/FacebookChat_LLC.png";
import Image5 from "./../../assets/port/Macys.png";
import Image6 from "./../../assets/port/shopify_LLC.png";
import Image7 from "./../../assets/port/SITEL.png";
import Image8 from './../../assets/port/companylisting.png'
import Port from "./../Portfolio/Port";
export default {
    components: { Port },
    name: "Experience",
    data: () => {
        return {
            experiences: [
                {
                    company: "Lenny Lemons",
                    date: "November 2020 - February 2021",
                    role: "Social Media Chat Support",
                    des: "I've been a Social Media Chat Support from an online store based in Hawaii named Lenny Lemons (lennylemons.com), handled both influencers, brand ambassadors and, customer chats from their social media accounts such as Facebook and Instagram. It also includes reacting, commenting, posting, editing images, and downloading photos from the influencers to drop box.",
                    ports: [
                        
                        {
                            img: Image3,
                            images: [Image3, Image1, Image2, Image4, Image6],
                            title: "Lenny Lemons Social Media Assistant",
                            des: "I've been a Social Media Chat Support from an online store based in Hawaii named Lenny Lemons (lennylemons.com). Handled influencers, brand ambassadors and, customer chats through the social media accounts of the cmpany such as Facebook and Instagram. It includes data entries, reacting, commenting, posting, editing images, creating contents and downloading photos.",
                        },
                        {
                            img: Image8,
                            images: [Image8],
                            title: "Freelance Data Entry",
                            des: "A screenshot of the project that I've done in freelancing from upwork by doing some web research, data collections, data extraction from the various website companies in a given timeline.",
                        },
                    ],
                },
                {
                    company: "Sitel",
                    date: "July 2019 - October 2019",
                    role: "Customer Service Represintative",
                    des: "Experienced Customer Service and Support from various companies. I've been one of the customer service representatives of the department store Macy's in the office-based BPO Call Center in the Philippines, most done tasks are answering calls, assisting customers' complaints or inquiries, updating them with shipping details, processing refunds, and orders. Note that most of their tools and other managing systems are confidential.",
                    ports: [
                        {
                            img: Image5,
                            images: [Image5, Image7],
                            title: "Macys Customer Service Representative",
                            des: "Experienced Customer Service and Support. I've been one of the customer service representatives of the department store Macy's from a BPO Call Center in the Philippines. More on answering calls, assisting customers' complaints or inquiries, updating them with shipping details, processing refunds, and orders. Note that most of their tools and other managing systems are confidential.",
                        },
                    ]
                },
                {
                    company: "iLearn Skills Development Academy",
                    date: "September 2018 - December 2018",
                    role: "Graphic Designer",
                    des: "I worked as an intern and been one of the graphic designers team. I mostly create logos, posters and magazine of the company. Been also doing data entry like excel/word data extracting and updating informations.",
                },
            ],
        };
    },
};
</script>
<style lang="scss" src="./Experience.scss" />