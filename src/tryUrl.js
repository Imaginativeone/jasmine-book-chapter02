function tryUrl(url, data, method='get') {
  const f = fetch(url, { 
    method: method, 
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data) || null 
  }).then(res => res.json())
  return f;
}
