<template>
    <div>
        <table v-if="collections.length > 0" class="table-fixed w-full">
            <thead>
                <tr>
                    <th class="w-1/2">Name</th>
                    <th class="w-1/4">Type</th>
                    <th class="w-1/4">Visibility</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(collection, i) in collections" :key="i">
                    <td>
                        <nuxt-link :to="'/collections/' + collection.id">
                            {{ collection.name }}
                        </nuxt-link>
                    </td>
                    <td>{{ collection.type }}</td>
                    <td>{{ collection.visibility }}</td>
                </tr>
            </tbody>
        </table>
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
            `${process.env.API_BASE}/api/collections/user/${this.$store.state.user.sub}`
        );
        if (data.success) {
            this.collections = data.message;
        }
    }
};
</script>
