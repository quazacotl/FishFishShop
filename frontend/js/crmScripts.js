const axios = require('axios');
import adminAuthorization from './adminScripts'

const addItem = document.querySelector('.catalog__item_add');
const overlay = document.querySelector('.overlay');
const addForm = document.querySelector('.add-category-form');
const addFormInputs = document.querySelectorAll('input');
const modalConfirm = document.querySelector('.modal-confirm');
const noButton = document.querySelector('#no-button');
const categoryFileImage = document.querySelector('#category_img');
const messageBlock = document.querySelector('.message');
const modalConfirmYesBtn = document.querySelector('.modal-confirm__button_yes');
const reviewBtn = document.querySelector('.review_btn');
const catalogBtn = document.querySelector('.catalog_btn');
const ordersBtn = document.querySelector('.orders_btn');
let deleteCategoryBtns = document.querySelectorAll('.catalog__item_delete');
let catalogItems = document.querySelectorAll('.catalog__item');

adminAuthorization()


let deleteParams = {
    type: String,
    id: String,
    message: String
}

// Кнопки меню


reviewBtn.addEventListener('click', async () => {
    console.log('click');
    await axios.get('/admin')
})

catalogBtn.addEventListener('click', async (e) => {
    console.log('click');
    await axios.get('/admin/catalog')

})

ordersBtn.addEventListener('click', async () => {
    console.log('click');
    await axios.get('/admin/orders')
})

// Функции

// Закрытия модалок

const closeModals = overlay => {
    overlay.querySelectorAll("input").forEach(input => {
        input.value = ''
    })
    const fileName = overlay.querySelector('.category-filename')
    if (fileName) fileName.remove()
    overlay.style.display = 'none'
    overlay.innerHTML = ''
    document.body.style.overflow = '';
    confirm = null
}

// Показ сообщения

const showMessage = message => {
    messageBlock.innerText = message
    messageBlock.style.display = 'block'
    setTimeout(() => {
        messageBlock.style.display = 'none'
        messageBlock.innerText = ''
    }, 3000)
}


// Отрисовка категорий

const renderCategory = async () => {
    document.querySelectorAll('.catalog__link').forEach(item => {
        item.remove()
    })
    const categories = await axios('/crm/category/get-categories')
    categories.data.categories.forEach(category => {
        const categoryItem = document.createElement('a');
        categoryItem.classList.add("catalog__link")
        categoryItem.innerHTML = `
            <div class="catalog__item" id="${category._id}">
                <img src="./img/newCategory/${category.imagePath}" alt="${category.name}" class="catalog__item_img">
                <span class="catalog__item_title">${category.name}</span>
                <div class="catalog__item_delete">&times</div>
            </div>
        `
        addItem.insertAdjacentElement('beforebegin', categoryItem)
    });
    deleteCategoryBtns = document.querySelectorAll('.catalog__item_delete');
    catalogItems = document.querySelectorAll('.catalog__item');

    // Добавление события всплытия "удалить"

    catalogItems.forEach(item => {
        let deleteButton = item.querySelector('.catalog__item_delete');
        item.addEventListener('mouseenter', () => {
            deleteButton.classList.add('active_delete')
        });
        item.addEventListener('mouseleave', () => {
            deleteButton.classList.remove('active_delete')
        });
    })

    // Добавление события "удалить"

    deleteCategoryBtns.forEach(deleteButton => {
        deleteButton.addEventListener('click', () => {
            deleteParams.type = 'category'
            deleteParams.id = deleteButton.parentNode.id
            deleteParams.message = 'Категория удалена'
            showConfirmDialog()
        });
    })
};



// Удаление

const deleteSmth = async (type, id, message) => {
    try {
        const res = await axios(`/crm/${type}/${id}`, {
            method: 'delete',
        })
        closeModals(overlay)
        await renderCategory()
        showMessage(message)
        return res
    } catch (e) {
       return e
    }
}

// Показать окно подтверждения

const showConfirmDialog = async () => {
    document.body.style.overflow = 'hidden';
    overlay.style.display = 'grid';
    overlay.appendChild(modalConfirm);
    modalConfirm.style.display = 'flex';
}

// События
// Добавление категорий

addItem.addEventListener('click', () => {
    document.body.style.overflow = 'hidden';
    overlay.style.display = 'grid';
    overlay.appendChild(addForm);
    addForm.style.display = 'inline-block'
});

// Закрытие модалок

overlay.addEventListener('mousedown', e => {
    if (e.target === overlay
        || e.target === overlay.querySelector('.add-category-form__close')
        || e.target === noButton
    ) {
        closeModals(overlay)
    }
});

// Имя файла под кнопкой

categoryFileImage.addEventListener('change', () => {
    if (addForm.querySelector('.category-filename')) {
        addForm.querySelector('.category-filename').remove()
    }
    const fileName = document.createElement('div');
    fileName.style.marginTop = '20px'
    fileName.classList.add('category-filename')
    fileName.innerText = categoryFileImage.value.split('\\').pop()
    categoryFileImage.insertAdjacentElement('afterend', fileName)
});


// Создание категории

addForm.addEventListener('submit', async e => {
    e.preventDefault()
    if (addForm.querySelector('#category_name').value && addForm.querySelector('#category_img').value) {
        try {
            await axios({
                method: 'post',
                url: '/crm/category/create-category',
                data: new FormData(addForm)
            })
            closeModals(overlay)
            await renderCategory()
            showMessage('Создана новая категория')
        }
        catch (e) {
            console.log(e)
        }
    } else showMessage('Не все поля заполнены')
});

// Подтверждение удаления

modalConfirmYesBtn.addEventListener('click', async () => {
    await deleteSmth(deleteParams.type, deleteParams.id, deleteParams.message)
})


renderCategory()

