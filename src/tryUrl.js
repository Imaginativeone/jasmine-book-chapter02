function tryUrl(url, data, method='get') {

  // console.log('url', url);
  // console.log('data', data);
  // console.log('method', method);

  const f = fetch(url, { 
    method: method, 
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data) || null 
  }).then(res => res.json())

  // console.log('fetch', f);

  return f;

}
