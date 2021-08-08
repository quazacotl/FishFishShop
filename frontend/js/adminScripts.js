const axios = require('axios');
// Авторизация админа

const adminAuthorization = () => {
    try {
        const form = document.querySelector('.admin-login');
        form.addEventListener('submit', async(e) => {
            e.preventDefault()
            await axios({
                method: 'post',
                url: '/admin',
                data: new FormData(form)
            })
            window.location.href = "/crm"
        });
    } catch (e) {
        console.log(e)
    }
}

export default adminAuthorization
