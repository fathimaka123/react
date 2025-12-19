import { useEffect,useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
const ProductDetails=()=>{
    const [ProductDetails,setProductDetails]=useState(null);
    useEffect(()=>{
        fetchproducts()
    },[])
    const {productId}=useParams();
    console.log(productId);
    const fetchproducts=async()=>{
        const data =await fetch(`https://dummyjson.com/products/${productId}`);
        const json=await data.json();
        console.log(json);
        setProductDetails(json);
    }
    if(ProductDetails===null)return<Shimmer/>;
    const { title, category, price, description } = ProductDetails;
    return(
        <div className="productdetails">
            <h1>{title}</h1>
            <p>Category: {category}</p>
            <p>Price: ${price}</p>
            <p>Description: {description}</p>
{ProductDetails.reviews.map((review,index)=>(
    <div key={index}>
    <h4>{review.comment}</h4>
  <p>{review.rating}</p>
  <p>{review.reviewerName}</p>
    </div>
))}
</div>
)
}    
export default ProductDetails;