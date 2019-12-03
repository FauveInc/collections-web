<template>
    <div>
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
