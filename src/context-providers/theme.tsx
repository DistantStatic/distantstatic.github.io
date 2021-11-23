import React,  {useState} from 'react'

export const ThemeContext = React.createContext<[boolean, ()=>void]>([
    true,
    ()=>{}
])

export function ThemeContextProvider({children}: {children: React.ReactNode}) {
    const [darkMode, setDarkMode] = useState(true)

    function toggleDarkMode() {
        setDarkMode(!darkMode)
    }

    return (
        <ThemeContext.Provider value={[darkMode, toggleDarkMode]}>
            {children}
        </ThemeContext.Provider>
    )
}