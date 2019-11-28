<template>
    <div>
        <h1>Home</h1>
        <h2>{{ testvar }}</h2>
    </div>
</template>

<script>
export default {
    name: 'Home',
    middleware: 'authenticated',
    data() {
        return {
            testvar: process.env.API_BASE
        };
    }
};
</script>
