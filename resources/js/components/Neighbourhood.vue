<template>
    <div>
        <!-- Hero Section -->
        <section class="hero-section d-flex align-items-center justify-content-center text-white text-center">
            <div class="overlay p-4 rounded">
                <div class="content">
                    <h1>Nashville Communities</h1>
                    <p class="mt-2">
                        Searching for Nashville real estate? David Hatef is an agent & realtor who finds property, land, houses & luxury homes for sale in Nashville, TN.
                    </p>
                </div>
            </div>
        </section>

        <!-- Main Heading -->
        <div class="neighbourhood-head text-center my-5">
            <h2>AREAS OF EXPERTISE</h2>
        </div>

        <!-- Neighbourhood Grid -->
        <div class="container">
            <div class="row g-0">
                <div v-for="(neighbourhood, index) in neighbourhoods" :key="index" class="col-md-6">
                    <a :href="neighbourhood.link" class="neighbourhood-item d-block position-relative">
                        <img :src="neighbourhood.image" class="img-fluid rounded" alt="Neighbourhood">

                        <!-- Overlay for Name, Description, and Button -->
                        <div class="overlay-text">
                            <h3 class="neighbourhood-title">{{ neighbourhood.name }}</h3>
                            <p class="description">{{ neighbourhood.description }}</p>
                            <a :href="neighbourhood.link" class="read-more">Read More</a>
                        </div>
                    </a>
                </div>
            </div>
        </div>
<div class="neighbourhood-home">
        <div class="container">
            <div class="row g-0">
                <div class="col-8">
                    <h3 class="search-home">
                        Searching for your Family's next home?
                    </h3>
                </div>
                <div class="col-4">
                   <div class="neighbourhood-seach">
                    <a href="#">BROWSE HOMES</a>
                   </div> 
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            neighbourhoods: [
                { 
                    name: 'GREEN HILLS', 
                    image: 'https://media-production.lp-cdn.com/media/jridkm3up79l1n17kzmu', 
                    link: '#', 
                    description: 'A beautiful community known for its upscale homes and vibrant shopping scene.'
                },
                { 
                    name: 'OAK HILL', 
                    image: 'https://media-production.lp-cdn.com/media/musgwrpzte8wevxklrv9', 
                    link: '#', 
                    description: 'A peaceful suburban area surrounded by lush greenery and spacious homes.'
                },
                { 
                    name: 'BELLE MEADE', 
                    image: 'https://media-production.lp-cdn.com/media/bv7u8naqyubsjo8wx3db', 
                    link: '#', 
                    description: 'A historic neighborhood known for its grand estates and country clubs.'
                },
                {
                    name: 'MUSIC ROW/MIDTOWN', 
                    image: 'https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85,fit=scale-down,width=960/https://media-production.lp-cdn.com/media/navmhaqa5tbmmkmgcjzf', 
                    link: '#',
                    description: 'A historic neighborhood known for its grand estates and country clubs.' },
                { 
                    name: 'FOREST HILLS', 
                    image: 'https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85,fit=scale-down,width=960/https://media-production.lp-cdn.com/media/qveclkvjc4leuu0drr8r', 
                    link: '#',
                    description: 'A historic neighborhood known for its grand estates and country clubs.' },
                { 
                    name: 'THE GULCH', 
                    image: 'https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85,fit=scale-down,width=960/https://media-production.lp-cdn.com/media/sgcitvqjljd92k8jnkxz', 
                    link: '#',
                    description: 'A historic neighborhood known for its grand estates and country clubs.' },
                { 
                    name: 'SYLVAN PARK', 
                    image: 'https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85,fit=scale-down,width=960/https://media-production.lp-cdn.com/media/wzdstywi7nxprodiy8u2', 
                    link: '#',
                    description: 'A historic neighborhood known for its grand estates and country clubs.' },
                { 
                    name: '12 SOUTH', 
                    image: 'https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85,fit=scale-down,width=960/https://media-production.lp-cdn.com/media/a36cnjg42t71xo2p1ygy', 
                    link: '#',
                    description: 'A historic neighborhood known for its grand estates and country clubs.' },
                { 
                    name: 'SOBRO/DOWNTOWN', 
                    image: 'https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85,fit=scale-down,width=960/https://media-production.lp-cdn.com/media/zynxy5s9et6jjelpgbbh', 
                    link: '#',
                    description: 'A historic neighborhood known for its grand estates and country clubs.' },
                { 
                    name: 'BELMONT/HILLSBORO', 
                    image: 'https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85,fit=scale-down,width=960/https://media-production.lp-cdn.com/media/evnyzoe90bjuoqhdwuic', 
                    link: '#',
                    description: 'A historic neighborhood known for its grand estates and country clubs.' },
                { 
                    name: 'FRANKLIN', 
                    image: 'https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85,fit=scale-down,width=960/https://media-production.lp-cdn.com/media/wmtkgoyctvqmldfxvzit', 
                    link: '#',
                    description: 'A historic neighborhood known for its grand estates and country clubs.' },
                { 
                    name: 'FRANKLIN', 
                    image: 'https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85,fit=scale-down,width=960/https://media-production.lp-cdn.com/media/wwde6olfpan5vxvuzcbz', 
                    link: '#',
                    description: 'A historic neighborhood known for its grand estates and country clubs.' }
            ]
        };
    }
};
</script>

