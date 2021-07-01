import { createContext, useContext, useState } from 'react';

import { LoginModal } from '../components/Landing/LoginModal'

const AppContext = createContext();

export function AppWrapper({ children }) {
    // Setting the states that needs to be shared with multiple components;
    const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false)
    const [isOpen, setIsOpen] = useState(false);

    //Open Login Function;
    function openLogin() {
        setIsLevelUpModalOpen(true)
    }

    //Close Login Function;
    function closeLogin() {
        setIsLevelUpModalOpen(false)
    }

    //Toggle mobile menu Function;
    const mobileToggle = () => setIsOpen(!isOpen)

    return (

        //Export the functions to the context;
        <AppContext.Provider value={{
            openLogin,
            closeLogin,
            isOpen,
            mobileToggle
        }}>
            {children}
            {isLevelUpModalOpen && <LoginModal />}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}
