import React, {Component} from 'react';
import calcBudget from '../utils/calc_budget.js';
import setBudgets from '../utils/set_budgets.js';
import loadTable from '../utils/load_table.js';

export default class Home extends Component {
    componentDidMount() {
        window.addEventListener('load', setBudgets());
        window.addEventListener('load', loadTable());
        window.addEventListener('load', calcBudget());
    }

    render() {
        return (
            <div className="App-container">
                <div className="App-header">
                    <h1>Spending</h1>
                    <a href="Settings">
                        <button className="Button Header-button">edit</button>
                    </a>
                </div>
                <div className="App-content">
                    <div id="tableView">
                        <table id="price_chart" className="Budget-table">
                            <tr>
                                <th>Date</th>
                                <th>Name</th>
                                <th>Cost</th>
                            </tr>
                        </table>
                        <div className="Content_Budget">
                            <p>Budget: <span id="budget_display"></span></p>
                        </div>
                    </div>
                    <a href="Addpurchase">
                        <button className="Button Big_button">Add Purchase</button>
                    </a>
                </div>
                <div className="App-footer">
                </div>
            </div>
        )
    }
}