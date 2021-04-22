const hideHeader = (headerClass) => {
    const header = document.querySelector(`.${headerClass}`)
    let prevPYO = pageYOffset

    window.addEventListener('scroll', function() {
        let currPYO = pageYOffset

        if (currPYO > (prevPYO + 150)) {
            header.classList.add('animate__fadeOutUp', 'animate__faster')
            header.classList.remove('animate__fadeInDown', 'animate__faster')
            prevPYO = currPYO;
        }
        else if (currPYO < (prevPYO - 150)) {
            header.style.display = ' '
            header.classList.add('animate__fadeInDown', 'animate__faster')
            header.classList.remove('animate__fadeOutUp', 'animate__faster')
            prevPYO = currPYO;
        }

        if (pageYOffset > 900) {
            document.querySelector('.arrow-top').style.display = 'block';
        } else document.querySelector('.arrow-top').style.display = 'none';
    });
};

export default hideHeader