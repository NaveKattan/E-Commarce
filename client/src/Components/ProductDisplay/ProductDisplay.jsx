import React from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'

function ProductDisplay(props) {

    const {product} = props

  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
            <img className='productdisplay-main-img' src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />  
            <p>(122)</p>     
        </div>
        <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">${product.old_price}</div>
            <div className="productdisplay-right-price-new">${product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
**Classic Cotton Button-Down Shirt**

Elevate your wardrobe with this timeless classic cotton button-down shirt. Crafted from 100% premium cotton, this shirt offers unparalleled comfort and breathability, perfect for all-day wear. The tailored fit provides a sleek silhouette, while the crisp, pointed collar and buttoned cuffs add a touch of sophistication. Available in a range of versatile colors, this shirt features a chest pocket for added functionality and style. Whether you're dressing up for a business meeting or keeping it casual for a weekend outing, this shirt is a versatile staple that effortlessly combines style and comfort.
        </div>
        <div className="productdisplay-right-size">
            <h1>Select Size</h1>
            <div className="productdisplay-right-sizes">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
        </div>
        <button>Add To Cart</button>
        <p className="productdisplay-right-category"><span>Category: </span>Women, T-Shirt, Crop Top</p>
        <p className="productdisplay-right-category"><span>Tags: </span>Modern, Latest</p>
      </div>
    </div>
  )
}

export default ProductDisplay
