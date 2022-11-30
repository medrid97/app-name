import { createContext, useState } from 'react';

const AuthContext = createContext({
  userList: [],
  register: () => {},
  login: () => {},
});

const AuthProvider = (props) => {
  const [userList, setUserList] = useState([]);
  const [card, setCard] = useState([]);

  const handleClick = (menuitem) =>
  {
    console.log(menuitem);
  }




  const register = (user) => {
    setUserList([...userList, user]);
  };
  const addcard = (c) => {
    setCard([...card, c]);
  };




  const login = ({ email, password }) => {
    const user = userList.find((user) => user.email === email);
    if (!user) return console.log('Verify Email');
    if (user.password !== password) return console.log('Verify password');
    console.log('Logged in succefully');
  };

  return <AuthContext.Provider value={{ userList,card, addcard, register, login }}>{props.children}</AuthContext.Provider>;
};

export { AuthContext };
export { AuthProvider };