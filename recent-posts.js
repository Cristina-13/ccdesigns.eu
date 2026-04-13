document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('recent-posts-container');
    if (!container) return;

    const renderPosts = () => {
        const data = window.translations;
        if (!data) return;

        const lang = document.documentElement.lang || 'es';
        
        const currentFile = window.location.pathname.split('/').pop();

        const postsData = [
            { id: 'chatbots', num: 6, img: 'chatbot-empresa-2026.webp' },
            { id: 'aeo', num: 5, img: 'aeo-respuestas-ia.webp' },
            { id: 'color', num: 4, img: 'psicologia-color.webp' },
            { id: 'maintenance', num: 3, img: 'web-maintenance.webp' },
            { id: 'design', num: 2, img: 'web-design-barcelona.webp' },
            { id: 'seo', num: 1, img: 'seo-local-post.webp' },
        ];

        let htmlContent = '';
        let count = 0;

        postsData.forEach((post) => {
            const titleKey = `blog-post${post.num}-t`;
            const linkKey = `link-${post.id}-post`;
            
            const title = data[lang][titleKey];
            const link = data[lang][linkKey];
            
            if (title && link) {
                if (currentFile !== link && count < 5) {
                    const imgPath = lang === 'en' ? `../../assets/img/${post.img}` : `../assets/img/${post.img}`;
                    const finalLink = lang === 'en' ? `../${link}` : link;

                    htmlContent += `
                        <a href="${finalLink}" class="recent-post-item">
                            <img src="${imgPath}" alt="${title}" class="recent-post-thumb">
                            <div class="recent-post-info">
                                <h4>${title}</h4>
                            </div>
                        </a>`;
                    count++;
                }
            }
        });
        container.innerHTML = htmlContent;
    };

    const checkData = setInterval(() => {
        if (window.translations) {
            renderPosts();
            clearInterval(checkData);
        }
    }, 100);
});