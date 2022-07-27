import { useContext } from 'react';
import GlobalAppDataContext from '../Helpers/context';
import { Sidebar } from '../styled-components/components/index';
import { Nav, Navlist, Navitem } from '../styled-components/components/nav';
import { Navlink } from '../styled-components/components/links';
import Routerlink from './Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Navbar() {
    const { navbar } = useContext(GlobalAppDataContext);
    return (
        <Sidebar>
            <Nav>
                <Navlist>
                    {navbar.map(item => {
                        return (
                            <Navitem key={item.id}>
                                <Routerlink variant='nav' to={item.path}>
                                    <FontAwesomeIcon icon={item.icon} />
                                </Routerlink>
                            </Navitem>
                        )
                    })}
                </Navlist>
            </Nav>
        </Sidebar>
    );
}