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

class TechTreeButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: this.props.name,
            id: this.props.id,
        }
    }

    render() {
        return(
            <button className='scale second-layer'>
                  <span className='button-label'>{this.state.name}</span>
            </button>
        );
    }
}

export default class TechTreeScale extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            techTrees: this.props.techTrees
        }
    }

    render() {
        const resourceTabs = this.state.techTrees.map((techTree) => {
            return (
                <TechTreeButton
                    name={techTree.name}
                    id={techTree.id}
                    key={techTree.id}
                />
            )
        });
        
        return (
            <div className='scale first-layer full-width'>
                <span className='scale-title-label'>Tech Trees</span>
                {resourceTabs}
            </div>
        );
    }
}
