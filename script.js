import { createCard, createPriority } from "./utility.js";
const q = (selector) => document.querySelector(selector);
const qAll = (selector) => document.querySelectorAll(selector);
const URL = "https://jsonplaceholder.typicode.com/todos";

export const render = (newData = []) => {

    /******************************************************* PRIORITY 5 */

    let priority5 = newData.filter(index =>
        index.priority >= 4 &&
        index.completed === true);
    const arrPriority5 = priority5.map((item, index) =>
        createCard(item.completed, item.priority, item.title, item.id)
    ).join("")
    q("#priority4_5").innerHTML = arrPriority5;
    console.log("priority4-5", priority5);
    /************************************************ PRIORITY 3 */

    let priority3 = newData.filter(index =>
        index.priority >= 2 &&
        index.priority <= 3 &&
        index.completed === true);
    let arrPriority3 = priority3.map((item, index) =>
        createCard(item.completed, item.priority, item.title, item.id)
    ).join("")

    q("#priority2_3").innerHTML = arrPriority3;
    console.log("priority2-3", priority3);


    /************************************************* PRIORITY 1 */

    let priority1 = newData.filter(index =>
        index.priority <= 1 &&
        index.completed === true);
    const arrPriority1 = priority1.map((item, index) =>
        createCard(item.completed, item.priority, item.title, item.id)
    ).join("")
    q("#priority0_1").innerHTML = arrPriority1;
    console.log("priority0-1", priority1);
    /************************************************* APP TERMINATI */

    let priorityDel = newData.filter(index => index.completed == false);
    const arrPriorityDel = priorityDel.map((item, index) =>
        createCard(item.completed, item.priority, item.title, item.id)
    ).join("")

    q("#priority_eseguiti").innerHTML = arrPriorityDel;
    console.log("appEseguiti", priorityDel);

    /************************************************* FUNZIONE CANCELLA */
    const buttons = document.querySelectorAll(".delet_task");
    buttons.forEach(button => button.addEventListener("click", () => {
        const id = parseInt(button.id);
        const index = newData.findIndex(item => item.id === id)
        console.log(newData[index]);
        newData[index].completed = false;
        render(newData)
        console.log(newData[index]);
    }))

};



const getData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    createPriority(data)

};
getData()