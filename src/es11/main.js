const btn = document.getElementById('btnSubmit');
addEventListener('click', async function() {
    const module = await import('./module.js');
    console.log(module);
    module.hellos();
});