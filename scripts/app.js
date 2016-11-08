require.config({
    baseUrl: 'scripts/lib',
    paths: {
        app: '../main'
    },
    shim: {
        "purchase": ["credits","product"]
    }
});
requirejs(["app/main"]);