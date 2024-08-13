<template>
        <div :id="''+idCarousel" class="carousel slide">
            <div class="carousel-indicators">
                <button type="button" :data-bs-target="'#'+idCarousel" data-bs-slide-to="0" class="active"
                                aria-current="true" aria-label="Slide 1"></button>
                <button type="button" :data-bs-target="'#'+idCarousel" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                <button type="button" :data-bs-target="'#'+idCarousel" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                <button type="button" :data-bs-target="'#'+idCarousel" data-bs-slide-to="3"
                                aria-label="Slide 4"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img :src="''+imgsUrl[0]" :alt="''+imgsAlt[0]" class="img-fluid">
                </div>
                <div class="carousel-item">
                    <img :src="''+imgsUrl[1]" :alt="''+imgsAlt[1]" class="img-fluid">
                </div>
                <div class="carousel-item">
                    <img :src="''+imgsUrl[2]" :alt="''+imgsAlt[2]"class="img-fluid">
                </div>
                <div class="carousel-item">
                    <img :src="''+imgsUrl[3]" :alt="''+imgsAlt[3]"class="img-fluid">
                </div>
            </div>
                <button class="carousel-control-prev" type="button" :data-bs-target="'#'+idCarousel" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" :data-bs-target="'#'+idCarousel" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
        </div>
</template>

<script>
    export default{
        name:"carouselImages",
        props:{
            idCarousel:String,
            imgsUrl:Array,
            imgsAlt:Array
        }
    }
</script>
        
        
  