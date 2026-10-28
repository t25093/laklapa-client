
interface PriceTagProp {
    price: number
}

const shekel = new Intl.NumberFormat("he-IL", {
    style: "currency",
    currency: "ILS",
});

const PriceTag = ({ price }: PriceTagProp) => {    
    return <span className="font-semibold text-blush-600">{shekel.format(price)}</span>
}

export default PriceTag;