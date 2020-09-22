const ROOT_URL = "https://frebi.willandskill.eu/";

export default class {
  async register(
    firstName,
    lastName,
    email,
    password,
    organisationName,
    organisationKind
  ) {
    const payload = {
      firstName,
      lastName,
      email,
      password,
      organisationName,
      organisationKind,
    };

    const url = `${ROOT_URL}auth/users/`;

    return fetch(url, {
      method: "POST",
      headers: this.getPublicHeaders(),
      body: JSON.stringify(payload),
    });
  }

  setToken(token) {
    localStorage.setItem("BUSINESS_TOKEN", token);
  }

  getToken() {
    localStorage.getItem("BUSINESS_TOKEN");
  }

  getPublicHeaders() {
    return {
      "Content-Type": "application/json",
    };
  }

  getPrivateHeaders() {
    return {
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.getToken()}`,
    };
  }
}
