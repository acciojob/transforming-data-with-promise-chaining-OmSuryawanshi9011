const btn = document.getElementById('btn');
btn.addEventListener('click', startPromiseChain);

function startPromiseChain() {
    const inputNumber = Number(document.getElementById('ip').value);
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(inputNumber), 2000);
    })
    .then(result => {
        result *= 2;
        document.getElementById('output').innerText = `Result: ${result}`;
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(result), 1000);
        });
    })
    .then(result => {
        result -= 3;
        document.getElementById('output').innerText = `Result: ${result}`;
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(result), 1000);
        });
    })
    .then(result => {
        result /= 2;
        document.getElementById('output').innerText = `Result: ${result}`;
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(result), 1000);
        });
    })
    .then(result => {
        result += 10;
        document.getElementById('output').innerText = `Final Result: ${result}`;
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(result), 1000);
        });
    })
    .catch(error => {
        console.error('An error occurred:', error);
    });
}