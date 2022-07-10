if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

// Whenever the user explicitly chooses light mode
localStorage.theme = 'light'

// Whenever the user explicitly chooses dark mode
localStorage.theme = 'dark'

// Whenever the user explicitly chooses to respect the OS preference
localStorage.removeItem('theme')

var count = new Date("Sep 5,2022 0:00:0").getTime()
var x = setInterval(function(){
  var now = new Date().getTime()
  var space = count - now;
  var days = Math.floor(space/ (1000 * 60 * 60 * 24));
  var hours = Math.floor((space % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((space % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((space % (1000 * 60)) / 1000);
  document.getElementById("hrs").innerHTML = hours
  if (space< 0) {
    clearInterval(x);
  }}, 1000);
  const btn = document.getElementById("menu-btn")

  const nav = document.getElementById("menu")
  btn.addEventListener("click",() => {
    btn.classList.toggle('open')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
  })