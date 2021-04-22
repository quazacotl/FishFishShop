const changePicture = (pictureClass, origImgClass) => {
    const images = document.querySelectorAll(pictureClass)
    const origImages = document.querySelectorAll(origImgClass)

    images.forEach(image => {
        image.addEventListener('pointerenter', () => {
            let sourceHtml = image.querySelector('source').outerHTML
            if (sourceHtml.slice(-8) === '1.webp">') {
                image.querySelector('source').outerHTML = `${sourceHtml.slice(0, -8)}2.webp">`
            }
        });
    });

    origImages.forEach(image => {
        image.addEventListener('pointerenter', () => {
            let source = image.getAttribute('src')
            if (source.slice(-5) === '1.jpg') {
                image.setAttribute('src', `${source.slice(0, -5)}2.jpg`)
            }
        });
    });

    images.forEach(image => {
        image.addEventListener('pointerleave', () => {
            let sourceHtml = image.querySelector('source').outerHTML
            if (sourceHtml.slice(-8) === '2.webp">') {
                image.querySelector('source').outerHTML = `${sourceHtml.slice(0, -8)}1.webp">`
            }
        });
    });

    origImages.forEach(image => {
        image.addEventListener('pointerleave', () => {
            let source = image.getAttribute('src')
            if (source.slice(-5) === '2.jpg') {
                image.setAttribute('src', `${source.slice(0, -5)}1.jpg`)
            }
        });
    });
};

export default changePicture