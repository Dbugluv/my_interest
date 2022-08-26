export const jumpPage = (routeUrl, {type = "open", origin = window.location.origin} = {}) => {
  const url = `${origin}${routeUrl}`
  if(type === 'replace') {
    window.location.replace(url)
  } else if(type === 'open'){
    window.open(url)
  } else if (type === 'push') {
    window.location.href = url
  }
}

