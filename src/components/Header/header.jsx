import { CgUserList } from 'react-icons/cg'
import './header.css'

function Header() {
    return (
        <>
            <header>
                <nav class="navMenu">

                    <a href="/">
                        INICIO
                        <span class="underline"></span>
                    </a>
                    <a href="/Login">
                        LOGIN
                        <span class="underline"></span>
                    </a>
                    <a href="/Products">
                        produtos
                        <span class="underline"></span>
                    </a>

                </nav>
            </header>
        </>
    )
}

export default Header