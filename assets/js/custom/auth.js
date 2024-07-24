// const base_url_auth = 'http://127.0.0.1:8000'
const base_url_auth = 'https://sircroco.pythonanywhere.com'
// Connexion
async function login(telephone, password) {
    const response = await fetch(`${base_url_auth}/login-token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ telephone, password })
    });
  
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Erreur lors de la connexion');
    }
  }
  
  // Inscription
  async function register(telephone,nom, password) {
    // const response = await fetch('/api/register/', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({ telephone, password })
    // });

    const response = await fetch(`${base_url_auth}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ telephone, nom, password })
    });
  
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      const errors = await response.json();
      throw new Error(JSON.stringify(errors));
    }
  }

//   // Connexion

  
//   // Inscription
//   try {
//     const { token, user_id, telephone } = await register('0687654321', 'unAutreMotDePasse');
//     // Stocker le token pour les prochaines requêtes
//     localStorage.setItem('authToken', token);
//   } catch (error) {
//     console.error(error);
//   }