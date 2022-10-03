import { useState, createContext } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [selectedCard, setSelectedCard] = useState();
  const [from, setFrom] = useState('deck');
  const [to, setTo] = useState(1);
  return <UserContext.Provider value={{ selectedCard, setSelectedCard, from, setFrom, to, setTo }}>{children}</UserContext.Provider>;
};



export { UserProvider, UserContext };