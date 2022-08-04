import axios from "axios";

const API =  axios.create({ baseURL: 'http://localhost:5000',
timeout: 2000,
headers: {'Content-Type': 'application/json'}

}

);
console.log("we are in feature/index")

export const checkoutPaymentPost = (tokenId,amount) => API.post('/api/checkout/payment',{tokenId,amount});