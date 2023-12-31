import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Col, Container, Row } from 'react-bootstrap';
import ProductItem from './ProductItem';

const Products = () => {
    let [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('https://json-server-t4nd.onrender.com/products')
            .then(res => {
                setProducts(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <Container className='mt-5'>
                <Row>
                    {
                        products.map(product => {
                            return (
                                <Col className="mb-4" key={product.id}>
                                    <ProductItem {...product} />
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </>
    )
}

export default Products