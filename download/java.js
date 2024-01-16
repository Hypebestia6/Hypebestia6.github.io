/* zadanie 1
const liczba1 = parseInt(prompt("Podaj pierwszą liczbę: "));
const liczba2 = parseInt(prompt("Podaj drugą liczbę: "));

const dodawanie = liczba1 + liczba2;
const odejmowanie = liczba1 - liczba2;
const mnozenie = liczba1 * liczba2;
const dzielenie = liczba1 / liczba2;
const potegowanie = liczba1 ** liczba2;

console.log("Dodawanie - " + liczba1 + "+" + liczba2 + "=" + dodawanie);
console.log("Odejmowanie - " + liczba1 + "-" + liczba2 + "=" + odejmowanie);
console.log("Mnozenie - " + liczba1 + "*" + liczba2 + "=" + mnozenie);
console.log("Dzielenie - " + liczba1 + "/" + liczba2 + "=" + dzielenie);
console.log("Potegowanie - " + liczba1 + "**" + liczba2 + "=" + potegowanie);*/

/*zadanie 2
const dlugosc_podstawy = parseInt(prompt("Wprowadź długość podstawy: "));
const wysokosc = parseInt(prompt("Wprowadź wysokość trójkąta: "));
const pole_trojkata = (dlugosc_podstawy * wysokosc) / 2;

console.log("Pole tego trójkąta to: " + pole_trojkata); */

/* zadanie 3
const bok1 = parseInt(prompt("Wprowadź długość boku pierwszego: "));
const bok2 = parseInt(prompt("Wprowadź długość drugiego boku: "));
const pole = bok1 * bok2;
const obwod = bok1 + bok2;

console.log("Pole tego prostokąta to: " + pole);
console.log("Obwód tego prostokąta to: " + obwod); */

/* zadanie 4
const ocena1 = parseInt(prompt("Wprowadź pierwszą ocenę: "));
const ocena2 = parseInt(prompt("Wprowadź drugą ocenę: "));
const ocena3 = parseInt(prompt("Wprowadź trzecią ocenę: "));
const srednia_artmetyczna = (ocena1 + ocena2 + ocena3) / 3;

alert("Średnia ocen z matematyki to: " + srednia_artmetyczna); */

/* zadanie 5
const rezystancja1 = parseInt(prompt("Wprowadź pierwszą wartość rezystancji: "));
const rezystancja2 = parseInt(prompt("Wprowadź drugą wartość rezystancji: "));
const rezystancja3 = parseInt(prompt("Wprowadź trzecią wartość rezystancji: "));
const gora = rezystancja1 * rezystancja2 * rezystancja3;
const dol = rezystancja1 + rezystancja2 + rezystancja3;
const opor_zastepczy = gora / dol;

alert("Opór zastępczy tych oporników przy założeniu, że są one połączone równolegle wynosi: " + opor_zastepczy); */

/* zadanie 6
if (confirm("Czy weźmiesz udział w wycieczce szkolnej?")) {
    alert("Do zobaczenia w Toskanii!");
}
else {
    alert("Do zobaczenia w szkole!"); 
} */

/* zadanie 1
const liczba = parseInt(prompt("Wprowadź liczbę: "));
if (liczba % 2 == 0) {
    alert("Liczba jest parzysta");
}
else {
    alert("Liczba nie jest parzysta");
} */

/* zadanie 2
let figura = parseInt(prompt("Jaką figure chcesz wybrać? 1 - pole prostokąta, 2 - pole trójkąta"));
if (figura == 1) {
    const dlugosc1 = parseInt(prompt("Wprowadź pierwszą długość boku: "));
    const dlugosc2 = parseInt(prompt("Wprowadź durgą długość boku: "));
    const pole = dlugosc1 * dlugosc2
    alert("Pole prostokąta = " + pole);
}
else if (figura == 2) {
    const dlugosc_trojkata = parseInt(prompt("Wprowadź długość trójkąta: "));
    const wysokosc = parseInt(prompt("Wprowadź wysokość trójkąta: "));
    const pole_trojkata = (dlugosc_trojkata * wysokosc) / 2;
    alert("Pole trójkąta = " + pole_trojkata);
}
else {
    alert("Błąd!");
} */

/* zadanie 3
const kraniec1 = parseInt(prompt("Wprowadź początek przedziału: "));
const kraniec2 = parseInt(prompt("Wprowadź koniec przedziału: "));
const liczba = parseInt(prompt("Wprowadź liczbę: "));
if (liczba >= kraniec1 && liczba <= kraniec2) {
    alert("Liczba " + liczba + " znajduje się w przedziale " + kraniec1 + " - " + kraniec2);
}
else {
    alert("Liczba nie znajduje się wewnątrz podanego przedziału!")
} */

/* zadanie 4
const liczba1 = parseInt(prompt("Wprowadź pierwsza liczbę całkowitą: "));
const liczba2 = parseInt(prompt("Wprowadź drugą liczbę całkowitą: "));
if (liczba1 > liczba2) {
    alert(liczba1 + " > " + liczba2);
}
else if (liczba1 < liczba2) {
    alert(liczba1 + " < " + liczba2);
}
else if (liczba1 == liczba2) {
    alert(liczba1 + " = " + liczba2);
} */

/*zadanie 5
const bok1 = parseInt(prompt("Wprowadź długość pierwszego boku: "));
const bok2 = parseInt(prompt("Wprowadź długość drugiego boku: "));
const bok3 = parseInt(prompt("Wprowadź długość trzeciego boku: "));
if ((bok1 + bok2) > bok3) {
    alert("TAK")
}
else {
    alert("NIE")
} */

/*zadanie 7
const os_x = parseFloat(prompt("Wprowadź pierwsza współrzędną X: : "));
const os_y = parseFloat(prompt("Wprowadź drugą współrzędną Y: "));
if (os_x > 0 && os_y > 0) {
    alert("Punkt leży w pierwszej ćwiartce");
}
else if (os_x < 0 && os_y > 0) {
    alert("Punkt leży w drugiej ćwiartce");
}
else if (os_x < 0 && os_y < 0) {
    alert("Punkt leży w trzeciej ćwiartce");
}
else if (os_x > 0 && os_y < 0) {
    alert("Punkt leży w czwartej ćwiartce");
}
else if (os_y = 0 && os_x > 0 && os_x < 0) {
    alert("Punkt leży na osi x");
}
else if (os_x = 0 && os_y > 0 && os_y < 0) {
    alert("P > 0 && os_y < 0unkt leży na osi y");
} */

/* zadanie 8
const ocena = parseInt(prompt("Wprowadź ocene: "));
switch (ocena) {
    case 1:
        alert("Niedostateczny!");
        break;
    case 2:
        alert("Dopuszczający");
        break;
    case 3:
        alert("Dostateczny");
        break;
    case 4:
        alert("Dobry");

        break;
    case 5:
        alert("Bardzo dobry");
        break;
    case 6:
        alert("Celujący");
        break;
    default:
        alert("Błąd")
} */

/*
let poczatek = parseFloat(prompt("Wprowadź początek przedziału: "));
let koniec = parseFloat(prompt("Wprowadź koniec przedziału: "));
let losowanie = (Math.round(Math.random() * (koniec - poczatek) + poczatek));
alert(losowanie);

const liczba1 = parseFloat(prompt("Wprowadź pierwszą liczbę"));
if (liczba1 === losowanie) {
    alert("Brawo!");
}
else if (liczba1 > losowanie) {
    alert("Wylosowana liczba jest mniejsza");
} 
else if (liczba1 < losowanie) {
    alert("Wylosowana liczba jest większa");
}
const liczba2 = parseFloat(prompt("Wprowadź drugą liczbę"));
if (liczba2 === losowanie) {
    alert("Brawo!");
}
else if (liczba2 > losowanie) {
    alert("Wylosowana liczba jest mniejsza");
}
else if (liczba2 < losowanie) {
    alert("Wylosowana liczba jest większa");
}
let liczba3 = parseFloat(prompt("Wprowadź trzecią liczbę: "));
if (liczba3 === losowanie) {
    alert("Brawo!");
}
else {
    alert("Nie udało się :(. Wylosowana liczba to: " + losowanie);
} */

let liczba1 = parseInt(prompt("Wprowadź długość pierwszego boku: "));
let liczba2 = parseInt(prompt("Wprowadź długość drugiego boku: "));
let pole = liczba1*liczba2;
let obwod = liczba1 + liczba2;

alert("Pole to " + pole + ", obwód to " + obwod);