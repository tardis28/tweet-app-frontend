import React, { useCallback, useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
  user: "",
});


const getTokenFromLocal = () => {
  const initialToken = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

 console.log({ token: initialToken });
 if(initialToken==null){

 }

  return { token: initialToken,  user };
};

export const AuthContextProvider = (props) => {
  const storedToken = getTokenFromLocal();
  let initialToken, initialUser;
  if (storedToken) {
    initialToken = storedToken.token;
    initialUser = storedToken.user;
  }
  const [token, setToken] = useState(initialToken);
  const [user, setUser] = useState(initialUser);
  var userIsLoggedIn = false;
  if(token===null || token ==='null'){
    userIsLoggedIn = false;
  }
  else{
    userIsLoggedIn=true
  }

  const logoutHandler = useCallback(() => {
    console.log("logOut");
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");

  }, []);
  const loginHandler = (token, userDetails) => {

    console.log("login");
    setToken(token);
    setUser(userDetails);

    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(userDetails));

  };


  console.log({
    token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  });
  return (
    <AuthContext.Provider
      value={{
        token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
        user,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return React.useContext(AuthContext);
};

export default AuthContext;
