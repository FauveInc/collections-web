<template>
    <div class="bg-gray-900">
        <header
            class="container mx-auto sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3"
        >
            <div class="flex items-center justify-between px-4 py-3 sm:p-0">
                <div class="text-white font-semibold text-xl">
                    <nuxt-link to="/">Collections</nuxt-link>
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
                        v-if="isAuthenticated"
                        to="/home"
                        class="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800"
                    >
                        Home
                    </nuxt-link>
                    <nuxt-link
                        v-if="!isAuthenticated"
                        to="/auth/login"
                        class="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800"
                    >
                        Log In
                    </nuxt-link>
                    <AccountDropdown
                        v-if="isAuthenticated"
                        class="hidden sm:block sm:ml-6"
                    />
                </div>
                <div
                    v-if="isAuthenticated"
                    class="px-4 py-5 border-t border-gray-800 sm:hidden"
                >
                    <div class="flex items-center">
                        <svg
                            viewBox="0 0 26 26"
                            class="fill-current text-white h-8 w-8"
                        >
                            <path
                                d="M25,13c0-6.6166992-5.3828125-12-12-12S1,6.3833008,1,13c0,3.383606,1.413208,6.4386597,3.673645,8.6222534  c0.0529175,0.0689087,0.1156006,0.1247559,0.1889648,0.171814C7.0038452,23.7769165,9.8582764,25,13,25  s5.9961548-1.2230835,8.1373901-3.2059326c0.0733643-0.0470581,0.1360474-0.1029053,0.1889648-0.171814  C23.586792,19.4386597,25,16.383606,25,13z M13,2.5c5.7900391,0,10.5,4.7104492,10.5,10.5  c0,2.4549561-0.8532715,4.7108154-2.2702637,6.5008545c-0.6505127-2.0978394-2.5076294-3.7401123-5.0281372-4.4957886  c1.3735962-0.9940796,2.2720337-2.6046143,2.2720337-4.4244995c0-3.0141602-2.4550781-5.4663086-5.4736328-5.4663086  s-5.4736328,2.4521484-5.4736328,5.4663086c0,1.8198853,0.8984375,3.4304199,2.2720337,4.4244995  c-2.5205078,0.7556763-4.3776245,2.3979492-5.0281372,4.4957886C3.3532715,17.7108154,2.5,15.4549561,2.5,13  C2.5,7.2104492,7.2099609,2.5,13,2.5z M9.0263672,10.5805664c0-2.1870117,1.7822266-3.9663086,3.9736328-3.9663086  s3.9736328,1.7792969,3.9736328,3.9663086S15.1914063,14.546875,13,14.546875S9.0263672,12.7675781,9.0263672,10.5805664z   M6.0307617,20.8319702C6.2562256,18.0820313,9.1723633,16.046875,13,16.046875s6.7437744,2.0351563,6.9692383,4.7850952  C18.1130981,22.4855347,15.6757202,23.5,13,23.5S7.8869019,22.4855347,6.0307617,20.8319702z"
                            />
                        </svg>
                    </div>
                    <div class="mt-4">
                        <nuxt-link
                            to="/account/settings"
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
                            to="/auth/logout"
                            class="mt-2 block text-gray-400 hover:text-white"
                        >
                            Log out
                        </nuxt-link>
                    </div>
                </div>
            </nav>
        </header>
    </div>
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
    watch: {
        $route(to, from) {
            this.isOpen = false;
        }
    }
};
</script>
