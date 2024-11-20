export const handleLogOut = () => {
  localStorage.removeItem("name");
  localStorage.removeItem("username");
  localStorage.removeItem("password");

  window.location.href = "/";
};
