import './heading.css'
export default () => {
  const element = document.createElement('h2')
  element.textContent = 'Hello world we22bpack'
  element.classList.add('heading')
  element.addEventListener('click', () => {
    alert('Hello webpack')
  })
  return element
}