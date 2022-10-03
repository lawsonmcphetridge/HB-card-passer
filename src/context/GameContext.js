import { useState, createContext } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [selectedCard, setSelectedCard] = useState();
  const [from, setFrom] = useState('deck');
  return <UserContext.Provider value={{ selectedCard, setSelectedCard, from, setFrom }}>{children}</UserContext.Provider>;
};



export { UserProvider, UserContext };