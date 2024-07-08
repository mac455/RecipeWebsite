function redirectToPage() {
    window.location.href = 'recipes.html'; 
}


document.addEventListener('load', function () {
    const buttons = document.querySelectorAll('.redirect-button');
    buttons.forEach(button => {
        button.addEventListener('click', redirectToPage);
    });
});
