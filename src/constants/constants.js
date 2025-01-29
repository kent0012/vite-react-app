import ojective from "../assets/icons/objective.png";
import expert from "../assets/icons/expert.png";
import inspiration from "../assets/icons/inspiration.png";

import vr_1 from "../assets/products/vr-1.jpg";
import vr_2 from "../assets/products/vr-2.jpg";
import vr_3 from "../assets/products/vr-3.jpg";
import vr_4 from "../assets/products/vr-4.jpg";

export const mainMenu = [
    {
        id: 1,
        title: "Home",
        url: "/"
    },
    {
        id: 2,
        title: "Shop",
        url: "/shop"
    }, 
  
 
]

export const whyWeExist = [
    {
        id: 1,
        title: "Why We Exist",
        description: "At MuzanTech, we transform how you experience the world with advanced virtual reality. Our premium headsets deliver immersive gaming, training, and exploration, blending innovation, comfort, and quality. Discover the future of reality—one headset at a time.",
        image: expert
    },
    {
        id: 2,
        title: "Our Future Goals",
        description: "Our future goals are to provide the best virtual reality experience to our customers. We are committed to providing the best quality products and services to our customers. We are constantly working on improving our products and services to meet the needs of our customers.",
        image: ojective
    },
    {
        id: 3,
        title: "Values and Inspiration",
        description: "Our values are to provide the best quality products and services to our customers. We are committed to providing the best virtual reality experience to our customers. We are constantly working on improving our products and services to meet the needs of our customers.",
        image: inspiration
    }
]

