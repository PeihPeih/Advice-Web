document.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();
  const changeBtn = document.querySelector(".change");
  changeBtn.addEventListener("click", setAdvice);
});

function setAdvice() {
  const url = "https://api.adviceslip.com/advice";
  fetch(url)
    .then((data) => data.json())
    .then((advice) => showAdvice(advice.slip));
}

function showAdvice(advice) {
  const id = advice.id;
  const content = advice.advice;
  document.querySelector("#number").innerHTML = `#${id}`;
  document.querySelector(".content").innerHTML = `"${content}"`;
}
