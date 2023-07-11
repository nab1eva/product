const LoginP = () => {
  const login = () => {
    localStorage.setItem("isAuth", "1");
    window.location = "/";
  };
  return (
    <div className="div">
      <button className="button" onClick={login}>Login</button>
    </div>
  );
};

export default LoginP;
