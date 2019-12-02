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
            testvar: null
        };
    },
    async mounted() {
        const json = await this.$axios.$get(
            `${process.env.API_BASE}/api/collections/user/${this.$store.state.user.sub}`
        );
        if (json.success) {
            this.testvar = json.message;
        }
    }
};
</script>
