"use client";

import { Button } from '@/components/ui/button'
import React from 'react'
import { useShoppingCart } from 'use-shopping-cart'
import { urlFor } from '../lib/sanity';

export interface ProductCart {
    name: string,
    description: string,
    price: number,
    currency: string,
    image: any,
    price_id: string,
}

const AddToCart = ({ currency, description, image, price, name, price_id }: ProductCart) => {
    const { addItem, handleCartClick } = useShoppingCart();
    const product = {
        name: name,
        description: description,
        price: price,
        currency: currency,
        image: urlFor(image).url(),
        price_id: price_id,
    }
    return (
        <Button onClick={() => { addItem(product), handleCartClick() }}>
            Dodaj do koszyka
        </Button>
    )
}

export default AddToCart