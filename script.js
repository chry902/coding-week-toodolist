
import { createCard, createPriority, createPriorityCard, } from "./utility.js";


const q = (selector) => document.querySelector(selector);
const qAll = (selector) => document.querySelectorAll(selector);


export const render = (priority) => {

    let arrPriority = priority.map((item, index) =>
        createCard(item.completed, item.priority, item.title, item.id))
    q("#priority").innerHTML = arrPriority.join("");


    const buttons = document.querySelectorAll(".delet_task");
    buttons.forEach(button => button.addEventListener("click", () => {
        const id = parseInt(button.id);
        const index = priority.findIndex(item => item.id === id)
        console.log(priority[index]);
        /* priority.splice(index, 1, ""); */
        priority[index].completed = false;

        createPriorityCard(priority)
        render(priority)
        console.log(priority[index]);

        location.reload()
    }));


};



const URL = "https://jsonplaceholder.typicode.com/todos";
const getData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(response, data);

    createPriority(data);

};


getData();

