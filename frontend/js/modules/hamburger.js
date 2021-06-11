const menu = document.querySelector('.header__side-menu'),
    menuItem = document.querySelectorAll('.header__side-menu-item'),
    hamburger = document.querySelector('.hamburger'),
    headerWrapper = document.querySelector('.header__wrapper');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger_active');
    menu.classList.toggle('header__side-menu_active');
    if (headerWrapper.style.paddingRight === '26px') {
        headerWrapper.style.paddingRight = ''
    } else headerWrapper.style.paddingRight = '26px'
    if (document.body.style.overflow === 'hidden') {
        document.body.style.overflow = ''
    } else document.body.style.overflow = 'hidden'
});

menuItem.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('header__side-menu_active');
        headerWrapper.style.paddingRight = ''
        if (document.body.style.overflow === 'hidden') {
            document.body.style.overflow = ''
        } else document.body.style.overflow = 'hidden'
    })
});