<template>
  <div class="neighborhood-slider-section">
    <h1>Explore Neighborhoods</h1>

    <!-- Custom Previous & Next Buttons at Top-Right -->
    <div class="slider-controls">
      <ul>
        <li class="swiper-button-prev">Previous

        </li>
        <li class="swiper-button-next">Next</li>
      </ul>
      <!-- <div class="swiper-button-prev">Previous</div> -->
      
      <!-- <div class="swiper-button-next">Next</div> -->
    </div>

    <swiper
      :modules="[SwiperAutoplay, SwiperNavigation]"
      :slides-per-view="3"
      :space-between="20"
      :loop="true"
      :navigation="{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }"
      :autoplay="{ delay: 4000 }"
      :breakpoints="{
    0: { slidesPerView: 1 },   // Show 1 slide on mobile
    768: { slidesPerView: 3 }, // Show 2 slides from 768px and up
  }"
      class="neighborhood-slider"
    >
      <swiper-slide v-for="(city, index) in cities" :key="index">
        <div class="city-card">
          <div class="city-image-container">
            <img :src="city.image" :alt="city.name" class="city-image" />
            <div class="overlay"></div>
            <div class="city-info">
              <h2 class="city-name">{{ city.name }}</h2>
              <p class="city-description">{{ city.description }}</p>
              <a href="#" class="read-more">Read More</a>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>

    <div class="button-container">
      <a href="/neighbourhoods">VIEW ALL</a>
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
    const cities = [
      {
        name: "Yarrow Point",
        description: "The city that never sleeps, full of energy and iconic landmarks.",
        image: "https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85/https://media-production.lp-cdn.com/media/ivwppjy2inydegzbhmov",
      },
      {
        name: "Bremerton",
        description: "The entertainment capital with sunny beaches and Hollywood charm.",
        image: "https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85/https://media-production.lp-cdn.com/media/uegspjsgfgxtphqqutjc",
      },
      {
        name: "Lakemont",
        description: "A vibrant city known for its architecture, deep-dish pizza, and culture.",
        image: "https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85/https://media-production.lp-cdn.com/media/ubdpdszv2r8qi2zh1wcv",
      },
      {
        name: "Kirkland",
        description: "Home of the Golden Gate Bridge, rolling hills, and tech innovation.",
        image: "https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85/https://media-production.lp-cdn.com/media/npklmvlsejli1vkt7ruf",
      },
      {
        name: "Ballard",
        description: "Tropical paradise with stunning beaches and vibrant nightlife.",
        image: "https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85/https://media-production.lp-cdn.com/media/hve3m4u9ezwbtuc2dlez",
      }
    ];

    return { cities, SwiperAutoplay, SwiperNavigation };
  },
};
</script>

<style scoped>
/* Section Styling */
.neighborhood-slider-section {
  padding: 40px;
  background: #f9f9f9;
  position: relative;
}

.neighborhood-slider-section h1 {
  font-size: 29px;
  letter-spacing: 6px;
  text-transform: uppercase;
  font-weight: 400;
  font-family: "Montserrat", serif;
  color: #000;
  text-align: center;
  margin-bottom: 25px;
  line-height: 1.3;
}

/* Custom Navigation Buttons at Top-Right */
.slider-controls {
  position: absolute;
  top: 50px;
  right: 100px;
  display: flex;
  align-items: center;
  width: 120px;
  text-transform: uppercase;
  gap: 10px; /* Space between items */
}

/* Custom Previous & Next Buttons */
.swiper-button-prev,
.swiper-button-next {
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  color: #000;
  padding: 10px 15px;
  background: transparent;
  transition: all 0.3s;
}

.swiper-button-prev:hover,
.swiper-button-next:hover {
  color: #0873b9 !important;
}

/* Separator Line */
.separator {
  font-size: 14px;
  color: #000;
  padding: 0 10px;
}

/* Hide Default Swiper Arrows */
.swiper-button-prev::after,
.swiper-button-next::after {
  display: none;
}

/* City Card */
.city-card {
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
}

/* Image Container */
.city-image-container {
  position: relative;
  overflow: hidden;
}

/* City Image */
.city-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
}

/* Hover Zoom Effect */
.city-card:hover .city-image {
  transform: scale(1.1);
}

/* Overlay Effect */
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

/* Show Overlay on Hover */
.city-card:hover .overlay {
  opacity: 1;
}

/* City Info */
.city-info {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  width: 80%;
  transition: all 0.3s ease-in-out;
}

/* City Name */
.city-name {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 5px;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
}

/* Move Name Slightly Up on Hover */
.city-card:hover .city-name {
  transform: translateY(-30px);
}

/* City Description (Initially Hidden) */
.city-description {
  font-size: 14px;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

/* Show Description on Hover */
.city-card:hover .city-description {
  opacity: 1;
}

/* Read More Link */
.read-more {
  font-size: 14px;
  color: #fff;
  opacity: 0;
  text-decoration: underline;
  margin-top: 10px;
  display: inline-block;
  transition: opacity 0.3s ease-in-out;
}

/* Show Read More on Hover */
.city-card:hover .read-more {
  opacity: 1;
}

/* Button Container */
.button-container {
  margin-top: 80px;
  display: flex;
  justify-content: center;
  margin-top: 18px;
}

/* View All Button */
.button-container a {
  background-color: transparent;
  border-color: #000;
  color: #000;
  border: 2px solid;
  cursor: pointer;
  font-family: inherit;
  font-size: 12px;
  letter-spacing: 1.5px;
  padding: 15px 30px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.2s;
}

.button-container a:hover {
  color: #fff;
  background-color: #000;
}
</style>
