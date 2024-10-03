import Card from "../../../components/card"

export default function Eletronics() {

    const items = [
        'Smart TV',
        'Headphones',
        'Earbuds',
        'Accessories',
        'Smartwatches',
    ];
    
    return (
        <div className="nrc-section">
            <Card items={items} />
        </div>
    )
}