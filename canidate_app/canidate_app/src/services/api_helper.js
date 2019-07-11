const baseUrl = 'http://localhost:3001'

export const loginUser = (loginData) => {
    const opts = {
        method: 'POST',
        body: JSON.stringify(loginData),
        headers: {
            'Content-Type': 'application/json'
        }
    };
    return fetch(`${baseUrl}/auth/login`, opts)
    .then(resp => resp.json())
}

export const registerUser = (registerData) => {
    const opts = {
        method: 'POST',
        body: JSON.stringify({user: registerData}),
        headers: {
            'Content-Type': 'application/json'
        }
    };
    return fetch(`${baseUrl}/users/`, opts)
    .then(resp => resp.json())
}

const createNewCanidate = (data) => {
    const opts = {
      method: 'POST',
      body: JSON.stringify({ canidate: data }),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    return fetch(`${baseUrl}/canidates`, opts)
      .then(resp => resp.json())
  }

  const readAllCanidates = () => {
    return fetch(`${baseUrl}/canidates`)
      .then(resp => resp.json())
  }

  const updateCanidate = (id, data) => {
    const opts = {
      method: 'PUT',
      body: JSON.stringify({ canidate: data }),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    return fetch(`${baseUrl}/canidates/${id}`, opts)
      .then(resp => resp.json())
  }

  const destroyCanidate = (id) => {
    const opts = {
      method: 'DELETE'
    }
    return fetch(`${baseUrl}/canidates/${id}`, opts)
  }
  
  export {
    createNewCanidate,
    readAllCanidates,
    updateCanidate,
    destroyCanidate
  }