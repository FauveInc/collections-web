<template>
    <div>
        <navbar />
        <div class="container mx-auto mt-5 px-4">
            <nuxt />
        </div>
    </div>
</template>

<script>
import Navbar from '~/components/Navbar';

export default {
    components: {
        Navbar
    }
};
</script>
