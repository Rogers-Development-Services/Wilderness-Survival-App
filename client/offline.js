import localForage from "localforage";

const appDiv = document.getElementById('app');

gedDataFromApi().then((response) => {
    response.json().then((response) => {
        saveDataToDb(response);
    })
}).catch((err) => console.log(err))


function saveDataToDb (data) {
    localForage.setItem('user', data).then(() => {
        console.log('User has been accessed.');
    });

}

function getDataFromDb (key) {
    if (localForage.getItem(key)) return;
    return localForage.getItem(key);
}

getDataFromDb('user').then((response) => {
    console.log('here', response);
    appDiv.innerHTML = `<h1> ${ response.title } </h1>`
})

export default localForage;



