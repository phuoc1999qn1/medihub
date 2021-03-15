const counter = document.querySelectorAll('.num')
counter.forEach(counter => {
  let updateCount = () => {
    let target = counter.getAttribute('data-target')
    let count = +counter.innerText;
    let inc = target / 100
    if (count < target) {
      counter.innerText = Math.ceil(count + inc);
      setTimeout(updateCount, 10)
    } else {
      counter.innerText = target;
    }
  }
  window.addEventListener("scroll", () => {
    const scrollable = document.getElementById("resourses").offsetTop;
    const s = window.scrollY;
    if (s >= scrollable - 300) {
      updateCount();
    }
  })
})
