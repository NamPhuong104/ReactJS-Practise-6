
import React from 'react'

type ProductProps = {
    names :
    {
        name: string;
        icon: string;
        price: number;
    }[]
}
const Product = (props: ProductProps) => {
    return(
        <div>
            {props.names.map(item => (
                <span role='img'>{item.icon}</span>
            ))}
        </div>
    );
}
export default Product;