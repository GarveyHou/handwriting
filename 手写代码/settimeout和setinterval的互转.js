function mySetInterval(fn, delay) {
  let timer = null
  const interval = () => {
    fn()
    timer = setTimeout(interval, delay)
  }
  timer = setTimeout(interval, delay)

  return {
    cacel: () => {
      clearTimeout(timer)
    },
  }
}

function mySetTimeout(fn, delay) {
  const timer = setInterval(() => {
    fn()
    clearInterval(timer)
  }, delay)
}

function Interval(fn, delay) {
  let timer = null

  const interval = () => {
    fn()
    timer = setTimeout(interval, delay)
  }
  timer = setTimeout(interval, delay)

  return {
    cacel: () => {
      clearTimeout(timer)
    },
  }
}
