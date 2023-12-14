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

        this.state = {
            edited: false
        }
    }

    startEditing = () => {
        this.setState({ edited: true });
    }

    stopEditing = (input) => {
        console.log(input);
        this.props.onResourceUpdate();
    }

    render() {
        if (!this.state.edited) {
            return (
                <div className="resource-column second-layer">
                    <div className="top-resource-cell">{this.props.name}</div>
                    <div onDoubleClick={this.startEditing}>{this.props.amount}</div>
                </div>);
        } else {
            return (
                <div className="resource-column second-layer">
                    <div className="top-resource-cell"><input type="text" value={this.props.name}/></div>
                    <div><input onDoubleClick={this.stopEditing} type="text" value={this.props.amount}/></div>
                </div>
            )
        }
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
            />
        ));
        return (
            <div className='resource-bar'>
                    {cells}
                <div className='add-button-container'>
                    <button className='add-button'><span className='button-label'>+</span></button>
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
                <ResourceBar resources={ this.props.resources }/>
            </div>
        );
    }
}
