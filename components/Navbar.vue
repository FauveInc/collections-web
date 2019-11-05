<template>
    <header
        class="bg-gray-900 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3"
    >
        <div class="flex items-center justify-between px-4 py-3 sm:p-0">
            <div class="text-white">
                <nuxt-link to="/">Finances</nuxt-link>
            </div>
            <div class="sm:hidden">
                <button
                    type="button"
                    class="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
                    @click="isOpen = !isOpen"
                >
                    <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
                        <path
                            v-if="isOpen"
                            fill-rule="evenodd"
                            d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                        />
                        <path
                            v-if="!isOpen"
                            fill-rule="evenodd"
                            d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                        />
                    </svg>
                </button>
            </div>
        </div>
        <nav :class="isOpen ? 'block' : 'hidden'" class="sm:block">
            <div class="px-2 pt-2 pb-4 sm:flex sm:p-0">
                <nuxt-link
                    to="#"
                    class="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800"
                >
                    List your property
                </nuxt-link>
                <nuxt-link
                    to="#"
                    class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2"
                >
                    Trips
                </nuxt-link>
                <nuxt-link
                    to="#"
                    class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2"
                >
                    Messages
                </nuxt-link>
                <AccountDropdown class="hidden sm:block sm:ml-6" />
            </div>
            <div class="px-4 py-5 border-t border-gray-800 sm:hidden">
                <div class="flex items-center">
                    <img
                        class="h-8 w-8 border-2 border-gray-600 rounded-full object-cover"
                        src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80"
                        alt="Your avatar"
                    />
                    <span class="ml-3 font-semibold text-white">Jane Doe</span>
                </div>
                <div class="mt-4">
                    <nuxt-link
                        to="#"
                        class="block text-gray-400 hover:text-white"
                    >
                        Account settings
                    </nuxt-link>
                    <nuxt-link
                        to="#"
                        class="mt-2 block text-gray-400 hover:text-white"
                    >
                        Support
                    </nuxt-link>
                    <nuxt-link
                        to="#"
                        class="mt-2 block text-gray-400 hover:text-white"
                    >
                        Sign out
                    </nuxt-link>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
import AccountDropdown from '~/components/AccountDropdown';

export default {
    name: 'Navbar',
    components: {
        AccountDropdown
    },
    data() {
        return {
            isOpen: false
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
