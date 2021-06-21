import { createContext, useContext, useState } from 'react';

import { LoginModal } from '../components/Landing/LoginModal'

const AppContext = createContext();

export function AppWrapper({ children }) {
    const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false)

    function openLogin() {
        setIsLevelUpModalOpen(true)
    }

    function closeLogin() {
        setIsLevelUpModalOpen(false)
    }

    return (
        <AppContext.Provider value={{
            openLogin,
            closeLogin
        }}>
            {children}
            {isLevelUpModalOpen && <LoginModal />}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}
