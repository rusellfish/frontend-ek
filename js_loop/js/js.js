btn.addEventListener("click",fnc);
function fnc() {
    a1 = a.value;
    b1 = b.value;
    flaga = 0;
    flagb = 0;
    sum = 0;
    if (!(a1 >= 2)) {
        flaga = 1;
    }
    if (!(b1 >= 1)) {
        flagb = 1;
    }
    if (flaga && !flagb) {
        alert("Количество команд не может быть меньше 2");
    }
    if (!flaga && flagb) {
        alert("Количество кругов не может быть меньше 1");
    }
    if (flaga && flagb) {
        alert("Количество команд не может быть меньше 2, а количество кругов меньше 1");
    }
    if (!flaga && !flagb) {
        for (let i = (a1-1); i >= 1; i--) {
            sum += Number(i);
        }
    }
    answer.innerHTML = "Количество матчей: " + sum*b1;
}