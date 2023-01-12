const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// Event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    console.log('👍', 'beforeinstallprompt', event);
    // window.deferredPrompt = event;
    // butInstall.classList.toggle('hidden', false);
    butInstall.style.visibility = 'visible';
    butInstall.textContent = 'Install';
});

// Click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    // const eventPrompt = window.deferredPrompt;
    // eventPrompt.prompt();

    // window.deferredPrompt = null;
    // butInstall.classList.toggle('hidden', true);
    butInstall.setAttribute('disabled', true);
    butInstall.textContent = 'Installed';
});

// Handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {

    console.log('Awesome', 'appinstalled', event);
});
