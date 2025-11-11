export const APIConstant = {
    user:{
        signup:'user/signup',
        login:'user/login',
        getUser:'user/getuser/',
        updateUser:'user/updateuser'
    },
    admin:{
        signup:'admin/signup',
        login:'admin/login'
    },
    cart:{
        addToCart:'cart/addtocart',
        getCartItems:'cart/getcartitems',
        removeFromCart:'cart/removecartitem/'
    },
    order:{
        addOrder:'order/addorder',
        getOrders:'order/getorders',
        getPastOrders:'order/getpastorders',
        getCurrentOrders:'order/getcurrentorders',
        updateBulkOrders:'order/updatebulkorders',
        deleteBulkOrders:'order/deletebulkorders',

        getStoreOrders:'order/getstoreorders',
        updateOrder:'order/updateorder',
        getFulFilledOrders:'order/getfullfilledorders'
    },
    wishlist:{
        getWishListItems:'wishlist/getwishlistitems',
        addToWishList:'wishlist/addtowishlist',
        removeFromWishList:'wishlist/removefromwishlist/'
    },
    review:{
        addReview:'review/addreview',
        getProductReview:'review/getproductreview/'
    },
    product:{
        getProducts:'product/getproducts/',
        getSingleProduct:'product/getsingleproduct/',
        getProductsByCategory:'product/getproductsbycategory/',
        getProductsBy:'product/getproductsby?item=',
        getProductsByPriceRange:'product/getproductsbypricerange?item=',
        searchProduct:'product/searchproducts/',
        bestDeals:'product/getbestdeals',

        addproduct:'product/addproduct',
        getStoreProducts:'product/getstoreproducts',
        deleteProduct:'product/deleteproduct/',
        updateProduct:'product/updateproduct',
        updateStock:'product/updatestock'

    },

}