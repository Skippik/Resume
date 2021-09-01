const buttonEn = document.getElementById('En');
const buttonRu = document.getElementById('Ru');


buttonEn.addEventListener('click', function() {
    document.location.href = "../language/En.html";
})

buttonRu.addEventListener('click', function() {
    document.location.href = "../language/Ru.html";
})