class Texts extends HTMLElement {
  
    #textsTemplate = document.createElement('template');
      
    constructor() {
        super();
  
        this.#textsTemplate.innerHTML = `
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
        <link rel="stylesheet" href="styles.css">
  
        <h3 class="text-green"><strong><slot name="title"></slot></strong></h3>
        <p class="text"><slot name="pText"></slot></p>
        <div class="row mb-3">
            <div class="col-12 col-lg-12 mt-2">
                <btn-zap>
                    <div slot="btnText" data-msg="Olá,+gostaria+de+ver+o+cardápio+de+doces">FAÇA SEU PEDIDO</div>
                </btn-zap>
            </div>
        </div>
        ` 
      }
    
      connectedCallback() {
        const shadow = this.attachShadow({ mode: 'closed' });
    
        shadow.appendChild(this.#textsTemplate.content);
      }
  
    }
    
    customElements.define('texts-infos', Texts);