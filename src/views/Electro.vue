<template>
    <div>
           <Top/>
           <Sec/>
           <Foot/>
    </div>
</template>
<script>
    import Top from '@/Electro/Top.vue';
    import Sec from '@/Electro/Sec.vue';
    import Foot from '@/Electro/Foot.vue';

    export default {
        name: 'Electro',
        components: {
            Top,
            Sec,
            Foot,
        }
    }
</script>
<style>
    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,700');
    @import 'slick-carousel/slick/slick.css';
    @import 'slick-carousel/slick/slick-theme.css';
    @import '@/assets/electro/css/nouislider.min.css';
    @import '@/assets/electro/css/style.css';
    @import 'bootstrap/dist/css/bootstrap.min.css';
</style>