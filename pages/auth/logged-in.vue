<template>
    <p>Signing in...</p>
</template>

<script>
import { setTokens, checkSecret, extractInfoFromHash } from '~/utils/auth';
export default {
    mounted() {
        const { token, secret, apiToken } = extractInfoFromHash();
        if (!checkSecret(secret) || !token) {
            // error occured, for now redirect back to login
            this.$router.replace('/auth/login');
        }
        setTokens(token, apiToken);
        this.$router.replace('/home');
    }
};
</script>
