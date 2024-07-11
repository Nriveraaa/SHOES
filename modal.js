function openModal() {
    document.querySelector('.modal').style.display = 'block';
}

function closeModal() {
    document.querySelector('.modal').style.display = 'none';
}

document.querySelector('.modal-open').addEventListener('click', openModal);
document.querySelector('.modal-close').addEventListener('click', closeModal);
