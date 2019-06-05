

const table = document.querySelector('table');


  function getData(url) {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', url, false);
    xhr.send();
    const ourData = JSON.parse(xhr.responseText);
    return ourData;
  }

const users = getData('https://jsonplaceholder.typicode.com/users');
const todoS = getData('https://jsonplaceholder.typicode.com/todos');


function createTable(todo, user) {
  return (
    ` <tr>
        <td>${todo.title}</td>
        <td><a href="mailto:${user.email}">${user.name}</a></td>
        <td>${todo.completed}</td>
      </tr>
      `
  )
}

for (let i = 0; i < todoS.length; i++) {
  let user = users.find(user => user.id === todoS[i].userId);
  let tr = createTable(todoS[i], user);
  table.insertAdjacentHTML('beforeend', tr);
}
