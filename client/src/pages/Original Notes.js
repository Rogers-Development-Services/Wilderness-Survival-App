import React from "react";
import Login from "../components/Login"
import loginButton from "../components/Login";

const actionBtn = document.getElementById("action-button");
const makeNote = document.getElementById("make-new");
const clear = document.getElementById("clear-all");
const results = document.getElementById("results");
const status = document.getElementById("status");

function Notes() {
  return (
    clearTodos(),
    fetch("/all")
      .then(function (response) {
        if (response.status !== 200) {
          console.log("Looks like there was a problem. Status Code: " + response.status);
          return;
        }
        response.json().then(function (data) {
          newTodoSnippet(data);
        });
      })
      .catch(function (err) {
        console.log("Fetch Error :-S", err);
      })
  )
}

function newTodoSnippet(res) {
  for (var i = 0; i < res.length; i++) {
    const data_id = res[i]["_id"];
    const title = res[i]["title"];
    const todoList = document.getElementById("results");
    let snippet = `
      <p class="data-entry">
      <span class="dataTitle" data-id=${data_id}>${title}</span>
      <span onClick="delete" class="delete" data-id=${data_id}>x</span>;
      </p>`;
    todoList.insertAdjacentHTML("beforeend", snippet);
  }
}

function clearTodos() {
  const todoList = document.getElementById("results");
  todoList.innerHTML = "";
}

function resetTitleAndNote() {
  const note = document.getElementById("note");
  note.value = "";
  const title = document.getElementById("title");
  title.value = "";
}

function updateTitleAndNote(data) {
  const note = document.getElementById("note");
  note.value = data.note;
  const title = document.getElementById("title");
  title.value = data.title;
}

// getResults();

clear.addEventListener("click", function (e) {
  if (e.target.matches("#clear-all")) {
    let element = e.target;
    let data_id = element.getAttribute("data-id");
    fetch("/clearall", {
      method: "delete"
    })
      .then(function (response) {
        if (response.status !== 200) {
          console.log("Looks like there was a problem. Status Code: " + response.status);
          return;
        }
        clearTodos();
      })
      .catch(function (err) {
        console.log("Fetch Error :-S", err);
      });
  }
});

results.addEventListener("click", function (e) {
  if (e.target.matches(".delete")) {
    let element = e.target;
    let data_id = element.getAttribute("data-id");
    fetch("/delete/" + data_id, {
      method: "delete"
    })
      .then(function (response) {
        if (response.status !== 200) {
          console.log("Looks like there was a problem. Status Code: " + response.status);
          return;
        }
        element.parentNode.remove();
        resetTitleAndNote();
        const newButton = `
      <button id='make-new'>Submit</button>`;
        actionBtn.innerHTML = newButton;
      })
      .catch(function (err) {
        console.log("Fetch Error :-S", err);
      });
  } else if (e.target.matches(".dataTitle")) {
    let element = e.target;
    let data_id = element.getAttribute("data-id");
    status.innerText = "Editing";
    fetch("/find/" + data_id, { method: "get" })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        updateTitleAndNote(data);
        const newButton = `<button id='updater' data-id=${data_id}>Update</button>`;
        actionBtn.innerHTML = newButton;
      })
      .catch(function (err) {
        console.log("Fetch Error :-S", err);
      });
  }
});

actionBtn.addEventListener("click", function (e) {
  if (e.target.matches("#updater")) {
    let updateBtnEl = e.target;
    let data_id = updateBtnEl.getAttribute("data-id");
    const title = document.getElementById("title").value;
    const note = document.getElementById("note").value;
    fetch("/update/" + data_id, {
      method: "post",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title,
        note
      })
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        updateBtnEl.innerText = title;
        resetTitleAndNote();
        const newButton = "<button id='make-new'>Submit</button>";
        actionBtn.innerHTML = newButton;
        status.innerText = "Creating";
      })
      .catch(function (err) {
        console.log("Fetch Error :-S", err);
      });
  } else if (e.target.matches("#make-new")) {
    let element = e.target;
    let data_id = element.getAttribute("data-id");
    fetch("/submit", {
      method: "post",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: document.getElementById("title").value,
        note: document.getElementById("note").value,
        created: Date.now()
      })
    })
      .then(res => res.json())
      .then(res => newTodoSnippet([res]));
    resetTitleAndNote();
  }
});


export default Notes;