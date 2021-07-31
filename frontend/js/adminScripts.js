const axios = require('axios');

// Авторизация админа
try {
    const form = document.querySelector('.admin-login');
    form.addEventListener('submit', e => {
        e.preventDefault()
        axios({
            method: 'post',
            url: '/admin',
            data: new FormData(form)
        })
            .then(data => sessionStorage.setItem('token', data.data.token))
            .then(() => location.reload())
            .catch(e => console.log(e));
    });
} catch (e) {
    console.log(e)
}

