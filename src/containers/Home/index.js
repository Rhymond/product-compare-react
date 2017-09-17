import React from 'react';
import {bindActionCreators} from 'redux';
import {Compare, ProductList} from '../../components';
import * as productActions from '../../actions';
import {connect} from 'react-redux';

class Home extends React.Component {
  componentWillMount() {
    this.props.actions.getProducts();
  }

  render() {
    const {products, actions} = this.props;
    const compareProducts = products.filter(product => product.compare);

    return (
      <div className="Home mt-5">
        <ProductList products={products} compare={actions.compare}/>
        {compareProducts.length >= 2 ? <Compare products={compareProducts}/> : null}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.product.products
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(productActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
