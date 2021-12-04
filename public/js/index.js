const h2 = document.getElementsByTagName('h2')[0]
const themeLink = document.getElementById('theme-link')

const getUrl = (str) => {
  return `http://localhost:3000/public/theme/${str}.css`
}

const getCurrentFileName = (reg, str) => {
  return reg.exec(str)[1]
}

const handler = () => {
  const DEFAULT = 'default'
  const DANGER = 'danger'
  const reg = /\/(\w+)\.css$/
  const current = getCurrentFileName(reg, themeLink.href)
  let theme = ''
  if (current === DEFAULT) {
    theme = getUrl(DANGER)
  } else {
    theme = getUrl(DEFAULT)
  }
  themeLink.href = theme
  // console.log(current)
}

h2.addEventListener('click', handler, false)

console.log('aaaa')
