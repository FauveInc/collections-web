<template>
    <div>
        Collections
        {{ collections }}
    </div>
</template>

<script>
export default {
    name: 'Collections',
    data: () => {
        return {
            collections: []
        };
    },
    async created() {
        const { data } = await this.$axios.get(
            'https://baintanqvd.execute-api.us-east-1.amazonaws.com/dev/hello'
        );
        this.collections = data;
    }
};
</script>
