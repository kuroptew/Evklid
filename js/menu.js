document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#burger').addEventListener('click', function() {
    document.querySelector('#menu').classList.toggle('is-active')
  });
});

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#close').addEventListener('click', function() {
    document.querySelector('#menu').classList.remove('is-active')
  })
})