<template>
    <div class="main-wrapper">
            <Headr/>
            <Sect/>
            <Footr/>
    </div>
</template>

<script>
    import Headr from '@/Doctor/Headr.vue';
    import Sect from '@/Doctor/Sect.vue';
    import Footr from '@/Doctor/Footr.vue';


    export default {
        name: 'Doctor',
        components: {
            Headr,
            Sect,
            Footr
        }
    }
</script>

<style>

</style>