import React, { Fragment } from 'react'


const ProductInfo = (props)=>{

    const {articulos: {_id, name, raiting, price, description}} = props

    return (
        <Fragment>
        <p>Descripción</p>
        </Fragment>  
    )
}

export default ProductInfo;