<style scoped>
/* Hero Section */
.hero-section {
    width: 100%;
    height: 400px;
    background: url('http://media-production.lp-cdn.com/media/zdu8rk9u83khwo51zd0q') no-repeat center center;
    background-size: cover;
    position: relative;
}
.hero-section .content{
    height: 100%;
    align-content: center;
}
.hero-section .overlay {
    background: rgba(0, 0, 0, 0.4);
    padding: 20px;
    height: 100%;
    width: 100%;
    border-radius: 10px;
}

.hero-section .overlay .content h1 {
    font-size: 30px;
    letter-spacing: 4px;
    text-transform: uppercase;
    font-weight: 400;
    font-family: Montserrat, sans-serif;
}

.hero-section .overlay .content p {
    font-size: 20px;
    max-width: 956px;
    margin: 0 auto;
    font-style: italic;
    font-family: Arapey, serif;
}

/* Neighbourhood Grid */
.neighbourhood-head h2 {
    letter-spacing: 6px;
    font-size: 30px;
    font-weight: 400;
    color: #000;
    text-transform: uppercase;
    font-family: Montserrat, sans-serif;
}

/* Grid settings */
.neighbourhood-item {
    overflow: hidden;
    display: block;
    position: relative;
    border-radius: 0px;
}

.neighbourhood-item img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
}

/* Overlay Text */
.overlay-text {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    color: white;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 1;
    transition: opacity 0.5s cubic-bezier(0.23, 1, 0.32, 1);
    padding: 20px;
}
.overlay-text:hover {
 
    background: rgba(0, 0, 0, 0.6);

    opacity: 0;
 
}

/* Name - Initially Centered */
.neighbourhood-title {
    font-size: 24px;
    font-weight: bold;
    text-transform: uppercase;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 8px 12px;
    border-radius: 5px;
    transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
    opacity: 1;
}

/* Description - Initially Hidden */
.description {
    font-size: 16px;
    margin-top: 50px;
    opacity: 0;
    transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
    transform: translateY(20px);
}

/* Read More Button - Initially Hidden */
.read-more {
    display: inline-block;
    margin-top: 20px;
    padding: 8px 16px;
    color: white;
    text-decoration: none;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 600;
    border-radius: 5px;
    opacity: 0;
    transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
    transform: translateY(0);
}
.neighbourhood-item:hover .overlay-text{
    opacity: 1;
}
/* Hover Effects */
.neighbourhood-item:hover .overlay-text .neighbourhood-title {
    top: 15px;
    transform: translate(-50%, 0);
    opacity: 1;
}

.neighbourhood-item:hover .overlay-text .description {
    opacity: 1;
    transform: translateY(0);
}

/* Read More Button Moves from Center to Bottom */
.neighbourhood-item:hover .overlay-text .read-more {
    opacity: 1;
    transform: translateY(40px);
}

/* Image Scaling Effect */
.neighbourhood-item:hover img {
    transform: scale(1.05);
}
.neighbourhood-home{
    padding: 90px 0;
}

.neighbourhood-home h3{
    letter-spacing: 6px;
    line-height: 1.3;
    font-size: 30px;
    font-family: Montserrat,sans-serif;
    font-weight: 400;
    text-transform: uppercase;
    color: #000;
}
.neighbourhood-home a{
    
    background: transparent;
    border: 1px solid;
    display: inline-block;
    border-color: #000;
    color: #000;
    font-family: Montserrat,sans-serif;
    font-size: 14px;
    height: 52px;
    letter-spacing: .015em;
    min-width: 200px;
    padding: 15px 30px;
    text-align: center;
    text-decoration: none;
    text-overflow: ellipsis;
    text-transform: uppercase;
    transition: all .2s;
    vertical-align: middle;
    white-space: nowrap;
    font-size: 12px;
        height: 46px;
        line-height: 16px;
        padding-bottom: 14px;
        padding-top: 14px;
        width: auto;
}
.neighbourhood-home a:hover{
    background-color: #000;
    color: #fff;
}
.neighbourhood-home .neighbourhood-seach{
   float: right;
}

</style>
