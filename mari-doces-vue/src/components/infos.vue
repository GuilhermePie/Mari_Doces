<template>
        <h3 class="text-green"><strong>{{ Title }}</strong></h3>
        <p class="text">{{ TextDesc }}</p>
        <div class="row mb-3">
            <div class="col-12 col-lg-12 mt-2">
                <btnZap msg="Olá+Gostaria+de+ver+o+cardápio"/>
            </div>
        </div>
</template>

<script>
import btnZap from './btn-zap.vue'

export default {
    name:'infosCard',
    components:{
      btnZap
    },
    props: {
        Title: String,
        TextDesc: String
    }
  }

</script>

        
