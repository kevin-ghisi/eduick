import { createContext, useContext, useState } from 'react';

import { LoginModal } from '../components/Landing/LoginModal'

const AppContext = createContext();

export function AppWrapper({ children }) {
    const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false)
    const [isOpen, setIsOpen] = useState(false);

    function openLogin() {
        setIsLevelUpModalOpen(true)
    }

    function closeLogin() {
        setIsLevelUpModalOpen(false)
    }

    const toggle = () => setIsOpen(!isOpen)

    return (
        <AppContext.Provider value={{
            openLogin,
            closeLogin,
            isOpen,
            toggle
        }}>
            {children}
            {isLevelUpModalOpen && <LoginModal />}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}
