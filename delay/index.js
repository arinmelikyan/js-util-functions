const delay = (ms) => {
  return new Promise(resolve => {
    setTimeout(() => resolve('mock api data'), ms);
  });
}

async function apiCall(ms) {
  const data = await delay(ms);

  return data;
}

apiCall(500).then(result => console.log(result));

