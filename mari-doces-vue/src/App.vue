<template>
  <headerOfSite />
  <main class="container">
    <section class="row pt-3 justify-content-center align-items-center" id="inicio">
      <div class="col-11 col-lg-6 pt-3">
        <p class="text">Sabores de Família</p>
        <h1 class="mb-3 title text-green"><strong>Comidas
            para
            comemorar cada momento. Na sua casa, ou na nossa
            casa.
          </strong></h1>
        <p class="text">
          Sonho de família, construído com os
          melhores
          ingredientes: talento, dedicação e muito amor.</p>
        <p class="text">
          Seja sempre bem-vindo a nossa cozinha.
        </p>
        <div class="row">
          <div class="col-12 col-lg-8 mt-2">
            <btnZap msg="Olá+Gostaria+de+ver+o+cardápio"/>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-6">
        <div class="row mt-2 box-image justify-content-center align-items-end">
          <div class="col-5 box-1 box-img box-img-small me-3 mb-1"></div>
          <div class="col-5 box-2 box-img box-img-large box-img-relative mb-1"></div>
        </div>
        <div class="row mt-2 box-image justify-content-center align-items-end">
          <div class="col-5 box-3 box-img box-img-large me-3"></div>
          <div class="col-5 box-4 box-img box-img-small"></div>
        </div>
      </div>
    </section>
    <div class="hr mt-5 mb-5"></div>
    <section class="container text-center bg-light-green" id="produtos">
      <div class="row justify-content-center">
        <div class="col-12">
          <h2 class="titulo-produtos mb-4 text-green"><strong>NOSSOS PRODUTOS</strong></h2>
        </div>
      </div>
      <div class="row justify-content-center align-items-center text-start mt-lg-4">
        <div class="col-lg-6 col-12 mb-3">
          <carouselImages idCarousel="carouselBolos"
            :imgsUrl="['/src/assets/bolo-de-morango-editado.jpg','/src/assets/bolo-de-chomorango-editado.jpg','/src/assets/bolo-de-limão.jpg','/src/assets/bolo-chocolate-aniversario-editado.jpg']"
            :imgsAlt="['bolo com morangos','bolo de chocolate com morangos','bolo de limão','bolo de chocolate para aniversario']" />
        </div>
          <div class="col-lg-4 col-12">
          <infosCard Title="BOLOS" TextDesc="Nossos doces são deliciosos, preparados artesanalmente e com muito carinho. As
              nossas receitas foram criadas pela própria D. Noélia, que segue realizando o controle de
              todos os
              produtos que saem da nossa confeitaria. Um pedaço de nossas tortas trazem mais felicidade ao
              seu
              dia." />
        </div>
      </div>
      <div class="row justify-content-center align-items-center text-start flex-lg-row-reverse mt-lg-5">
        <div class="col-lg-6 col-12 mb-3">
          <carouselImages Idcarousel="carouselDoces"
            :imgsUrl="['/src/assets/sobremesa-na-taça.jpg','/src/assets/sobremesa-bolo-naked.jpg','/src/assets/sobremesa-coco.jpg','/src/assets/sobremesa-oreo.jpg']"
            :imgsAlt="['sobremsa de morango em uma taça','bolo estilo naked','sobremesa de coco','sobremesa de oreo']" />
        </div>
        <div class="col-lg-4 col-12 text-lg-end">
          <infosCard Title="DOCES" TextDesc="Nossos doces são deliciosos, preparados artesanalmente e com muito carinho. As
              nossas receitas foram criadas pela própria D. Noélia, que segue realizando o controle de
              todos os
              produtos que saem da nossa confeitaria. Um pedaço de nossas tortas trazem mais felicidade ao
              seu
              dia." />
        </div>

      </div>
    </section>
    <div class="hr mt-5 mb-5"></div>
    <section class="container text-center" id="address">
      <div class="row justify-content-center">
        <div class="col-12">
          <h2 class="titulo-produtos mb-4 text-green"><strong>NOSSA LOJA</strong></h2>
          <p class="text text-start text-md-center">Escolha a nossa loja mais pertinho de você, convide a
            família e venha
            saborear
            nossas delícias.
            São 3 lojas espalhadas pelos principais cantos da cidade.</p>
        </div>
      </div>
      <div class="row align-items-center">
        <div class="col-lg-6 col-12 mb-1">
          <img class="img-fluid" src="/src/assets/foto-estabelecimento.jpg" alt="foto do estabelecimento">
        </div>
        <div class="col-lg-6 col-12 text-start mt-3 mb-3 align-items-center">
          <h3 class="text-green mb-3"><strong>PAUPINA</strong></h3>
          <p class="text"><i class="fa-solid fa-lg fa-phone icon"></i> (85) 99765-0507 (ligação ou whatsapp)
          </p>
          <a class="nav-link" href="https://maps.app.goo.gl/SJLef82ZFzzeHWs69" target="_blank">
            <p class="text"><i class="fa-solid fa-location-dot icon fa-lg"></i> Rua Xavier Chaves, 530.</p>
          </a>
          <div class="row">
            <div class="col-12 col-lg-8 mt-2">
              <btnZap msg="Olá+Gostaria+de+ver+o+cardápio"/>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="hr mt-5 mb-5"></div>
    <section class="container text-center" id="about_us">
      <div class="row justify-content-center">
        <div class="col-12">
          <h2 class="titulo-produtos mb-4 text-green"><strong>Quem somos?</strong></h2>
        </div>
      </div>
      <div class="row text-start">
        <div class="col-md-6 col-12">
          <p class="text">
            A história da confeitaria Mari Doces começa em um pequeno bairro na cidade de São Paulo, onde
            Mariana Silva, uma apaixonada por doces e confeitaria, decidiu transformar seu hobby em um
            negócio. Desde jovem, Mariana tinha um talento especial para criar delícias açucaradas que
            encantavam a família e os amigos. Sua cozinha era sempre preenchida com o aroma de bolos
            recém-assados, biscoitos crocantes e tortas irresistíveis.
          </p>
          <p class="text">
            Em 2010, após anos de aperfeiçoamento de suas receitas e encorajada pelo sucesso entre
            conhecidos, Mariana resolveu dar o grande passo e abrir sua própria confeitaria. Assim nasceu a
            Mari Doces, um espaço acolhedor e charmoso, com uma decoração inspirada nas tradicionais
            confeitarias europeias, mas com um toque brasileiro único.
          </p>
        </div>
        <div class="col-md-6 col-12">
          <p class="text">Desde o primeiro dia, a Mari Doces se destacou pela qualidade de seus produtos.
            Mariana fazia questão de usar apenas os melhores ingredientes, muitos deles orgânicos e locais,
            garantindo assim um sabor autêntico e irresistível. A vitrine da loja logo se tornou uma atração
            à parte, repleta de cupcakes coloridos, macarons delicados, brigadeiros gourmet e bolos
            artísticos que mais pareciam obras de arte.</p>
          <p class="text">
            O sucesso foi quase imediato. Os clientes se encantavam não só com os doces, mas também com o
            atendimento caloroso e personalizado de Mariana e sua equipe. Cada cliente era tratado como um
            amigo de longa data, e essa atenção aos detalhes fez com que a Mari Doces ganhasse uma base de
            clientes fiéis e entusiastas.
          </p>
        </div>
      </div>
    </section>
  </main>
  <div class="container">
    <footerOfSite />
  </div>
</template>

<script>
  import btnZap from './components/btn-zap.vue'
  import infosCard from './components/infos.vue'
  import headerOfSite from './components/header.vue'
  import footerOfSite from './components/footer.vue'
  import carouselImages from './components/carousel.vue'


  export default {
    name:'App',
    components:{
      btnZap,
      infosCard,
      headerOfSite,
      footerOfSite,
      carouselImages
    }
  }
</script>


