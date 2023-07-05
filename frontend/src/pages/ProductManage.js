import { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import ProductDetails from '../components/ProductDetails'
import ProductForm from '../components/ProductForm'
import {fetchSellerProducts} from '../actions/action'

const ProductManage = () => {
    
    const selector =useSelector((state)=>state.reducer)
    const sellerProducts = useSelector((state) => state.SellerProductReducer.sellerProducts);
    const dispatch = useDispatch()
    localStorage.setItem('sellerPage',true)
    useEffect(() => { 
        dispatch(fetchSellerProducts())
        console.log("products seller",sellerProducts)
        
    }, [selector])

    return (
        <div className="home">
            <div className='buyer'>
                {sellerProducts && sellerProducts.map((product) => (
                    <ProductDetails key={product._id} product={product} />
                ))}
            </div>
            <ProductForm />
        </div>
    )
}

export default ProductManage