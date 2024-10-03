
type Props = {
    items: string[]
}
export default function Card({ items }: Props) {

    return (
        <div>
            {
                items.map(item => {
                    return <div key={item}>{item}</div>
                })
            }
        </div>
    )
}