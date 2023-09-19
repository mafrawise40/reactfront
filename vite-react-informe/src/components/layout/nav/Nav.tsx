'use client';

import { Avatar, Dropdown, Navbar } from 'flowbite-react';

export default function Nav() {
    return (
        <Navbar
            fluid
            rounded
        >
            <Navbar.Brand href="#">
                <img
                    alt="logo"
                    className="mr-3 h-6 sm:h-9"
                    src="/src/assets/information-icon-transparent-26.jpg"
                />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    Informações
                </span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Dropdown
                    inline
                    label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />}
                >
                    <Dropdown.Header>
                        <span className="block text-sm">
                            Usuário
                        </span>
                        <span className="block truncate text-sm font-medium">
                            usuario@gmail.com
                        </span>
                    </Dropdown.Header>
                    <ul>
                        <li><a href='/'>Sair</a></li>
                    </ul>


                </Dropdown>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link active href="/"><p>Home </p></Navbar.Link>
                <Navbar.Link href="/painel"> Painel </Navbar.Link>
                <Navbar.Link href="/galeria"> Galeria de Imagens </Navbar.Link>
                <Navbar.Link href="/galeria/pessoas"> Galeria de Imagens de Pessoas Suspeitas </Navbar.Link>

            </Navbar.Collapse>
        </Navbar>
    )
}


