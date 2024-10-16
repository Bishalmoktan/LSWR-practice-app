export class AuthService {
  static getToken() {
    return localStorage.getItem("jwt_token");
  }

  static setToken(token: string) {
    localStorage.setItem("jwt_token", token);
  }

  static removeToken() {
    localStorage.removeItem("jwt_token");
  }

  static isAuthenticated() {
    const token = this.getToken();
    if (!token) return false;

    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      return payload.exp > Date.now() / 1000;
    } catch {
      return false;
    }
  }
}
