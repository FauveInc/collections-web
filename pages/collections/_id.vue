<template>
    <div>
        Collections ID page
        {{ $route.params.id }}
    </div>
</template>

<script>
export default {
    middleware: 'authenticated'
};
</script>
