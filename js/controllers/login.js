if (typeof singleton === 'undefined') {
    var singleton = new UserSingleton();
} 
console.log(singleton.getData('message'));
function InputDataAnimation(element) {
    singleton.setData(element.id, element.value);
    

    if (element.value.length > 0) {
        console.log('tem algo dentro');
        element.parentNode.classList.add("active");
    } else {
        console.log('nada...');

        element.parentNode.classList.remove("active");
    }
}

function toggleModal(id, action) {
    const registerModal = document.getElementById(id);
    if (action === "open") registerModal.style.display = 'flex';
    if (action === "close") registerModal.style.display = 'none';
}

function focusOnInput(element) {
    element.lastElementChild.focus();
}