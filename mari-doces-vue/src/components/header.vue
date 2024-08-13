<template>
        <nav class="bg-light-green navbar navbar-expand-sm nav">
            <div class="navbar-brand w-50 ms-3">
                <a href="index.html">
                    <img src="/src/assets/logo.png" alt="Logo da confeitaria Mari Doces" class="img-fluid logo">
                </a>
            </div>

            <button class="navbar-toggler collapsed me-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbar"
                aria-controls="navbar" aria-expanded="false">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="navbar-collapse collapse justify-content-end me-3 ms-3" id="navbar">
                <ul class="navbar-nav mb-2 mb-sm-0 text-center gap-3">
                    <li class="nav-item">
                        <a class="link-nav" aria-current="page" href="#inicio">Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a class="link-nav" href="#produtos">Produtos</a>
                    </li>
                    <li class="nav-item">
                        <a class="link-nav" href="#address">Endereço</a>
                    </li>
                    <li class="nav-item">
                        <a class="link-nav" href="#about_us">Quem somos?</a>
                    </li>
                </ul>
            </div>
        </nav>
</template>

<script>
    export default{
        name:'headerOfSite'
    }
</script>
        