import { useState } from "react";
import { useContext } from "react";

const UserContext = useContext();

const UserProvider = ({ children }) => {
    const [selectedCard, setSelectedCard] = useState()

    return <UserContext.Provider value={{ selectedCard, setSelectedCard }}>{children}</UserContext.Provider>
}
export { UserProvider, UserContext };