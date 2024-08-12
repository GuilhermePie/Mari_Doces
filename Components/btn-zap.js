class BtnZap extends HTMLElement {
  
  #btnTemplate = document.createElement('template');
    
  constructor() {
      super();

    }
  
    connectedCallback() {
      const shadow = this.attachShadow({ mode: 'closed' });

      const msg = this.dataset.msg || 'Olá,+gostaria+de+ver+o+cardápio';

      this.#btnTemplate.innerHTML = `
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">

      <a href="https://api.whatsapp.com/send?phone=85997650507&text=${msg}" target="_blank" class="btn btn-outline-success p-2 w-100">
        <slot name="btnText"></slot>
      </a>
      ` 
  
      shadow.appendChild(this.#btnTemplate.content);
    }

  }
  
  customElements.define('btn-zap', BtnZap);
