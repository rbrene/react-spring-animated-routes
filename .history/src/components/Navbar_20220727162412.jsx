import { useContext } from 'react';
import GlobalAppDataContext from '../Helpers/context';
import { Sidebar } from '../styled-components/components/index';
import { Nav, Navlist, Navitem } from '../styled-components/components/nav';
import { Navlink } from '../styled-components/components/links';


export default function Navbar() {
    const { navbar } = useContext(GlobalAppDataContext);
    return (
        <Sidebar>
            <Nav>
                <Navlist>

                </Navlist>
            </Nav>
        </Sidebar>
    );
}