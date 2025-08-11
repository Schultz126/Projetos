function flowerSelector() {
    const flor = document.querySelector('select#flowerSelection');
    const selectedFlower = flor.options[flor.selectedIndex].text;
    if(flor.value === '-1') {
        alert('Escolha uma flor');
        return;
    }
    localStorage.setItem("userFlower", selectedFlower);

    window.location.href = 'main.html';
}

document.querySelector('button#submitButton').addEventListener('click', flowerSelector);