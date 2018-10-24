import uuid from 'uuid-v4';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import './index.css'


class InventoryFormDummy extends React.Component {
  render() {
    const { onSubmit } = this.props;

    return (
      <div>
           <div class="quisiera">
              <input
                type="text"
                placeholder="Quisiera..."
                ref={ node => { this.nameInput = node; } }
              />
           </div>
         
          <div class="cantidad">
              <input
                type="number"
                placeholder="Cantidad"
                ref={ node => { this.qtyInput = node; } }
              />
          </div>
          
          <div class="button1">
              <button
                onClick={
                  () => {
                    onSubmit(
                      this.nameInput.value,
                      this.qtyInput.value,
                    );

                    this.nameInput.value = "";
                    this.qtyInput.value = "";
                    this.nameInput.focus();
                  }
                }
              >
              Agregar
              </button>
          </div>
         
      </div>
    );
  }
};

export default connect(
  undefined,
  dispatch => ({
    onSubmit(name, qty) {
      dispatch(actions.addToInventory(uuid(), name, qty));
    }
  })
)(InventoryFormDummy);
