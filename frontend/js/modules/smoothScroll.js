const smoothScroll = (bntSelector) => {
    const btns = document.querySelectorAll(`.${bntSelector}`);

    btns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault()
            const selector = btn.getAttribute('data-linkto')
            const elem = document.querySelector(`.${selector}`)
            elem.scrollIntoView({block: "start", behavior: "smooth"})
        });
    });

};

export default smoothScroll