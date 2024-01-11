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

export default class TechGroupScale extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            edited: false,
            name: this.props.name,
            id: this.props.id,
            technologies: this.props.technologies
        };
    }

    onEditStart = () => {
        this.setState({ edited: true });
    }

    onEditCommit = () => {
        this.setState({ edited: false });
    }

    onTechAdded = () => {
        const newTechnologies = [...this.state.technologies]
        newTechnologies.push({
            name: 'New Technology',
            id: newTechnologies.length + 1
        });
        this.props.onTechTreeModified({
            id: this.state.id,
            name: this.state.name,
            technologies: newTechnologies,
        });
    }

    render() {
        if (this.state.edited) {
            const techs = this.props.technologies.map((tech) => {
                return (<div key={tech.id} className="scale full-width second-layer"><span>{tech.name}</span> <span className='floating-label'>Remove</span></div>);
            });
            return (
                <div className="scale full-width first-layer">
                    <span className="scale-title-label">{this.props.name}</span>
                    <span onClick={this.onEditCommit} className="edit-label floating-label">Ok</span>
                    {techs}
                    <div onClick={this.onTechAdded} className="add-button full-width scale"><span className='button-label'>+</span></div>
                </div>
            )
        } else {
            const techs = this.props.technologies.map((tech) => {
                return <div className="scale second-layer"><span>{tech.name}</span></div>;
            });
            return (
                <div className='scale full-width first-layer'>
                    <span className='scale-title-label'>{this.props.name}</span>
                    <span onClick={this.onEditStart} className='edit-label floating-label'>Edit</span>
                    {techs}
                </div>
            )
        }
    }
}
