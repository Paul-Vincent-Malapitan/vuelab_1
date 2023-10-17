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
        },
        mounted() {
     const scriptPaths = [
       '/electro/js/jquery.min.js',
       '/electro/js/bootstrap.min.js',
       '/electro/js/slick.min.js',
       '/electro/js/nouislider.min.js',
       '/electro/js/jquery.zoom.min.js',
       '/electro/js/main.js',
   
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
    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,700');
    @import 'slick-carousel/slick/slick.css';
    @import 'nouislider/dist/nouislider.min.css';
    @import 'slick-carousel/slick/slick-theme.css';
    @import '@/assets/electro/css/style.css';
    @import 'bootstrap/dist/css/bootstrap.min.css';
</style>