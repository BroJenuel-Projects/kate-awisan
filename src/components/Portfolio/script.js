
import Image1 from "./../../assets/port/CollabsTracking_LLC.png";
import Image2 from "./../../assets/port/Dropbox_LLC.png";
import Image3 from "./../../assets/port/Dropified_LLC.png";
import Image4 from "./../../assets/port/FacebookChat_LLC.png";
import Image5 from "./../../assets/port/Macys.png";
import Image6 from "./../../assets/port/shopify_LLC.png";
import Image7 from "./../../assets/port/SITEL.png";
import Image8 from './../../assets/port/companylisting.png'
import ProductLabelDesign from './../../assets/port/productLabelDesign.png'
import RemoveImageBackground3 from './../../assets/port/imagebackgroundremove3.png'
import RemoveImageBackground2 from './../../assets/port/imagebackgroundremove2.png'
import RemoveImageBackground1 from './../../assets/port/imagebackgroundremove1.png'
import Logo1 from './../../assets/port/logo1.png'
import Logo2 from './../../assets/port/logo2.png'
import Covidbc1 from './../../assets/port/covidbc1.png'
import Covidbc2 from './../../assets/port/covidbc2.png'
import Modal from './Modal.vue'

import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
    components: {Modal, VueSlickCarousel},
    data: () => {
        return {
            showModal: false,
            settings: {
                "dots": true,
                "dotsClass": "slick-dots custom-dot-class",
                "edgeFriction": 0.35,
                "infinite": false,
                "speed": 500,
                "slidesToShow": 1,
                "slidesToScroll": 1
              },
            select: {},
            ports: [
                {
                    img: Image5,
                    images: [Image5,Image7],
                    title: "Macys Customer Service Representative",
                    des:
                        "Experienced Customer Service and Support from various companies. I've been one of the customer service representatives of the department store Macy's in the office-based BPO Call Center in the Philippines, most done tasks are answering calls, assisting customers' complaints or inquiries, updating them with shipping details, processing refunds, and orders. Note that most of their tools and other managing systems are confidential.",
                },
                {
                    img: Image3,
                    images: [Image3,Image1, Image2, Image4, Image6],
                    title: "Lenny Lemons Social Media Chat Support",
                    des:
                        "I've been a Social Media Chat Support from an online store based in Hawaii named Lenny Lemons (lennylemons.com), handled both influencers, brand ambassadors and, customer chats from their social media accounts such as Facebook and Instagram. It also includes reacting, commenting, posting, editing images, and downloading photos from the influencers to drop box.",
                },
                {
                    img: Image8,
                    images: [Image8],
                    title: 'Company Data Listings',
                    des: "This is the sample screenshot of the project that was done by doing some web research, data collection, data extraction from the various website companies in a given timeline."
                },
                {
                    img: ProductLabelDesign,
                    images: [ProductLabelDesign],
                    title: 'Product Label Design',
                    des: "Created and designed product label for a Cooperative companys' hony product for promotion."
                },
                {
                    img: RemoveImageBackground3,
                    images: [RemoveImageBackground3, RemoveImageBackground2, RemoveImageBackground1],
                    title: "Image Background Remove",
                    des: "This was some of my personal reference work for my portfolio and for clients reference."
                },
                {
                    img: Logo1,
                    images: [Logo1, Logo2],
                    title: 'Application Logo',
                    des: "Been designing simple logos for businesses, website and applications."
                },
                {
                    img: Covidbc1,
                    images: [Covidbc2, Covidbc1],
                    title: 'COVID 19 Info Brochure',
                    des: "I created a brochure about the Corona Virus this 2020 for a school and entered the informations."
                }
            ],
        };
    },
};
