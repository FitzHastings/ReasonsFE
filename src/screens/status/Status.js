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
import { mockStatus, mockResources } from '../../mocks'
import TitleScale from './TitleScale';
import ResourcesScale from './ResourcesScale';

export default class StatusScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            status: mockStatus,
            resources: mockResources
        }
    }

    //This guy interacts with the server
    onResourceChange = (resource) => {
        const newResources = this.state.resources.map((res) => {
            if (res.id !== resource.id)
                return res;
            else
                return Object.assign({}, resource);
        })
        this.setState({ status: this.state.status, resources: newResources});
        console.log(newResources);
    }

    render() {
        return (
            <div className="padded-container">
                <TitleScale
                    identity={ this.state.status.identity }
                    law={ this.state.status.law }
                    wings={ this.state.status.wingsStatus }
                />
                <ResourcesScale
                    resources={this.state.resources}
                    onResourceChange={this.onResourceChange}
                />
            </div>
        );
    }
}
