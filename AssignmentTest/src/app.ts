interface User {
    id: number;
    name: string;
    email: string;
  }
  
  async function getUsers(): Promise<User[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    return users;
  }
  
  function renderTable(users: User[]) {
    const table = document.createElement('table');
    const header = table.createTHead();
    const headerRow = header.insertRow();
    headerRow.insertCell().innerText = 'ID';
    headerRow.insertCell().innerText = 'Name';
    headerRow.insertCell().innerText = 'Email';
  
    const tbody = table.createTBody();
    for (const user of users) {
      const row = tbody.insertRow();
      row.insertCell().innerText = user.id.toString();
      row.insertCell().innerText = user.name;
      row.insertCell().innerText = user.email;
    }
  
    document.body.appendChild(table);
  }
  
  async function main() {
    const users = await getUsers();
    renderTable(users);
  }
  
  main();
  