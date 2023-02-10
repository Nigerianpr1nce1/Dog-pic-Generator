const body = document.querySelector("body");
const dog = document.querySelector(".dog");
const btn = document.querySelector(".btn");
const box = document.querySelector(".box");
btn.addEventListener("click", function () {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((json) => {
      console.log(json.message);
      console.log(json.status);
      dog.innerHTML = `<img src ='${json.message}'>`;
    });
});
box.append(dog);
