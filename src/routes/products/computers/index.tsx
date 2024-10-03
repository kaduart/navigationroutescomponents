import Card from "../../../components/card";

export default function Computers() {

    const items = [
        "PC",
        "Notebook",
        "Tablet",
        "Smartphone"
    ];

    return (
        <div className="nrc-section">
            <Card items={items} />
        </div>
    )
}