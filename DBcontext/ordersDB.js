import axios from 'axios';
import CONSTANT from '../constant/contant';

 const orders = async () => {
    let ordersItems = [];
 await axios.get(`${CONSTANT.URL}/orders`).then(res =>{
        ordersItems = res.data;
        console.log(ordersItems);
    }).catch(err => {
        console.log(err);
    })
    return ordersItems;
}
export default orders();