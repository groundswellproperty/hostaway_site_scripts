// GPUtils
export { };

const HostawayPageHeaderClass = ".sc-46ce87e2-0";
const SiteHeader = document.querySelector(HostawayPageHeaderClass);

function updateElementClass() {
    if (!SiteHeader) return;

    if (window.location.pathname === '/') {
        SiteHeader.classList.add('processed', 'gp-home-page'); // add class
    } else {
        SiteHeader.classList.remove('gp-home-page');           // remove class
    }
}

// run immediately
updateElementClass();

// watch for DOM changes
const observer = new MutationObserver(() => updateElementClass());
observer.observe(document.body, {childList: true, subtree: true});


// Transition the header out of the way on scroll
//
let lastScrollY = window.scrollY;
const scrollThreshold = 100; // header hides after scrolling 100px

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > scrollThreshold) {
    if (currentScrollY > lastScrollY) {
      // scrolling down past threshold
      SiteHeader.style.top = '-100px';
    } else {
      // scrolling up past threshold
      SiteHeader.style.top = '0';
    }
  } else {
    // near top of page, always show
    SiteHeader.style.top = '0';
  }

  lastScrollY = currentScrollY;
});
