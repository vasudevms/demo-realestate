<template>
    <div class="idx-listing-section">
      <h1>Recent Sales</h1>
      
      <!-- Navigation Arrows Positioned at Top-Right -->
      <div class="slider-controls">
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
  
      <swiper
  :modules="[SwiperAutoplay, SwiperNavigation]"
  :slides-per-view="2"
  :space-between="20"
  :loop="true"
  :navigation="{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }"
  :autoplay="{ delay: 4000 }"
  :breakpoints="{
    0: { slidesPerView: 1 },   // Show 1 slide on mobile
    768: { slidesPerView: 2 }, // Show 2 slides from 768px and up
  }"
  class="idx-slider"
>
        <swiper-slide v-for="(property, index) in properties" :key="index">
          <div class="property-card">
            <!-- Property Image with Zoom Effect -->
            <div class="image-container">
              <img 
                :src="propertyImage" 
                alt="Property Image" 
                class="property-image" 
              />
            </div>
  
            <!-- Property Details -->
            <div class="property-details">
              <h3 class="property-price">${{ property.price.toLocaleString() }}</h3>
              <p class="property-address">{{ property.address }}</p>
              <p class="property-info">
                <strong>{{ property.sqft }} SqFt</strong> | MLS: {{ property.mls }}
              </p>
            </div>
          </div>
        </swiper-slide>
      </swiper>
      <div class="button-container">
        <a href="">SEARCH ALL HOMES</a>
      </div>
    </div>
  </template>
  
  <script>
  import { Swiper, SwiperSlide } from "swiper/vue";
  import "swiper/css";
  import "swiper/css/navigation";
  import { Autoplay as SwiperAutoplay, Navigation as SwiperNavigation } from "swiper/modules";
  
  export default {
    components: { Swiper, SwiperSlide },
    setup() {
      const properties = [
        {
          title: "Luxury Villa",
          price: 500000,
          address: "533 Belle Meade Blvd Nashville TN, 37205",
          sqft: 3200,
          mls: "MLS123456",
          image: "/images/property1.jpg",
        },
        {
          title: "Modern Apartment",
          price: 350000,
          address: "533 Belle Meade Blvd Nashville TN, 37205",
          sqft: 1800,
          mls: "MLS789012",
          image: "/images/property2.jpg",
        },
        {
          title: "Cozy Cottage",
          price: 250000,
          address: "533 Belle Meade Blvd Nashville TN, 37205",
          sqft: 1400,
          mls: "MLS345678",
          image: "/images/property3.jpg",
        },
        {
          title: "Beachfront Condo",
          price: 750000,
          address: "533 Belle Meade Blvd Nashville TN, 37205",
          sqft: 2800,
          mls: "MLS901234",
          image: "/images/property4.jpg",
        },
      ];
  
      return { 
        properties, 
        SwiperAutoplay, 
        SwiperNavigation, 
        propertyImage: "/themes/public/assets/img/no-property-image.jpg"
      };
    },
  };
  </script>
  
  <style scoped>
  /* Section Styling */
  .idx-listing-section {
    padding: 40px;
    background: #f9f9f9;
    position: relative;
  }
  .idx-listing-section h1{
    font-size: 29px;
    letter-spacing: 6px;
    text-transform: uppercase;
    font-weight: 400;
    font-family: "Montserrat", serif;
    color: #000;
    text-align: center;
    text-rendering: optimizeLegibility;
    margin-bottom: 25px;
    line-height: 1.3;
  }
  /* Navigation Arrows at Top-Right */
  .slider-controls {
  position: absolute;
  top: 90px;
  right: 80px;
  display: flex;
  gap: 10px;
}

/* Custom Swiper Navigation Arrows */
/* Ensure arrows are positioned correctly */
.swiper-button-prev {
  left: auto; /* Reset default */
  right: 50px; /* Adjust position */
  order: 1; /* Ensure it appears second */
}

.swiper-button-next {
  right: 0px; /* Adjust position */
  order: 0; /* Ensure it appears first */
}

/* Custom Swiper Navigation Arrows */
.swiper-button-prev, .swiper-button-next {
  width: 48px;
  height: 48px;
  background: white; /* Square background */
  border: 2px solid black; /* Black border */
  color: black; /* Black arrow icon */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  cursor: pointer;
  transition: 0.3s;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.swiper-button-prev:hover, .swiper-button-next:hover {
  background: black;
  color: white; /* Invert colors on hover */
}
.swiper-button-prev:after, .swiper-button-next:after{
    font-size: 20px;
}
  
  /* Property Card */
  .property-card {
    background: white;
    border: 2px solid #ddd;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
  }
  
  /* Image Container (for Hover Zoom Effect) */
  .image-container {
    overflow: hidden;
  }
  .property-image {
    width: 100%;
    height: 250px; /* Increased Image Size */
    object-fit: cover;
    transition: transform 0.3s ease-in-out;
  }
  .property-image:hover {
    transform: scale(1.1);
  }
  
  /* Property Details */
  .property-details {
    padding: 15px;
    text-align: center;
  }
  .property-price {
    font-size: 20px;
    font-weight: bold;
    color: #27ae60;
  }
  .property-address {
    font-size: 14px;
    color: #666;
    margin: 5px 0;
  }
  .property-info {
    font-size: 14px;
    color: #333;
  }

  .button-container{
    margin-top: 80px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    margin-top: 18px;
  }
  .button-container a{
    background-color: transparent;
    border-color: #000;
    color: #000;
    background: transparent;
    border: 2px solid;
    color: inherit;
    cursor: pointer;
    display: inline-block;
    font-family: inherit;
    font-size: 12px;
    letter-spacing: inherit;
    letter-spacing: 1.5px;
    line-height: 1;
    max-width: 100%;
    overflow: hidden;
    padding: 15px 30px;
    text-align: center;
    text-decoration: none;
    text-overflow: ellipsis;
    text-transform: uppercase;
    transition: all .2s;
    white-space: nowrap;
  }
  .button-container a:hover{
    color: #fff;
    background-color: #000;
  }
  </style>
  