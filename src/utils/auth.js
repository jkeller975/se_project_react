export const BASE_URL = "https://register.nomoreparties.co";

export const register = (email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password, email }),
  })
    .then((res) => {
      if (res.status === 201) {
        debugger;
        return res.json();
      }
    })
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err));
};

export const login = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password, email }),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      localStorage.setItem("jwt", data.jwt);
      localStorage.setItem("email", email);
      return data;
    })
    .catch((err) => console.log(err));
};

export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      if (res.status === 201) {
        return res.json();
      }
    })
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err));
};
