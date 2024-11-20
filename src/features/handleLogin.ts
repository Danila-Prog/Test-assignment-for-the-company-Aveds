import data from "../app/authentication/authentication.json";


export const handleLogin = (login: string, password: string) => {
  
  const user = data.find(
    (user) => user.username === login && user.password === password
  );
  
  if (user) {
    window.location.href = `/personal_account/${user.username}`;
    localStorage.setItem("name", user.name);
    localStorage.setItem("username", user.username);
    localStorage.setItem("password", user.password);
    return true
  }else{
    return false;
  }
};
