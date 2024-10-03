import { Outlet } from "react-router-dom";
import Header from "../components/header";
import homeIcon from '../assets/images/home.png';

export default function RoutesMain() {
    const color = '#2D28FF';
    const icon = homeIcon;
    const menuList = [
        {
            label: 'Home',
            to: '/home',
        },
        {
            label: 'Products',
            to: '/products'
        },
        {
            label: 'About',
            to: '/about'
        }
    ];


    return (
        <>
            <Header items={menuList} color={color} icon={icon} />
            <Outlet />
        </>

    )
}