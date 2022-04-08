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

export function createCardDel(completed, priority, title, id) {
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

const q = (selector) => document.querySelector(selector);



export function createPriority(dataPriority) {
    dataPriority.forEach(dataPriority => {
        dataPriority[`priority`] = Math.floor(Math.random() * 6);
    });

    createPriorityCard(dataPriority)
    searchInput(dataPriority);
    ptrDEl(dataPriority);
};





function searchInput(data) {
    const searchInpt = document.querySelector("#search_priority")
    searchInpt.addEventListener("keyup", () => {
        const search = document.querySelector("#search_priority");
        const value = search.value;
        const arrFilter = data.filter((data) =>
            data.title.toLowerCase().includes(value.toLowerCase()));

        console.log("---->", arrFilter);
        render(arrFilter)

    });
};




export function createPriorityCard(data) {
    const q = (selector) => document.querySelector(selector);
    const importanti = document.querySelector("#appImportanti");
    const routine = document.querySelector("#appRoutine");
    const normali = document.querySelector("#appNormali");
    const eseguiti = document.querySelector("#appEseguiti");


    importanti.addEventListener("click", (event) => {
        event.preventDefault();
        q("#title_card").textContent = "AppIMPORTANTI";
        const priority5 = data.filter(index =>
            index.priority >= 4 &&
            index.completed === true);
        render(priority5);
        console.log("priority 5-->", priority5);
    });

    routine.addEventListener("click", (event) => {
        event.preventDefault();
        q("#title_card").textContent = "AppROUTINE";
        const priority3 = data.filter(index =>
            index.priority >= 2 &&
            index.priority <= 3 &&
            index.completed === true);
        render(priority3);
        console.log("priority 3-->", priority3);
    });

    normali.addEventListener("click", (event) => {
        event.preventDefault();
        q("#title_card").textContent = "AppNORMALI";
        const priority1 = data.filter(index =>
            index.priority <= 1 &&
            index.completed === true);

        render(priority1);
        console.log("priority 1-->", priority1);
    });

    const priorityDel = data.filter(index =>
        index.completed == false);
    const arrPriorityDell = priorityDel.map((item, index) =>
        createCardDel(item.completed, item.priority, item.title, item.id)).join("");
    q("#delContainer").innerHTML = arrPriorityDell;
    console.log("priority Delleted-->", priorityDel);
    render(arrPriorityDell);
};


/* export function ptrDEl(data) {





} */