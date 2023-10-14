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

</style>