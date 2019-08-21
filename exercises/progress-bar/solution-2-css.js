function fillBar(seconds){
  const bar = document.querySelector(.bar);
  bar.width.style = "100%";
  bar.style.transition = `${seconds}s linear width`
}
