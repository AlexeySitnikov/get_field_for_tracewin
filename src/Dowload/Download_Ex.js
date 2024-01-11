/* eslint-disable camelcase */
export function Download_Ex(data, filename) {
  const file = new Blob((data), { type: 'text/plain' })
  const a = document.createElement('a')
  const url = URL.createObjectURL(file)
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  setTimeout(() => {
    document.body.removeChild(a)
    window.URL.revokeObjectURL(url)
  }, 200)
}
