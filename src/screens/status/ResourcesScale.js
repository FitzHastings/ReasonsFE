/* Copyright 2023 Prokhor Kalinin

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

import React from 'react';

class EditableCell extends React.Component {
    constructor(props) {
        super(props);

        this.controlIsHeld = false;

        this.state = {
            id: this.props.id,
            amount: this.props.amount,
            name: this.props.name,
            editingAmount: false,
            editingName: false,
        }
    }

    startEditingName = () => {
        this.setState({ editingName: true });
    }

    stopEditingName = () => {
        this.props.onResoureEdit({ id: this.state.id, name: this.state.name, amount: this.state.amount });
        this.setState({ editingName: false });
    }

    startEditingAmount = () => {
        this.setState({ editingAmount: true });
    }

    stopEditingAmount = () => {
        this.props.onResoureEdit({ id: this.state.id, name: this.state.name, amount: this.state.amount });
        this.setState({editingAmount: false });
    }

    handleNameChange = (e) => {
        this.setState({ name: e.target.value })
    }

    handleAmountChange = (e) => {
        this.setState({ amount: e.target.value })
    }

    handleEditKeuPress(e) {
        if (e.code === 'Delete' && this.controlIsHeld) {
            this.props.onResourceDelete(this.state.id)
        } else if (e.code === 'ControlLeft') {
            this.controlIsHeld = false;
        }
    }

    handleEditKeyOneName = (e) => {
        this.handleEditKeuPress(e);
        if (e.code === 'Enter') {
            this.stopEditingName();
        } else if (e.code === 'Escape') {
            this.setState({ name: this.props.name, editingName: false});
        }
    }

    handleEditKeyOnAmount = (e) => {
        this.handleEditKeuPress(e);
            if (e.code === 'Enter') {
            this.stopEditingAmount();
        } else if (e.code === 'Escape') {
            this.setState({ amount: this.props.amount, editingAmount: false});
        }
    }

    handleControl = (e) => {
        console.log(e.code)
        if (e.code === 'ControlLeft') {
            this.controlIsHeld = true;
        }
    }

    render() {
        let topCell;
        let bottomCell;
        if (this.state.editingName)
            topCell = (
                <div className="top-resource-cell" onDoubleClick={this.stopEditingName}>
                    <input
                        type="text"
                        value={this.state.name}
                        onChange={this.handleNameChange}
                        className='edited-cell'
                        onKeyUp={this.handleEditKeyOneName}
                        onKeyDown={this.handleControl}
                    />
                </div>
            );
        else
            topCell = <div className="top-resource-cell" onDoubleClick={this.startEditingName}>{this.state.name}</div>;

        if (this.state.editingAmount)
            bottomCell = (
                <div>
                    <input
                        onDoubleClick={this.stopEditingAmount}
                        type="text"
                        value={this.state.amount}
                        onChange={this.handleAmountChange}
                        className='edited-cell'
                        onKeyUp={this.handleEditKeyOnAmount}
                        onKeyDown={this.handleControl}
                    />
                </div>
            );
        else
            bottomCell = <div onDoubleClick={this.startEditingAmount}>{this.state.amount}</div>;

        return (
            <div className="resource-column second-layer">
                {topCell}
                {bottomCell}
            </div>
        );
    }
}

class ResourceBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const cells = this.props.resources.map((resource) => (
            <EditableCell
                name={resource.name}
                amount={resource.amount}
                id={resource.id}
                key={resource.id}
                onResoureEdit={this.props.onResourceEdit}
                onResourceDelete={this.props.onResourceDelete}
            />
        ));
        return (
            <div className='resource-bar'>
                    {cells}
                <div className='add-button-container'>
                    <button className='add-button' onClick={this.props.onNewResource}><span className='button-label'>+</span></button>
                </div>
            </div>
        );
    }
}

export default class ResourcesScale extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='scale first-layer full-width'>
                <span className='scale-title-label'>Resources</span>
                <ResourceBar
                    resources={ this.props.resources }
                    onResourceEdit={this.props.onResourceChange}
                    onNewResource={this.props.onNewResource}
                    onResourceDelete={this.props.onResourceDelete}
                />
            </div>
        );
    }
}
