import React, {Component} from 'react';
import addPurchase from '../utils/add_purchase.js';

export default class Addpurchase extends Component {
    render() {
        return (
            <div className="App-container">
                <div className="App-header">
                    <h1>Add Purchase</h1>
                    <a href="/">
                        <button className="Button Header-button">Back</button>
                    </a>
                </div>
                <div className="App-content">
                    <form action="/" onSubmit={addPurchase}>
                        <div>
                            <label for="add_item_name">Name:</label>
                            <input type="text" name="add_item_name" id="add_item_name" tabIndex="1" required/>
                        </div>

                        <div>
                            <label for="add_item_price">Price:</label>
                            <input className="input_number" type="number" name="add_item_price" id="add_item_price"
                                   tabIndex="1" required/>
                        </div>
                        <div>
                            <input className="Button Big_button" type="submit" value="Add" name="btnAddSubmit"
                                   id="btnAddSubmit"/>
                        </div>
                    </form>
                </div>
                <div className="App-footer">
                </div>
            </div>
        )
    }
}