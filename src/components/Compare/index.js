import React from 'react'
import './index.css'

const Compare = ({products}) =>
  <div className="row compare">
    <div className="col-12 mt-5 text-center">
      <div className={(products.length < 2
        ? 'hidden-xs-up'
        : '')}>
        <table className="table">
          <thead className="thead-default">
          <tr>
            <th></th>
            {products.map(product =>
              <th key={product.id}>
                {product.name}
              </th>
            )}
          </tr>
          </thead>
          <tbody>
            <tr className="price">
              <th scope="row">Price</th>
              {products.map(product =>
                <td key={product.id} className="text-center">{product.price}</td>
              )}
            </tr>
            <tr className="colors">
              <th scope="row">Colors</th>
              {products.map(product =>
                <td key={product.id}>
                {product.colors.map((color, index) =>
                    <span key={index} className={color}></span>
                )}
                </td>
              )}
            </tr>
            <tr className="condition">
              <th scope="row">Condition</th>
              {products.map(product =>
                <td key={product.id} className={product.condition === "Used" ? "red" : "green"}>
                  {product.condition}
                </td>
              )}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>;
// const Compare = ({products}) =>
//   <div className="row">
//     <div className="col-12 mt-5">
//       <h3 className={"text-center " + (products.length > 1 ? 'hidden-xs-up' : '')}>
//         Select two or more products
//       </h3>
//
//       <div className={(products.length < 2 ? 'hidden-xs-up' : '')}>
//         <Table>
//           <thead>
//           <tr>
//             <th></th>
//             {products.map(product =>
//               <td key={product.id}>
//                 <img width="100%"
//                      src={`${process.env.REACT_APP_API_URL}/v1/api/products/image/${product.img}`}
//                      alt={product.name}/>
//               </td>
//             )}
//           </tr>
//           </thead>
//           <tbody>
//           <tr>
//             <th>Name</th>
//             {products.map(product =>
//               <td key={product.id} className="text-center">{product.name}</td>
//             )}
//           </tr>
//           <tr>
//             <th>Categories</th>
//             {products.map(product =>
//               <td key={product.id}>
//                 {product.categories.map((category, index) =>
//                   <div className="text-center category" key={index}>{category}</div>
//                 )}
//               </td>
//             )}
//           </tr>
//           <tr>
//             <th>Balance Transfer Rates</th>
//             {products.map(product =>
//               <td key={product.id} className="text-center">
//                 <div className="rate">{product.rates.balance.rate}% for up to</div>
//                 <div className="period">{product.rates.balance.period} months</div>
//                 <div className="fee">({product.rates.balance.fee}% handling fee)</div>
//               </td>
//             )}
//           </tr>
//           <tr>
//             <th>Money Transfer Rates</th>
//             {products.map(product =>
//               <td key={product.id} className="text-center">
//                 <div className="rate">{product.rates.money.rate}% for up to</div>
//                 <div className="period">{product.rates.money.period} months</div>
//                 <div className="fee">({product.rates.money.fee}% handling fee)</div>
//               </td>
//             )}
//           </tr>
//           <tr>
//             <th>Card Purchases</th>
//             {products.map(product =>
//               <td key={product.id} className="text-center">
//                 <div className="rate">{product.rates.purchases.rate}% for up to</div>
//                 <div className="period">{product.rates.purchases.period} months</div>
//                 <div className="fee">({product.rates.purchases.fee}% handling fee)</div>
//               </td>
//             )}
//           </tr>
//           <tr>
//             <th>Additional Info</th>
//             {products.map(product =>
//               <td key={product.id} className="text-center">{product.info}</td>
//             )}
//           </tr>
//           <tr className="text-center">
//             <td></td>
//             {products.map(product =>
//               <td key={product.id}>
//                 <Button color="primary">More info</Button>
//               </td>
//             )}
//           </tr>
//           </tbody>
//         </Table>
//       </div>
//     </div>
//   </div>;

export default Compare;
