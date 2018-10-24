import React from 'react';
import { connect } from 'react-redux';

import * as selectors from '../../reducers';


const CartTotal = ({ onClick }) => (
  <h2>
     {
        <button onClick={onClick}>Enviar Mandado!</button>
      }
  </h2>
);

export default connect(
  state => ({
    total: selectors.getCartTotal(state),
  }),
  undefined,
)(CartTotal);
