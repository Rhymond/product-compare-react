import React from 'react';
import {bindActionCreators} from 'redux';
import ProductList from '../../components/ProductList';
import Compare from '../../components/Compare';
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
        <Compare products={compareProducts}/>
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
