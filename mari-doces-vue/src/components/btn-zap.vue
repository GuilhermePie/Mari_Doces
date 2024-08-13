<template>
<a :href="'https://api.whatsapp.com/send?phone=85997650507&text=' + msg" target="_blank" class="btn btn-outline-success p-2 w-100">
    FAÇA SEU PEDIDO
  </a>
</template>
<script>
  export default {
    name:"btnZap",
    props:{
      msg: String
    }
  }

</script>


      

