import './styles.css';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

type Props = {
    items: Array<{ label: string, to: string }>,
    color: string,
    icon: string | undefined
}

export default function Header({ items, icon, color }: Props) {

    const HeaderStyle = styled.header`
        background-color: ${color};
    `;

    return (
        <HeaderStyle >
            <div className="nrc-container">
                <nav className='nrc-header'>
                    <div className="nrc-header-one">
                        {
                            items.map(menu => (
                                <NavLink to={menu.to} className={({ isActive }) => isActive ? "nrc-header-menu-item menu-active" : "nrc-header-menu-item"}>
                                    {menu.label}
                                </NavLink>
                            ))
                        }
                    </div>

                    {
                        icon &&
                        < div className="">
                            <NavLink to={'/home'}>
                                <img src={icon} alt="{icon}" />
                            </NavLink>
                        </div>
                    }

                </nav>
            </div >
        </HeaderStyle >

    )


}