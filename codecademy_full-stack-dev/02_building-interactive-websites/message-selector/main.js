


const fileUrl = 'codecademy_full-stack-dev\02_building-interactive-websites\message-selector\jokes.csv';
fetch(fileUrl)
    .then(response => response.text())
    .then(data => {
        const fileText = data;
    })
    .catch(error => console.error(''))

console.log(data);
