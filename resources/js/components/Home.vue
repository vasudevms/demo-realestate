<template>
    <div class="hero-area">
      <div class="banner">
   
   <video autoplay muted loop playsinline class="hero-video">
       <source src="https://res.cloudinary.com/luxuryp/video/upload/f_webm,vc_vp9,q_auto/v1658541429/yc0t7czur74emerqbxnl.webm" type="video/mp4">
       Your browser does not support the video tag.
   </video>
   <div class="video-overlay"></div>
</div>
<div class="hero-main-content">
<div class="container">
   <div class="row align-items-center">
       <div class="col-md-12">
         
        <div class="hero-content">
    <h1 id="animatedH1">OUTSTANDING</h1><br>
    <h2 id="animatedH2">RESULTS</h2>
    <p>Find your dream home with a trusted global advisor.</p>
    <div class="hero-btn">
        <a href="/" class="banner-btn">Search All Homes</a>
    </div>
</div>
       </div>
       </div>
   </div>
</div>
    </div>

    <section class="feature-section">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-12">
                            <h1> Unrivaled Expertise. Bespoke Service.</h1>
                          
                <div class="feature-card-wrapper">
    <a href="#" class="feature-card">
        <div class="image-container">
            <img :src="service1" alt="Exclusive Listing 1" class="img-fluid">
        </div>
        <div class="overlay">
            <h3>Exclusive Listings</h3>
        </div>
    </a>

    <a href="#" class="feature-card">
        <div class="image-container">
            <img :src="service2" alt="Exclusive Listing 2" class="img-fluid">
        </div>
        <div class="overlay">
            <h3>Your Home's Worth</h3>
        </div>
    </a>

    <a href="#" class="feature-card">
        <div class="image-container">
            <img :src="service3" alt="Exclusive Listing 3" class="img-fluid">
        </div>
        <div class="overlay">
            <h3>Market Trends</h3>
        </div>
    </a>
</div>
                        </div>
                    </div>
                </div>
            </section>


            <section class="content-section">

                    <div class="row align-items-center">
                       
                        <div class="col-md-6">
                            <div class="content">
                            <div class="content-text">
                                <h2 class="title">DAVID HATEF</h2>
                                <h3 class="sub-title">TRUSTED GLOBAL ADVISOR</h3>
                                <p>David started his real estate career in 2002, and later expanded his expertise by becoming a corporate lawyer. He has been recognized as one of the Best Real Estate Professionals in America by The Wall Street Journal and is in the top 1.5% of all agents. </p>
                                <div class="about-link">
                                <div class="button">
                                    <a href="about.html" class="btn button1">Learn More</a>
                                </div>
                                <div class="button">
                                    <a href="about.html" class="btn button2">Inquire Now</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div class="col-md-6">
                            <div class="content-img-group" style="min-height:589px;max-height:none;">
                                <img :src="aboutImage" class="img-fluid" alt="">
                            </div>
                    </div>

                </div>
            </section>

            <!-- ListingsSlider-section -->
            <ListingsSlider></ListingsSlider>

            <!-- testimonial-section -->
            <NeighbourhoodSlider></NeighbourhoodSlider>
<!-- testimonial-section -->
            <TestimonialSlider></TestimonialSlider>
                      

  </template>
  
  <script>
    import ListingsSlider from "./ListingsSlider.vue";
    import TestimonialSlider from "./TestimonialSlider.vue";
    import NeighbourhoodSlider from "./NeighbourhoodSlider.vue";


  export default {
    name: "Home",

    components: { TestimonialSlider, ListingsSlider,NeighbourhoodSlider },

    data() {
    return {
      heroImage: "/themes/public/assets/img/hero.jpg",
      service1: "/themes/public/assets/img/service1.jpg",
      service2: "/themes/public/assets/img/service2.jpg",
      service3: "/themes/public/assets/img/service3.jpg",
      aboutImage: "/themes/public/assets/img/about-client.webp",
      propertyImage: "/themes/public/assets/img/no-property-image.jpg",
    };
  }
  };
  

  const wordsH1 = ["OUTSTANDING", "EXCEPTIONAL", "AMAZING", "PERFECT"];
  const wordsH2 = ["RESULTS", "HOMES", "LUXURY", "DREAMS"];
  
  let index = 0;

  function changeText() {
    let h1 = document.getElementById("animatedH1");
    let h2 = document.getElementById("animatedH2");

    // H1 slides down slightly and fades out
    h1.style.transform = "translateY(10px)"; // Small downward movement
    h1.style.opacity = 0;

    setTimeout(() => {
      // Change H1 text and reset position
      h1.textContent = wordsH1[index];
      h1.style.transform = "translateY(-5px)"; // Move slightly up before settling

      setTimeout(() => {
        h1.style.transform = "translateY(0)";
        h1.style.opacity = 1;
      }, 50);
    }, 400); // Faster transition

    // H2 just fades out and in, no movement
    h2.style.opacity = 0;

    setTimeout(() => {
      h2.textContent = wordsH2[index];
      h2.style.opacity = 1;
    }, 200);

    index = (index + 1) % wordsH1.length;
  }

  setInterval(changeText, 4000); // Text changes every 4s (2s pause before changing)
</script>
  
<style>
.content-section {
    position: relative;
    overflow: hidden; /* Ensures image stays within bounds */
}

.content-img-group {
    position: relative;
    overflow: hidden; /* Prevents image overflow */
}

.content-img-group img {
    transition: transform 0.3s ease-in-out; /* Smooth zoom effect */
}

.content-section:hover .content-img-group img {
    transform: scale(1.1); /* Adjust zoom level */
}
</style>