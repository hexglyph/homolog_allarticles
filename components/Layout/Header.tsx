//Header component

import Logo from "../Logo/Logo"
import Nav from "../Nav/Nav"

const HeaderComponent = () => {
    return (
        <header className={`flex w-full h-auto justify-start items-stretch py-2 px-16 bg-slate-900 border-b-4 border-slate-500`}>
            <h1 className="text-slate-50 font-semibold text-3xl">Innovea - Teste</h1>
        </header>
    )
}

export default HeaderComponent