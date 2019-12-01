<template>
    <p>Logging out...</p>
</template>

<script>
export default {
    mounted() {
        const unsetTokens = require('~/utils/auth').unsetTokens;
        const logout = require('~/utils/lock').logout;
        unsetTokens();
        this.$axios.setToken(false);
        logout();
    }
};
</script>
