const instaFeed = (items, itemsPerRow, imageSize, isDisplayCaption) => {
    new InstagramFeed({
        'username': 'fish_butchery',
        'container': document.getElementById("instagram-feed1"),
        'display_profile': false,
        'display_biography': true,
        'display_gallery': true,
        'display_captions': isDisplayCaption,
        'callback': null,
        'styling': true,
        'items': items,
        'items_per_row': itemsPerRow,
        'margin': 0,
        'lazy_load': true,
        'image_size': imageSize,
        'on_error': console.error
    });
}

function initInstaFeed() {
    if (window.innerWidth > '992') {
        instaFeed(10, 5, 320, true)
    } else if (window.innerWidth < '992' && window.innerWidth > '540') {
        instaFeed(8, 4, 240, false)
    } else if (window.innerWidth < '540') {
        instaFeed(4, 2, 240, false)
    }
}

initInstaFeed()

window.addEventListener('resize', () => {
    initInstaFeed()
});