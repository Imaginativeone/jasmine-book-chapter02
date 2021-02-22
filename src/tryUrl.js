function tryUrl(url, data, method='get') {
  return fetch(url, { 
    method: method, 
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data) || null 
  }).then(res => res.json())
}
