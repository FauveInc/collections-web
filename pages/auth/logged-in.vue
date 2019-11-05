<template>
    <p>Signing in...</p>
</template>

<script>
import { setToken, checkSecret, extractInfoFromHash } from '~/utils/auth';
export default {
    mounted() {
        const { token, secret } = extractInfoFromHash();
        if (!checkSecret(secret) || !token) {
            // error occured, for now redirect back to login
            this.$router.replace('/auth/login');
        }
        setToken(token);
        this.$router.replace('/dashboard');
    }
};
</script>
