const authToken = localStorage.getItem('authToken');
const actions = document.getElementById('pills-tab')
async function makeAuthorizedRequest(url, method = 'GET', data = null) {
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${authToken}`
  };

  const options = {
    method,
    headers
  };

  if (data) {
    options.body = JSON.stringify(data);
  }

  const response = await fetch(url, options);

  if (response.ok) {
    return await response.json();
  } else if (response.status = 401){
    window.location.href = 'login.html'
    console.log(authToken)

  }
  else {
    throw new Error(`Error ${response.status}: ${response.statusText}`);
  }
}