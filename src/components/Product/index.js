import React from 'react'
import './index.css'

// const Product = ({product, compare}) =>
//     <div key={product.id} className="col-3 product-card">
//       <Card inverse
//             onClick={() => compare(product)}
//             color={product.compare ? "success" : "primary"}
//       >
//         <CardBlock>
//           <CardTitle>{product.name}</CardTitle>
//         </CardBlock>
//       </Card>
//     </div>;

const Product = ({product, compare}) =>
    <div key={product.id} className="col-3">
        <div className={"product " + (product.compare ? "compare" : "")} >
            <img src={product.image} alt={product.name} />
            <div className="image_overlay"></div>
            <div className="view_details" onClick={() => compare(product)}>
              {product.compare ? "Remove" : "Compare"}
            </div>
            <div className="stats">
                <div className="stats-container">
                    <span className="product_price">{product.price}</span>
                    <span className="product_name">{product.name}</span>
                    <p>Men's running shirt</p>
                </div>
            </div>
        </div>
    </div>;

export default Product;
