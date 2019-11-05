<template>
    <nav
        class="text-lg flex items-center p-6 justify-between flex-wrap bg-teal-500"
    >
        <div class="flex items-center flex-shrink-0 text-white mr-6">
            <span class="font-semibold text-xl tracking-tight">
                <nuxt-link to="/" exact>App Name</nuxt-link>
            </span>
        </div>
        <div class="flex-grow"></div>
        <div class="block lg:hidden">
            <button
                class="flex items-center px-3 py-2 rounded border text-teal-200 border-teal-400 hover:text-white hover:border-white"
                @click="menuClick"
            >
                <svg
                    class="fill-current h-3 w-3"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
            </button>
        </div>
        <div
            v-show="showMenu"
            id="menu-items"
            class="w-full lg:block lg:flex lg:items-center lg:w-auto"
        >
            <div class="text-sm lg:flex-grow">
                <nuxt-link
                    v-if="!isAuthenticated"
                    class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                    to="/auth/login"
                >
                    Log in
                </nuxt-link>
                <nuxt-link
                    v-else
                    class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                    to="/auth/logout"
                >
                    Log out
                </nuxt-link>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return {
            showMenu: true
        };
    },
    computed: {
        isAuthenticated() {
            return this.$store.getters.isAuthenticated;
        }
    },
    methods: {
        menuClick() {
            this.showMenu = !this.showMenu;
        }
    }
};
</script>
