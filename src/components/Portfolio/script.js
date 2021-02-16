import Port from './Port.vue'

export default {
    components: {Port},
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
                    img: 'https://i.ibb.co/XF8W6mF/Minimal-Canva-Design.png',
                    images: ['https://i.ibb.co/XF8W6mF/Minimal-Canva-Design.png', 'https://i.ibb.co/Xxzmg0D/Kicks.png'],
                    title: "Poster",
                    des: "Minimal and simple design of poster for online business designed from Canva."
                },
                {
                    img: 'https://i.ibb.co/XSm8BqB/1.png',
                    images: ['https://i.ibb.co/XSm8BqB/1.png', 'https://i.ibb.co/tXw5TN2/2.png'],
                    title: 'Business Card',
                    des: "A a simple yet professional design of business card designed in Adobe Photoshop."
                },
                {
                    img: 'https://i.ibb.co/XbkvqK2/WHITE-COLORED.png',
                    images: ['https://i.ibb.co/XbkvqK2/WHITE-COLORED.png', 'https://i.ibb.co/9wLmCYX/COLORED-TRANSPARENT.png', 'https://i.ibb.co/BjLNp9P/W-COLORED-TRANSPARENT.png'],
                    title: "Logo",
                    des: "Minimal and simple design of a website logo designed in Adobe Illustration."
                },
            ],
        };
    },
};
