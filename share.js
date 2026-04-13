document.addEventListener('DOMContentLoaded', () => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(document.title);

    const links = {
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
        twitter: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
        whatsapp: `https://api.whatsapp.com/send?text=${title}%20${url}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`
    };

    const container = document.querySelector('.share-buttons');
    if (container) {

        const lnk = container.querySelector('[aria-label*="LinkedIn"]');
        const twt = container.querySelector('[aria-label*="X"]');
        const wha = container.querySelector('[aria-label*="WhatsApp"]');
        const fb  = container.querySelector('[aria-label*="Facebook"]');

        if(lnk) lnk.href = links.linkedin;
        if(twt) twt.href = links.twitter;
        if(wha) wha.href = links.whatsapp;
        if(fb)  fb.href  = links.facebook;
    }
});