function showDetail(a, b, c) {
  let x = document.getElementById(a)
  let y = document.getElementById(b)
  let z = document.getElementById(c)
  if (x.style.display ==="none") {
    y.style.display = "none";
    z.style.display = "none";
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
