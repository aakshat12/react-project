import Product from "../../../Component/Product";

const Cart=[];

const handleCart = (state  = Cart,action) =>{
    const products = action.payload;
    switch(action.type){
        case ADDITEM:
            // Check if Product is already exist
            const exist = state.find((x)=>x.id === products.id);
            if (exist){
                //Increase the Quantity
                return state.map((x)=>
                x.id === products.id? {...x, qty: x.qty + 1}: x
                );
            }else{
                const products = action.payload;
                return[
                    ...state,{
                        ...products,
                        qty:1,

                    }
                ]
            }
            break;
            
            case "DELETEITEM":
                const exist1 = state.find((x)=> x.id === products.id);
                if (exist1.qty === 1){
                    returnstate.filter((x)=> x.id !== exist1.id);

                }else{
                    return state.map((x)=> 
                      x.id === products.id ? {...x, qty: x.qty-1} : x
                    );
                }
                break;

            default:
                break;
    }

}
export default handleCart;