export const productList = [
  { id: 1, product_name: "Meta Quest 3", product_image: vr_4, category_id: 3, comment_id: 1, product_rating: 5, product_price: 499, product_stocks: 20, product_description: "The Meta Quest 3 is a powerful standalone VR headset that offers improved graphics, enhanced processing power, and advanced hand tracking. With a lighter design and better ergonomics, it provides a comfortable and immersive virtual reality experience for gaming, fitness, and productivity applications." },
  { id: 2, product_name: "PlayStation VR2", product_image: vr_2, category_id: 7, comment_id: 2, product_rating: 4.5, product_price: 549, product_stocks: 15, product_description: "Designed exclusively for PlayStation 5, the PlayStation VR2 delivers next-level immersion with cutting-edge visuals, haptic feedback, and adaptive triggers. Its stunning 4K HDR display and inside-out tracking make it a must-have for console gamers looking to experience high-quality virtual reality entertainment." },
  { id: 3, product_name: "HTC Vive Pro 2", product_image: vr_1, category_id: 1, comment_id: 3, product_rating: 2.5, product_price: 799, product_stocks: 10, product_description: "The HTC Vive Pro 2 is a high-end VR headset designed for professionals and enthusiasts. It features a 5K resolution display, a 120-degree field of view, and a 120Hz refresh rate for ultra-smooth gameplay. Ideal for enterprise use, simulations, and high-fidelity VR gaming experiences." },
  { id: 4, product_name: "Valve Index", product_image: vr_4, category_id: 9, comment_id: 4, product_rating: 4, product_price: 999, product_stocks: 8, product_description: "With its industry-leading refresh rate of 144Hz and precise tracking, the Valve Index is one of the most advanced PC VR headsets. Featuring high-quality audio, excellent comfort, and detailed finger-tracking controllers, it delivers an unparalleled virtual reality experience for gamers and professionals alike." },
  { id: 5, product_name: "Pico 4", product_image: vr_1, category_id: 5, comment_id: 5, product_rating: 3.5, product_price: 429, product_stocks: 25, product_description: "The Pico 4 is an affordable standalone VR headset offering inside-out tracking, a lightweight design, and a high-resolution display. Perfect for casual gaming, social VR, and fitness applications, it delivers a comfortable and engaging experience without requiring a PC or external sensors." },
  { id: 6, product_name: "Meta Quest 2", product_image: vr_4, category_id: 10, comment_id: 6, product_rating: 5, product_price: 299, product_stocks: 30, product_description: "The Meta Quest 2 is a popular all-in-one VR headset that delivers impressive performance at an affordable price. Featuring a powerful Snapdragon XR2 processor, hand tracking, and a vast library of VR content, it's ideal for gamers, fitness enthusiasts, and virtual collaboration." },
  { id: 7, product_name: "HTC Vive XR Elite", product_image: vr_1, category_id: 2, comment_id: 7, product_rating: 4, product_price: 1099, product_stocks: 5, product_description: "The HTC Vive XR Elite is a premium hybrid VR and AR headset that offers high-resolution passthrough, an ergonomic design, and modular customization. Ideal for both gaming and enterprise applications, it features precise tracking and supports wireless PC VR streaming for an immersive experience." },
  { id: 8, product_name: "Varjo Aero", product_image: vr_3, category_id: 8, comment_id: 8, product_rating: 5, product_price: 1990, product_stocks: 3, product_description: "The Varjo Aero is a professional-grade VR headset designed for simulation, training, and industrial applications. Boasting ultra-high resolution, accurate eye-tracking, and stunning color accuracy, it offers the most detailed and realistic VR visuals on the market." },
  { id: 9, product_name: "HP Reverb G2", product_image: vr_4, category_id: 4, comment_id: 9, product_rating: 4, product_price: 599, product_stocks: 12, product_description: "The HP Reverb G2 is a Windows Mixed Reality headset that features high-resolution displays, inside-out tracking, and a comfortable fit. With crisp visuals and spatial audio, it provides an immersive VR experience for gaming, creative workflows, and professional training." },
  { id: 10, product_name: "Pimax Crystal", product_image: vr_2, category_id: 6, comment_id: 10, product_rating: 3, product_price: 1599, product_stocks: 6, product_description: "The Pimax Crystal is a high-end VR headset known for its ultra-wide field of view and crystal-clear lenses. Designed for simulation enthusiasts, it supports modular eye-tracking and a high refresh rate, delivering an unmatched level of immersion for PC VR users." },
  { id: 11, product_name: "Samsung Odyssey+", product_image: vr_3, category_id: 1, comment_id: 11, product_rating: 4, product_price: 499, product_stocks: 18, product_description: "The Samsung Odyssey+ is a Windows Mixed Reality headset that enhances visual clarity with its anti-screen door effect technology. Featuring a comfortable fit, built-in spatial audio, and inside-out tracking, it's an excellent choice for PC VR gaming and productivity." },
  { id: 12, product_name: "Oculus Rift S", product_image: vr_4, category_id: 7, comment_id: 12, product_rating: 5, product_price: 399, product_stocks: 22, product_description: "The Oculus Rift S is a powerful PC VR headset with inside-out tracking and an improved display. Designed for high-quality gaming experiences, it offers a comfortable fit, sharp visuals, and an extensive library of immersive content." },
  { id: 13, product_name: "Sony PlayStation VR", product_image: vr_1, category_id: 3, comment_id: 13, product_rating: 4, product_price: 299, product_stocks: 27, product_description: "Sony's original PlayStation VR headset remains a fantastic entry into console-based virtual reality. Featuring a solid game library, motion tracking, and compatibility with PlayStation 4 and PlayStation 5, it continues to deliver an engaging VR experience at an affordable price." },
  { id: 14, product_name: "HTC Vive Cosmos", product_image: vr_4, category_id: 9, comment_id: 14, product_rating: 3, product_price: 699, product_stocks: 9, product_description: "The HTC Vive Cosmos is a modular VR headset that offers inside-out tracking and detachable faceplates for customization. With its crisp visuals and a comfortable design, it caters to both gamers and professionals looking for flexibility in their VR setup." },
  { id: 15, product_name: "Pimax 8K X", product_image: vr_1, category_id: 5, comment_id: 15, product_rating: 5, product_price: 1299, product_stocks: 7, product_description: "The Pimax 8K X is a cutting-edge VR headset that delivers extreme high-resolution visuals and a super-wide field of view. Designed for hardcore VR enthusiasts and professionals, it offers an ultra-immersive experience for simulations and gaming." },
  { id: 16, product_name: "Lenovo Mirage Solo", product_image: vr_2, category_id: 10, comment_id: 16, product_rating: 3, product_price: 399, product_stocks: 16, product_description: "The Lenovo Mirage Solo is a standalone VR headset that runs Google Daydream, offering wireless freedom and a comfortable fit. Its inside-out tracking and extensive content library make it an accessible option for casual VR users." },
  { id: 17, product_name: "Vive Focus 3", product_image: vr_3, category_id: 2, comment_id: 17, product_rating: 4, product_price: 1399, product_stocks: 4, product_description: "The Vive Focus 3 is an enterprise-grade standalone VR headset with a 5K display, superior tracking, and excellent ergonomics. Ideal for business applications, training, and collaboration." }
];



  export const categoryList = [
    {
      id: 1,
      category_name: "Meta Quest 3",
    },
    {
      id: 2,
      category_name: "Play Station VR2",
    },
    {
      id: 3,
      category_name: "Meta Quest Pro",
    },
    {
      id: 4,
      category_name: "Apple Vision Pro",
    },
    {
      id: 5,
      category_name: "HTC Vive XR Elite",
    },
    {
      id: 6,
      category_name: "Valve Index",
    },
    {
      id: 7,
      category_name: "Samsung Gear VR",
    },
    {
      id: 8,
      category_name: "Pico 4",
    },
    {
      id: 9,
      category_name: "Oculus Rift S",
    },
    {
      id: 10,
      category_name: "HP Reverb G2",
    }
  ];