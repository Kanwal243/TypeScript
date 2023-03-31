type User = {
    name: string;
    id: number;
};

// Generics
// const promiseFunc = (): Promise<User> => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve({
//                 name: "Ishaq",
//                 id: 123
//             });
//         }, 2000);
//     });
// }

// promiseFunc()
//     .then((data) => {
//         console.log(data.name);
//     });

function merge<T extends object, U extends object>(objA: T, objB: U) {
    return {...objA, ...objB};
}

const merged = merge({person: "Ishaq"}, {id:123});
console.log(merged.person);