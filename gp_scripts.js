// GPUtils
export { };

const HostawayPageHeaderClass = ".sc-46ce87e2-0";

function updateElementClass() {
    const el = document.querySelector(HostawayPageHeaderClass);
    if (!el) return;

    if (window.location.pathname === '/') {
        el.classList.add('processed', 'gp-home-page'); // add class
    } else {
        el.classList.remove('gp-home-page');           // remove class
    }
}

// run immediately
updateElementClass();

// watch for DOM changes
const observer = new MutationObserver(() => updateElementClass());
observer.observe(document.body, {childList: true, subtree: true});
