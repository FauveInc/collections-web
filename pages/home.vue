<template>
    <div>
        <h1>Home</h1>
        <Collections />
    </div>
</template>

<script>
import Collections from '~/components/Collections';

export default {
    name: 'Home',
    middleware: 'authenticated',
    components: {
        Collections
    }
};
</script>
