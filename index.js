document.addEventListener("DOMContentLoaded", () => {
  console.log("The DOM has loaded");
  const p = document.querySelector('#text')
  p.textContent = 'This is really cool!'
});
