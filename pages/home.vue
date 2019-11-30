<template>
    <div>
        <h1>Home</h1>
        <h2>{{ testvar }}</h2>
        <p>{{ APIBASE }}</p>
    </div>
</template>

<script>
export default {
    name: 'Home',
    middleware: 'authenticated',
    data() {
        return {
            testvar: null,
            APIBASE: procee.env.API_BASE
        };
    },
    async mounted() {
        const json = await this.$axios.$get(
            `${process.env.API_BASE}/api/collections/test`
        );
        if (json.success) {
            this.testvar = json.message;
        }
    }
};
</script>
