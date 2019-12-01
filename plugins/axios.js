export default function({ $axios }) {
    $axios.onRequest((config) => {
        const apiToken = window.localStorage.getItem('apiToken');
        if (apiToken) config.headers.Authorization = `Bearer ${apiToken}`;
        return config;
    });
}
