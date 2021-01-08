import React, {Component} from 'react';
import setInput from '../utils/set_input_value.js'
import handleClick from '../utils/budget_submit.js';

export default class Settings extends Component {
    componentDidMount() {
        window.addEventListener('load', setInput());
    }

    render() {
        return (
            <div className="App-container">
                <div className="App-header">
                    <h1>Set Budget</h1>
                    <a href="/">
                        <button className="Button Header-button">Back</button>
                    </a>
                </div>
                <div className="App-content">
                    <form action="/" onSubmit={handleClick}>
                        <div>
                            <label forhtml="budget">Budget:</label>
                            <input className="input_number" type="number" name="budget" id="budget" tabIndex="1"
                                   required/>
                        </div>
                        <div>
                            <input className="Button Big_button" type="submit" value="Save" name="btnBudgetSubmit"
                                   id="btnBudgetSubmit"/>
                        </div>
                    </form>
                </div>
                <div className="App-footer">
                </div>
            </div>
        )
    }
}