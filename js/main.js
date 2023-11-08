function loadView(viewName) {
    setLoading(true);

    const oldLinkElement = document.getElementById("dynamic-css");
    if (oldLinkElement) {
        oldLinkElement.parentNode.removeChild(oldLinkElement);
    }

    fetch(`./views/${viewName}.html`)
        .then(response => response.text())
        .then(html => {
            const app = document.getElementById("app");
            app.innerHTML = html;

            // Carregar CSS dinamicamente
            const linkElement = document.createElement("link");
            linkElement.id = "dynamic-css";
            linkElement.rel = "stylesheet";
            linkElement.href = `./css/${viewName}.css`;
            document.head.appendChild(linkElement);

            // Carregar JavaScript dinamicamente
            const scriptElement = document.createElement("script");
            scriptElement.id = "dynamic-js";  // Adicionar um ID para facilitar a remoção posterior
            scriptElement.src = `./js/controllers/${viewName}.js`;
            document.body.appendChild(scriptElement);
        }).finally(() => {
            setTimeout(() => {
                setLoading(false);
            },500)
        });
}

function router() {
    const hash = window.location.hash.substring(1);
    if (hash) {
        loadView(hash);
    } else {
        loadView("home");
    }
}

function setLoading(isLoading) {
    console.log('entrou aqui', isLoading);
    console.log(document.getElementById('loading'));
    if (isLoading) document.getElementById('loading').style.display = 'flex';
    else document.getElementById('loading').style.display = 'none';
}

window.addEventListener("hashchange", router);
window.addEventListener("load", router);

function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}

function openToast(data) {
    if (data.status) {
        if (data.status === 'success') document.getElementById('toast').style.borderBottomColor = '#52B788';
        if (data.status === 'warning') document.getElementById('toast').style.borderBottomColor = '#FADF7F';
        if (data.status === 'error') document.getElementById('toast').style.borderBottomColor = '#E71D36';
    }

    if (data.title) {
        document.getElementById('toast-title').innerText = data.title;
    } else {
        document.getElementById('toast-title').innerText = '';
    }

    if (data.message) {
        document.getElementById('toast-message').innerText = data.message;
    } else {
        document.getElementById('toast-message').innerText = '';
    }

    document.getElementById('toast').style.display = 'initial';

    setTimeout(() => {
        document.getElementById('toast').style.display = 'none';
    }, 5000);
}

function closeToast() {
    document.getElementById('toast').style.display = 'none';
}