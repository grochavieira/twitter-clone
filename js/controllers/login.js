const registerData = {
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
}

const loginData = {
    email: "",
    password: "",
}

function getInputData(element) {
    console.log(element);
    console.log(element.dataset.type);
    console.log('element.dataset.type =>', element.dataset.type);
    if (element.dataset.type === 'register') {
        registerData[element.dataset.name] = element.value;
    } else if (element.dataset.type === 'login') {
        loginData[element.dataset.name] = element.value;
    }
    
    if (element.value.length > 0) {
        console.log('tem algo dentro');
        element.parentNode.classList.add("active");
    } else {
        console.log('nada...');

        element.parentNode.classList.remove("active");
    }

    console.log('registerData =>', registerData);
    console.log('loginData =>', loginData);
}

function checkRegisterData() {
    const response = {
        isRegisterDataCorrect: true,
        message: ''
    }

    if ( !(!!registerData.name && !!registerData.email && !!registerData.password && !!registerData.confirmPassword) ) {
        response.isRegisterDataCorrect = false;
        response.message = 'Um ou mais campos não foram preenchidos!';
        return response;
    }

    if (!validateEmail(registerData.email)) {
        response.isRegisterDataCorrect = false;
        response.message = 'O campo email não é válido!';
        return response;
    }

    if (registerData.password !== registerData.confirmPassword) {
        response.isRegisterDataCorrect = false;
        response.message = 'Senha e confirmar senha não estão iguais!';
        return response;
    }

    return response;
}

function registerUser() {
    const check = checkRegisterData();
    if (check.isRegisterDataCorrect) {
        openToast({ message: 'Usuário cadastrado com sucesso!', status: 'success' });
        console.log('deu bom');
    } else {
        openToast({ title: 'Erro', message: check.message, status: 'warning' });
        console.log('deu ruim =>', check.message);
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