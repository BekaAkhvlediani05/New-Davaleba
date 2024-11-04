const data = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 1, name: 'Charlie' },
    { id: 3, name: 'David' },
    { id: 2, name: 'Eve' },
];


function duplicateId(arr) {
    const map = new Map();

    arr.forEach(item => {
        map.set(item.id, item);
    });

    return Array.from(map.values());
}

const result = duplicateId(data);
console.log(result);