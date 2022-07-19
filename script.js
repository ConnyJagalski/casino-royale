let kontostand = 100;
    
document.querySelector("#kontostand").innerHTML = kontostand + "€";

function run() {
    const luckyNumber = Math.round(Math.random() * 5 + 1);
    document.querySelector("#win").innerHTML = luckyNumber;

    if (luckyNumber == 6) {
        kontostand = kontostand + 5;
        document.querySelector("#kontostand").innerHTML = kontostand + "€";
    }   else {
        kontostand = kontostand - 1;
        document.querySelector("#kontostand").innerHTML = kontostand + "€";
    };
};

function revert() {
    kontostand = 100;
    document.querySelector("#kontostand").innerHTML = kontostand + "€";
};