import { Outlet } from "react-router-dom";
import Header from "../../components/header";

export default function Products() {

    const color = '#C7C7C7';
    const icon = undefined;

    const menuList = [
        {
            label: 'Computers',
            to: 'computers',
        },
        {
            label: 'Eletronics',
            to: 'eletronics'
        },
        {
            label: 'Books',
            to: 'books'
        }
    ];

    return (
        <>
            <div className="nrc-container">
                <div className="nrc-section">
                    <Header items={menuList} color={color} icon={icon} />
                    
                    <Outlet />
                </div>
            </div>

        </>


    )
}