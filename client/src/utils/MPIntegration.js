import { ACCESS_TOKEN_TYPE } from "../../config.json";


export const hamndleIntegrationMP = async (product) => {
    const { name, image, price } = product
    const preferencia = {
        "items": [
            {
                "title": name,
                "description": name,
                "picture_url": image,
                "category_id": "Services",
                "quantity": 1,
                "currency_id": "$",
                "unit_price": price
            }
        ]
    }
    
}

try {
    const response = await fetch('https://api.mercadopago.com/checkout/preferences', {
        method: "POST",
        headers: {
            'Authorization': `Bearer ${ACCESS_TOKEN_TYPE}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(preferencia)
    })

    const data = await response.json()

    return data.init_point
    
} catch (error) {
    console.log(error)
}
