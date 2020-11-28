import createAuth0Client from '@auth0/auth0-spa-js';

let auth0Client;

async function createClient() {
    return await createAuth0Client({
        domain: 'dev-qajxs-8o.us.auth0.com',
        client_id: 'HxkBw2D995h4Okr9JDCjo3uAEEz8BdD0'
    });
}

async function login() {
    await auth0Client.loginWithRedirect();
}

function logout() {
    auth0Client.logout();
}

async function handleRedirectCallback() {
    const isAuthenticated = await auth0Client.isAuthenticated();

    if (!isAuthenticated) {
        const query = window.location.search;
        if (query.includes("code=") && query.includes("state=")) {
            await auth0Client.handleRedirectCallback();
            window.history.replaceState({}, document.title, "/");
        }
    }
    await updateUI();
}

async function updateUI() {
    const isAuthenticated = await auth0Client.isAuthenticated();

    const btnLogin = document.getElementById("btn-login");
    const btnLogout = document.getElementById("btn-logout");

    btnLogin.addEventListener("click", login);
    btnLogout.addEventListener("click", logout);

    btnLogin.style.display = (isAuthenticated ? "none" : "block");
    btnLogout.style.display = (isAuthenticated ? "block" : "none");

    if (isAuthenticated) {
        const username = document.getElementById("username");
        const user = await auth0Client.getUser();
        
        username.innerText = user.name;
    }
}

window.addEventListener("load", async () => {
    auth0Client = await createClient();

    await handleRedirectCallback()
});
