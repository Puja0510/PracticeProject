import React, { useState, useContext, createContext } from "react";

const LangContext = createContext(null)

export const LangProvider = ({children}) => {
    const [lang, setLang] = useState('en');

    const toggleLang = () => {
        setLang(prev => (prev === 'en' ? 'hi' : 'en'))
    }

    return (
        <LangContext.Provider value={{lang, toggleLang}}>
            {children}
        </LangContext.Provider>
    )
}

export const useLanguage = () => useContext(LangContext)