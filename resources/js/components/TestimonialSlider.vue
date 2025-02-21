<template>
    <div class="testimonial-section">
      <h1>Success Stories</h1>
  
      <!-- Custom Navigation Buttons -->
      <!-- <div class="custom-navigation">
        <div class="swiper-button-prev">Previous</div>
        <div class="swiper-button-next">Next</div>
      </div> -->
  
      <swiper
        :modules="[SwiperAutoplay, SwiperPagination, SwiperNavigation]"
        :slides-per-view="3"
        :space-between="30"
        :loop="true"
        :pagination="{ clickable: true }"
        :navigation="{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }"
        :autoplay="{ delay: 3000 }"
        :breakpoints="{
    0: { slidesPerView: 1 },   // Show 1 slide on mobile
    768: { slidesPerView: 3 }, // Show 2 slides from 768px and up
  }"
        class="testimonial-slider"
      >
        <swiper-slide v-for="(testimonial, index) in testimonials" :key="index">
          <div class="testimonial-card">
            <!-- Logo Icon -->
            <img
              src="https://res.cloudinary.com/luxuryp/images/w_960,c_limit,f_auto,q_auto/nyixliq7dkimhdrnilhn/new-project-2022-07-23t114052595"
              alt="logo icon"
              class="logo-icon"
            />
  
            <!-- Testimonial Content -->
            <p class="message">"{{ testimonial.message }}"</p>
  
            <!-- Name -->
            <h3 class="author">{{ testimonial.author }}</h3>
          </div>
        </swiper-slide>
      </swiper>
  
      <div class="button-container">
        <a href=""> View Testimonials</a>
      </div>
    </div>
  </template>
  
  <script>
  import { Swiper, SwiperSlide } from "swiper/vue";
  import "swiper/css";
  import "swiper/css/navigation";
  import "swiper/css/pagination";
  import {
    Autoplay as SwiperAutoplay,
    Pagination as SwiperPagination,
    Navigation as SwiperNavigation
  } from "swiper/modules";
  
  export default {
    components: { Swiper, SwiperSlide },
    setup() {
      const testimonials = [
        {
          logoIcon: "/images/logo1.png",
          message:
            "David is a gem to work with! He's incredibly knowledgeable and always willing to do the extra work to make sure everything is thoroughly researched and clear. He also cares deeply about making sure you find a house that you'll love and be happy in...",
          author: "John Doe"
        },
        {
          logoIcon: "/images/logo2.png",
          message:
            "A HUGE thank you to David for his amazing guidance and professionalism all while being very patient knowing what a huge decision this has been for us.  We have sold 5 other homes and have never had such a wonderful experience looking for and selli..",
          author: "Jane Smith"
        },
        {
          logoIcon: "/images/logo3.png",
          message:
            "David guided us through selling our house after we found our dream home. He quickly identified the touch-ups that would help our home stand out and attract the most offers. David knows the market well and was able to advise us throughout the entir.",
          author: "Michael Brown"
        }
      ];
  
      return { testimonials, SwiperAutoplay, SwiperPagination, SwiperNavigation };
    }
  };
  </script>
  
  <style scoped>
  /* Section Styling */
  .testimonial-section {
    padding: 40px;
    background: #f9f9f9;
    text-align: center;
  }
  
  /* Title Styling */
  .testimonial-section h1 {
    letter-spacing: 6px;
    line-height: 1.3;
    text-transform: uppercase;
    font-family: Montserrat, sans-serif;
    font-size: 29px;
    color: #000;
    font-weight: 400;
    margin-bottom: 30px;
  }
  
  /* Testimonial Card */
  .testimonial-card {
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  /* Logo Icon */
  .logo-icon {
    width: 80px;
    height: 80px;
    margin-bottom: 10px;
  }
  
  /* Testimonial Message */
  .message {
    font-style: italic;
    color: #000;
    text-align: center;
    margin-bottom: 21px;
    white-space: pre-line;
    font-size: 18px;
    font-style: italic;
    letter-spacing: 1px;
    line-height: 1.4;
    font-family: Arapey, serif;
  }
  
  /* Author Name */
  .author {
    font-weight: bold;
    margin-top: 10px;
    font-size: 14px;
    margin-bottom: 0;
    color: #000;
    letter-spacing: 2px;
    line-height: 1.5;
    text-transform: uppercase;
    font-weight: 400;
  }
  
  /* Button Container */
  .button-container {
    margin-top: 80px;
    display: flex;
    justify-content: center;
    margin-top: 18px;
  }
  
  /* View Testimonials Button */
  .button-container a {
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
    letter-spacing: 1.5px;
    line-height: 1;
    max-width: 100%;
    overflow: hidden;
    padding: 15px 30px;
    text-align: center;
    text-decoration: none;
    text-overflow: ellipsis;
    text-transform: uppercase;
    transition: all 0.2s;
    white-space: nowrap;
  }
  
  .button-container a:hover {
    color: #fff;
    background-color: #000;
  }
  
  /* Custom Navigation Buttons */
  .custom-navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  
  /* Previous & Next Buttons */
  .swiper-button-prev,
  .swiper-button-next {
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    color: #000;
    padding: 10px 20px;
    border: 2px solid #000;
    background: transparent;
    transition: all 0.3s;
  }
  
  .swiper-button-prev:hover,
  .swiper-button-next:hover {
    background: #000;
    color: #fff;
  }
  </style>
  