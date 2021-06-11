const axios = require('axios');
const form = document.querySelector('.admin-login');

form.addEventListener('submit', e => {
    e.preventDefault()
    axios({
        method: 'post',
        url: 'http://localhost:5000/admin',
        data: new FormData(form)
    })
        .then(data => sessionStorage.setItem('token', data.data.token))
        .then(() => location.reload())
        .catch(e => console.log(e));
});
