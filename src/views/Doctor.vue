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
        },
        mounted() {
     const scriptPaths = [
       '/doctor/js/jquery.min.js',
       'doctor/js/popper.min.js',
       'doctor/js/bootstrap.min.js',
       'doctor/js/slick.js',
       'doctor/js/script.js',

   
        ];

        const loadScript = (path) => {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = path;
            script.onload = resolve;
            script.onerror = reject;
            document.body.appendChild(script);
        });
        };

        const loadScripts = async () => {
        try {
            await loadScript(scriptPaths[0]); // Load jQuery first
            for (let i = 1; i < scriptPaths.length; i++) {
            await loadScript(scriptPaths[i]);
            }
        } catch (error) {
            console.error('Failed to load scripts:', error);
        }
        };
        loadScripts();
    }
    }
</script>

<style>
          @import 'bootstrap/dist/css/bootstrap.min.css';
          @import '@/assets/doctor/css/style.css';
          
</style>