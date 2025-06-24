const text = document.querySelector('.text');
const btn = document.querySelector('.btn');
const unorder = document.querySelector('.unorder');

const todos = [];

function renderTodos() {
    unorder.innerHTML = '';

    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.textContent = todo;
        li.style.marginTop = '10px';
        li.style.fontSize = '25px'
        li.style.listStyle = 'none'

        const removeButton = document.createElement('button');
        removeButton.innerText = 'Remove';
        removeButton.style.marginLeft = '10px';

        const checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.style.marginLeft = '20px';

        removeButton.addEventListener('click', () => {
            todos.splice(index, 1);
            renderTodos();
        });

        checkBox.addEventListener('click', () => {
            todos.splice(index, 1)
            renderTodos()
        })


        li.appendChild(removeButton);
        li.appendChild(checkBox);

        unorder.appendChild(li);
    });
}

btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (text.value.trim() !== '') {
        todos.push(text.value.trim());
        text.value = '';
        renderTodos();
    }
});

window.addEventListener('load', () => {
    renderTodos();
});
