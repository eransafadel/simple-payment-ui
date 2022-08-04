import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import StripeCheckout from 'react-stripe-checkout';
import { STRIPE_PUBLIC_KEY as KEY } from "./macros";
import { checkoutPaymentPost } from '../api';




const Container = styled.div`
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
`;





const Button = styled.button`
height:40px;
width:120px;
border-radius:5;
padding:"20px";
font-weight:400;
border:none;
color: black;
background:black ;
color: #F7F7F7;
cursor:pointer;
&:hover{
    font-weight:600;
}

`;


const Pay = () => {


    const [stripeToken, setStripeToken] = useState(null);
    useEffect(() => {

        const makeRequest = async () => {
            try {
                const res = await checkoutPaymentPost(stripeToken.id, 2000);
                console.log(res.data);
            }
            catch (err) { console.log(err); }
        };
        stripeToken && makeRequest();
    }, [stripeToken]);

    const onToken = (token) => {
        setStripeToken(token);
    };


    return (
        <Container>
            <StripeCheckout
                name='EranSa Shop'
                key="EranSa"
                image=""
                billingAddress
                shippingAddress
                description='Your total amount is $20'
                amount={2000}
                token={onToken}
                stripeKey={KEY}
            >
                <Button>PAY NOW </Button>
            </StripeCheckout>
        </Container>
    )
}

export default Pay;