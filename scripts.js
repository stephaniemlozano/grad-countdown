const gradutationDate = new Date('Nov 4, 2022 21:00:00').getTime()

const timeInterval = setInterval(function () {
  const today = new Date().getTime()
  const timeUntilGraduation = gradutationDate - today

  let days = Math.floor(timeUntilGraduation / (1000 * 60 * 60 * 24))
  let hours = Math.floor((timeUntilGraduation % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  let minutes = Math.floor((timeUntilGraduation % (1000 * 60 * 60)) / (1000 * 60))
  let seconds = Math.floor((timeUntilGraduation % (1000 * 60)) / 1000)

  document.getElementById('timer').innerHTML =
    `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`

  if (timeUntilGraduation < 0) {
    clearInterval(timeInterval)
    document.getElementById('timer').innerHTML =
      'Accomplishment Completed: CONGRATS!'
  }
}, 1000)
