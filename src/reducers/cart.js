import * as types from './../constants/ActionType';

var data = JSON.parse(localStorage.getItem('cart'));

var initialState = data ? data : [];

const cart = (state = initialState, action) => {
    var { product, quantity } = action;
    var index = -1; // không tìm thấy -> index =-1
    switch(action.type){
        case types.ADD_TO_CART:
        index = findProductInCart(state, product);
        //trường hợp đã có sản phẩm trong giở hàng 
        //thì ta tăng số lượng sản phẩm lên
        if(index !== -1){
            state[index].quantity += quantity;
        }
        //trường hợp chưa có thì ta push vào như thường
        else{
            state.push({
                product,
                quantity 
            });
        }
            
           
        localStorage.setItem('cart', JSON.stringify(state));    
        return [...state];

        case types.DELETE_PRODUCT_IN_CART:        
        index = findProductInCart(state, product);
        if(index !== -1){
            state.splice(index, 1);
        }
        localStorage.setItem('cart', JSON.stringify(state)); 
        return [...state];


        case types.UPDATE_PRODUCT_IN_CART:
        index = findProductInCart(state, product);
        if(index !== -1){
            state[index].quantity = quantity;
        }
        localStorage.setItem('cart', JSON.stringify(state));
        return [...state];
        default :
        return [...state];
    }
}

var findProductInCart =  (cart, product) => {
    //cart những sản phẩm đã có trong giỏ hàng
    //product những sản phẩm mình vừa mới ấn
    //sau đó t đi so sánh id của nó với nhau và tìm ra vị trí của sản phẩm đó trong product 
    var index = -1;
    if(cart.length > 0){
        for(var i = 0; i < cart.length; i++){
            if(cart[i].product.id === product.id){
                index = i;
                break;
            }
        }
    }
    return index;
} 
export default cart;
