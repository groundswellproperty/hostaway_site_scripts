const haHeaderClass = ".sc-46ce87e2-0";

function gpUpdateElementClass() {
    const el = document.querySelector(haHeaderClass);
    if (!el) return;

    if (window.location.pathname === '/') {
        el.classList.add('processed', 'gp-home-page'); // add class
    } else {
        el.classList.remove('gp-home-page');           // remove class
    }
}

// run immediately
gpUpdateElementClass();

// watch for DOM changes
const observer = new MutationObserver(() => gpUpdateElementClass());
observer.observe(document.body, { childList: true, subtree: true });
