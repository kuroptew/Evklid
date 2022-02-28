document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.step__button').forEach(function(stepBtn) {
    stepBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path
      console.log(path)
      document.querySelectorAll('.step-content').forEach(function(stepContent) {
        console.log(stepContent)
        stepContent.classList.remove('step-content-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('step-content-active')
    })
  })
})