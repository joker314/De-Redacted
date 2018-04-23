<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>

<span></span>
<div></div>

<input type="text">
<script>
let p = document.querySelector("span")
let o = document.querySelector("div")

let measure = text => {
  p.innerText = text;
  return p.getBoundingClientRect().width
}

// We shall, today, be trying to guess a name.
// It's "Ann".

let target = measure("Ann") // We know it's length

let chars = "abcdefghijklmnopqrstuvwxyz" // And we know it starts with a capital letter, and then has two lower case letters

chars = (chars + chars.toUpperCase()).split``

// We know the target is three letters long.

let out = []

let [a , b , c] = [26, 0, 0]

o.innerText = ""
function next() {
  if(measure(chars[a] + chars[b] + chars[c]) === target) {
    o.innerText += " " + chars[a] + chars[b] + chars[c] + " "
  }
  if(chars[a] + chars[b] + chars[c] === "Ann") {
  	o.innerText += " <<BOOM>> (" + target + ", " + measure(chars[a] + chars[b] + chars[c]) + ") "
  }
  c++
  if(c === 27) { c = 0; b++ }
  if(b === 27) { b = 0; a++ }
  if(a === chars.length) { return alert("exit"); }
  setTimeout(next, 0)
}
window.requestAnimationFrame(next)


// Observe that data is usually consistent!
// alert(measure("Ann") === measure("Ann"))
</script>

<style>
input[type="text"] {
  opacity: 0.2;
  border: solid 1px black;
}
span {
  left: 1000px;
}
span, input[type="text"] {
  font-family: "Segoe UI";
  position: absolute;
}
</style>
</body>
</html>
