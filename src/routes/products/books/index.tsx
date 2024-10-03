import Card from "../../../components/card";

export default function Books() {

    const items = [
        'Book 1',
        'Book 2',
        'Book 3',
        'Book 4',
        'Book 5',
        'Book 6',
        'Book 7'
    ];

    return (
        <div className="nrc-section">
            <Card items={items} />
        </div>
    )
}