class Carousel extends HTMLElement {
  
    // #CarouselTemplate = document.createElement('template');
      
    constructor() {
        super();

      }
    
      connectedCallback() {
        const id = this.dataset.id;
        const images = this.dataset.imgUrl;
        const imageAlt = this.dataset.imgAlt;

        const imageAltArr = imageAlt.split(',');
        const imagesArr = images.split(',');

        this.innerHTML = `
        
        <div id="${id}" class="carousel slide">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#${id}" data-bs-slide-to="0" class="active"
                                aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#${id}" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#${id}" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#${id}" data-bs-slide-to="3"
                                aria-label="Slide 4"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="${imagesArr[0]}" alt="${imageAltArr[0]}" class="img-fluid">
                </div>
                <div class="carousel-item">
                    <img src="${imagesArr[1]}" alt="${imageAltArr[1]}" class="img-fluid">
                </div>
                <div class="carousel-item">
                    <img src="${imagesArr[2]}" alt="${imageAltArr[2]}" class="img-fluid">
                </div>
                <div class="carousel-item">
                    <img src="${imagesArr[3]}" alt="${imageAltArr[3]}" class="img-fluid">
                </div>
            </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#${id}" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#${id}" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
        </div>
        `;
        
        // const shadow = this.attachShadow({ mode: 'closed' });
        // shadow.appendChild(this.#CarouselTemplate.content);
      }
  
    }
    
    customElements.define('carousel-images', Carousel);
  