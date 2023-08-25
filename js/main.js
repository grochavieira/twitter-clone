function loadView(viewName) {
    const oldLinkElement = document.getElementById("dynamic-css");
    if (oldLinkElement) {
        oldLinkElement.parentNode.removeChild(oldLinkElement);
    }

    fetch(`/views/${viewName}.html`)
        .then(response => response.text())
        .then(html => {
            const app = document.getElementById("app");
            app.innerHTML = html;

            // Carregar CSS dinamicamente
            const linkElement = document.createElement("link");
            linkElement.id = "dynamic-css";
            linkElement.rel = "stylesheet";
            linkElement.href = `/css/${viewName}.css`;
            document.head.appendChild(linkElement);

            // Carregar JavaScript dinamicamente
            const scriptElement = document.createElement("script");
            scriptElement.id = "dynamic-js";  // Adicionar um ID para facilitar a remoção posterior
            scriptElement.src = `/js/controllers/${viewName}.js`;
            document.body.appendChild(scriptElement);
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

window.addEventListener("hashchange", router);
window.addEventListener("load", router);