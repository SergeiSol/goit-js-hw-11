export default function renderGallery(images) {
    const markUp = images.map(image => {
        return `<a class="photo-card" href="${image.largeImageURL}">
                <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
                    <div class="info">
                        <p class="info-item">
                            <b>Likes</b><br/>${image.likes}
                        </p>
                        <p class="info-item">
                            <b>Views</b><br/>${image.views}
                        </p>
                        <p class="info-item">
                            <b>Comments</b><br/>${image.comments}
                        </p>
                        <p class="info-item">
                            <b>Downloads</b><br/>${image.downloads}
                        </p>
                    </div>
                </a>`
    })
        .join('');
    return markUp;
}