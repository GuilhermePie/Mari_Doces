
class Footer extends HTMLElement {
   #footerTemplate = document.createElement('template');


    constructor() {
      super();

      this.#footerTemplate.innerHTML = `
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
      <link rel="stylesheet" href="styles.css">

      <footer class="py-3 my-4 border-top">
          <ul class="nav justify-content-center border-bottom  pb-3 mb-3">
              <li class="nav-item"><a href="#inicio" class="nav-link px-2 text-muted"><i
                              class="fa-solid fa-house"></i> Inicio</a></li>
              <li class="nav-item"><a href="https://www.instagram.com/mari.docesconfeitaria/"
                          class="nav-link px-2 text-muted" target="_blank"><i class="fa-brands fa-instagram fa-lg"></i>
                          Instagram</a></li>
              <li class="nav-item"><a
                          href="https://api.whatsapp.com/send?phone=85997650507&text=Olá,+gostaria+de+ver+o+cardápio"
                          class="nav-link px-2 text-muted" target="_blank"><i class="fa-solid fa-phone"></i>
                          (85) 99765-0507</a></li>
              <li class="nav-item"><a
                          href="mailto:larissamaia0228@gmail.com?subject=Mais informações&body=Quero saber mais sobre o trabalho de vocês."
                          class="nav-link px-2 text-muted" target="_blank"><i class="fa-regular fa-envelope"></i>
                          Email</a></li>
          </ul>
          <p class="text-center text-muted">Copywrite © Guilherme Piedade 2024</p>
      </footer>` 
    }
  
    connectedCallback() {
      const shadow = this.attachShadow({ mode: 'closed' });
  
      shadow.appendChild(this.#footerTemplate.content);
    }

  }
  
  customElements.define('footer-content', Footer);