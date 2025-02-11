<template>
    <div>
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
               <h1>OUTSTANDING</h1>
              <h2>RESULTS</h2>
               <p>Find your dream home with a trusted global advisor.</p>
               <div class="hero-btn">
                   <a href="{{ trans_url('about-us.html') }}" class="banner-btn">Search All Homes</a>
               </div>
           </div>
       </div>
       </div>
   </div>
</div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Home",
  };
  </script>
  