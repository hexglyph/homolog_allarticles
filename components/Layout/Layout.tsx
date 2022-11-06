import Head from "next/head"
import Script from "next/script"
import Footer from "./Footer"
import Header from "./Header"

interface LayoutProps {
    children: any
}

const Layout = ({ children, ...props }: LayoutProps) => {
    return (
        <div id="app" className={`flex flex-col w-full h-full p-0 m-0`}>
            <Head>
                <title>Innovea - Teste</title>
                <meta name="description" content="Innovea - Teste" key="desc" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="keywords" content="Innovea" />
                <meta name="author" content="Daniel Niemietz Braz" />
                <meta name="robots" content="all" />
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />

                <meta property="og:title" content="Innovea - Teste" />
                <meta property="og:site_name" content="Innovea - Teste" />
                <meta property="og:url" content="https://" />
                <meta property="og:locale" content="en" />
                <meta property="og:description" content="Innovea - Teste" />
                <meta property="og:image" content="https://" />

                <link rel="canonical" href="https://" key="canonical" />
                <link rel="icon" href="favicon.ico" />
            </Head>

            <Header />

            <main className={`flex flex-col w-full h-full bg-gradient-to-br from-sky-900 to-slate-900`}>
                {children}
            </main>

            <Footer />
        </div>
    )
}

export default Layout