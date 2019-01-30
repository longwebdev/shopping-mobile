import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from './../components/Products';
import Product from './../components/Product';
import * as actions from './../actions/index';
import PropTypes from 'prop-types';

class ProductsContainer extends Component {
    render() {
        var { products } = this.props;
        return (
           <Products>
               {this.showProducts(products)}
           </Products>
        );
    }
    showProducts =  (products) => {
        var result = null;
        var { onAddToCart, onChangeMessage } = this.props;
        if(products.length > 0 ){
            result = products.map( (product, index) => {
                return <Product  
                key={index}
                product={product}
                onAddToCart = {onAddToCart}
                onChangeMessage = {onChangeMessage}
                />;
            });
        }
        return result;
    }
}

ProductsContainer.propTypes = {
    //products phải là 1 cái mảng và yêu cầu phải có
    products : PropTypes.arrayOf(
        PropTypes.shape({
            id : PropTypes.number.isRequired,
            name : PropTypes.string.isRequired,
            image : PropTypes.string.isRequired,
            description : PropTypes.string.isRequired,
            price : PropTypes.number.isRequired,
            inventory : PropTypes.number.isRequired,
            rating : PropTypes.number.isRequired
        })
    ).isRequired,
    onAddToCart : PropTypes.func.isRequired,
    onChangeMessage : PropTypes.func.isRequired
}


const mapStateToProps = (state) => {
    return {
        products : state.products
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product) => {
            dispatch(actions.actAddToCart(product, 1));
        },
        onChangeMessage:  (message) => {
            dispatch(actions.actChangeMessage(message));
        } 
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer)