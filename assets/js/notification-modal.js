const notificationModal = document.getElementById('notification-modal');
const notificationModalClose = notificationModal.querySelector('.notification-modal__close');

notificationModalClose.addEventListener('click', () => {
    notificationModal.style.display = 'none';
});