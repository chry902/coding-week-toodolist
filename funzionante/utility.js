import { render } from "./script.js";

export function createCard(completed, priority, title, id) {
    return `
    <div class="tasks" id="${completed} ${priority}" >
        <div class="item  d-flex justify-content-between">
            <h6>${title}</h6>
            <p></p>
            <div class="delet_task" id="${id}">
                <i class="fas fa-times-circle fa-lg fa-fw"></i>
            </div>
        </div>
    </div
    `;
};



export function createPriority(data) {
    data.forEach(data => {
        data[`priority`] = Math.floor(Math.random() * 6);
    });
    render(data);
}


const importanti = document.querySelector("#appImportanti");
const routine = document.querySelector("#appRoutine");
const normali = document.querySelector("#appNormali");
const eseguiti = document.querySelector("#appEseguiti");
console.log(importanti);
const cont5 = document.querySelector("#cont5");
const cont3 = document.querySelector("#cont3");
const cont1 = document.querySelector("#cont1");
const contDel = document.querySelector("#contDel");

importanti.addEventListener("click", (event) => {
    event.preventDefault();

    cont5.classList.add("display");
    cont3.classList.remove("display");
    cont1.classList.remove("display");
    contDel.classList.remove("display");
});

routine.addEventListener("click", (event) => {
    event.preventDefault();

    cont5.classList.remove("display");
    cont3.classList.add("display");
    cont1.classList.remove("display");
    contDel.classList.remove("display");
});

normali.addEventListener("click", (event) => {
    event.preventDefault();

    cont5.classList.remove("display");
    cont1.classList.add("display");
    cont3.classList.remove("display");
    contDel.classList.remove("display");
});

eseguiti.addEventListener("click", (event) => {
    event.preventDefault();

    cont5.classList.remove("display");
    cont3.classList.remove("display");
    cont1.classList.remove("display");
    contDel.classList.add("display");
});

/* const importanti = document.querySelector("#appImportanti");
const cont3 = document.querySelector("#cont3");
importanti.addEventListener("click", (event) => {
    event.preventDefault();
    cont3.classList.add("display_none")
}); */