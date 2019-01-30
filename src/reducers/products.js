var initialState = [
    {
        id : 1,
        name : 'Iphone 7 Plus',
        image : 'https://istyle.hr/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/i/p/iphone-6s-space-gray_0001_iphone7_2up_rsgld_us-en-print_1_1_1_3.jpg',
        description : 'Sản phẩm do apple sản xuất',
        price : 500,
        inventory : 10,
        rating : 4
    },
    {
        id : 2,
        name : 'Sam sung galasy S7',
        image : 'https://cdn.shopify.com/s/files/1/1387/5623/products/samsung-galaxy-s7-screen-protector-sample-1_1024x1024.jpg?v=1468644855',
        description : 'Sản phẩm do samsung sản xuất',
        price : 400,
        inventory : 15,
        rating : 5
    },
    {
        id : 3,
        name : 'Oppo F1S',
        image : 'http://product.hstatic.net/1000173630/product/dien_thoai_oppo_f1s_1.jpg',
        description : 'Sản phẩm do china sản xuất',
        price : 450,
        inventory : 5,
        rating : 3
    }   
];

const products = (state = initialState, action) => {
    switch(action.type){
        default :
        return [...state];
    }
}

export default products;
