const btn = document.querySelector(".btn");
const content_output = document.querySelector(".content_output ");
const cm = document.querySelector(".cm");
const kg = document.querySelector(".kg");
const wynik = document.querySelector(".wynik");
const result = document.getElementById("result");

btn.addEventListener("click", btnClick);

function btnClick() {
  if (parseFloat(cm.value) >= 100 && parseFloat(kg.value) >= 10) {
    content_output.classList.remove("hidden");
  } else {
    alert(
      "Minimalny wzrost musi być 100 cm oraz minimalna waga 10 kg dla prawidłowego wyniku."
    );
    content_output.classList.add("hidden");
  }
  if (parseFloat(cm.value) <= 300 && parseFloat(kg.value) <= 300) {
    content_output.classList.remove("hidden");
  } else {
    alert(
      "Maksymalny wzrost musi być 300 cm oraz maksymalna waga 300 kg dla prawidłowego wyniku."
    );
    content_output.classList.add("hidden");
  }
}

cm.addEventListener("click", cmClick);

function cmClick() {
  content_output.classList.add("hidden");
}

kg.addEventListener("click", kgClick);

function kgClick() {
  content_output.classList.add("hidden");
}
btn.addEventListener("click", () => {
  if (parseFloat(result.value) < 16) {
    wynik.innerHTML =
      "Interpretacja twojego wyniku: <strong>WYGŁODZENIE</strong>, jak ty żyjesz? Koniecznie musisz nabrać wagę!";
  } else if (
    parseFloat(result.value) >= 16 &&
    parseFloat(result.value) <= 16.99
  ) {
    wynik.innerHTML =
      "Interpretacja twojego wyniku: <strong>WYCHUDZENIE</strong>, koniecznie musisz nabrać wagę!";
  } else if (
    parseFloat(result.value) >= 17 &&
    parseFloat(result.value) <= 18.49
  ) {
    wynik.innerHTML =
      "Interpretacja twojego wyniku: <strong>NIEDOWAGA</strong>, należałoby nabrać wagę!";
  } else if (
    parseFloat(result.value) >= 18.5 &&
    parseFloat(result.value) <= 24.99
  ) {
    wynik.innerHTML =
      "Interpretacja twojego wyniku: <strong>OPTIMUM</strong>, z tobą wszystko w pożądku (^_^)";
  } else if (
    parseFloat(result.value) >= 25 &&
    parseFloat(result.value) <= 29.99
  ) {
    wynik.innerHTML =
      "Interpretacja twojego wyniku: <strong>NADWAGA</strong>, należałoby troche schudnąć (-_-)";
  } else if (
    parseFloat(result.value) >= 30 &&
    parseFloat(result.value) <= 34.99
  ) {
    wynik.innerHTML =
      "Interpretacja twojego wyniku: <strong>OTYŁOŚĆ 1st.</strong>, polecamy wykupienie abonamentu do fitnes klubu =)";
  } else if (
    parseFloat(result.value) >= 35 &&
    parseFloat(result.value) <= 39.99
  ) {
    wynik.innerHTML =
      "Interpretacja twojego wyniku: <strong>OTYŁOŚĆ 2st.</strong>, koniecznie musisz schudnąć!";
  } else if (parseFloat(result.value) >= 40) {
    wynik.innerHTML =
      "Interpretacja twojego wyniku: <strong>OTYŁOŚĆ 3st.</strong>, jak ty żyjesz? Koniecznie musisz schudnąć!";
  }
  result.innerHTML = parseFloat(result.value).toFixed(2);
});
