"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('https://jsonplaceholder.typicode.com/users');
        const users = yield response.json();
        return users;
    });
}
function renderTable(users) {
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
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const users = yield getUsers();
        renderTable(users);
    });
}
main();
//# sourceMappingURL=app.js.map