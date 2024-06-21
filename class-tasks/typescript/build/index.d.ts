interface cartitems {
    id: number;
    products: Product[];
    store: string;
}
type Product = {
    id: number;
    p_name: string;
    price: number;
};
declare let cartItems: cartitems[];
