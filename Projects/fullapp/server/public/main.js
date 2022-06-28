const update = document.querySelector('#edit')

update.addEventListener('click', _ => {
    fetch('/tasks', {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
    })
})


const complete = document.querySelector('#complete')

complete.addEventListener('click', _ => {
    fetch('/tasks', {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
    })
})

// const delete = document.querySelector('#delete')

// update.addEventListener('click', _ => {
//   // Send PUT Request here
// })


    task_actions_el.appendChild(task_edit_el);
    task_actions_el.appendChild(task_delete_el);

    task_el.appendChild(task_actions_el);


    list_el.appendChild(task_el)

    input.value = "";

    update.addEventListener("click", () => {
        if(task_edit_el.innerText.toLowerCase() == "edit"){
            task_edit_el.innerHTML = "save";
            task_input_el.removeAttribute("readonly");
            task_input_el.focuse();
        }else {
            task_input_el.setAttribute("readonly","readonly");
            task_edit_el.innerText = "Edit";
        }
    });
task_delete_el.addEventListener("click", ()=> {
    list_el.removeChild(task_el);
});