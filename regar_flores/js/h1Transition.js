function classChange(element, chosenClass, removedClass) {
    element.classList.remove(removedClass);
    element.classList.add(chosenClass);
}

window.onload = function() {
    classChange(document.querySelector('h1.hidden'), 'display', 'hidden');
}