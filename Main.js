const btnEl = document.getElementById("btn");
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const containerEL = document.querySelector(".container");
const apiUrl = `https://api.quotable.io/random`;

async function QouteGenerator() {
  try {
    console.log(QouteGenerator);
    quoteEl.innerHTML = "Updating...";
    authorEl.innerText = "Updating...";
    btnEl.innerText = "Loding...";
    btnEl.style.color = "red";
    btnEl.ariaDisabled;
    const fatch = await fetch(apiUrl);
    const data = await fatch.json();
    quoteEl.innerHTML = data.content;
    authorEl.innerText = "~ " + data.author;
    btnEl.innerText = "Genrate Quote";
    btnEl.style.color = "green";
    console.log(data);
  } catch (error) {
    containerEL.innerHTML = `<strong>Internet Conection is not available. <br> <br> Please try again later. <br> <br> ❌</Strrong>`;
    containerEL.style.background = "red";
  }
}

btnEl.addEventListener("click", QouteGenerator);
