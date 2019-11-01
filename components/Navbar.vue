<template>
    <nav>
        <nuxt-link to="/" exact>App Name</nuxt-link>
        <div class="flex-grow"></div>
        <nuxt-link v-if="!isAuthenticated" to="/auth/login" class="nav-link"
            >Log in
        </nuxt-link>
        <nuxt-link v-else to="/auth/logout" class="nav-link">Log out</nuxt-link>
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
    @apply text-lg;
}
a {
    @apply px-1;
}
.nav-link.nuxt-link-active {
    color: #333;
    border-bottom: 1px solid #333;
    font-weight: 600;
}
</style>
