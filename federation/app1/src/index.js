import('./bootstrap')
    .then(({ default: initApp }) => {
    const el = document.querySelector('#root');
    if (el) {
        initApp(el)
    }
})