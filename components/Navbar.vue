<template>
    <nav>
        <nuxt-link to="/" exact>Home</nuxt-link>
        <div class="flex-grow"></div>
        <nuxt-link v-if="!isAuthenticated" to="/auth/login">Login</nuxt-link>
        <nuxt-link v-else to="/auth/logout">Logout</nuxt-link>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
    computed: {
        isAuthenticated() {
            return this.$store.getters.isAuthenticated;
        }
    }
};
</script>

<style scoped>
nav {
    @apply flex;
    @apply text-xl;
}
a {
    @apply px-1;
}
a.nuxt-link-active {
    color: #333;
    border-bottom: 1px solid #333;
    font-weight: 600;
}
</style>
