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

import TechTreeScale from './TechTreeScale';
import React from 'react';
import {mockResearch} from '../../mocks';

export default class ResearchScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            techTrees: mockResearch
        }
    }

    render() {
        return (
            <div className="padded-container">
                <TechTreeScale
                    techTrees={this.state.techTrees}
                />
                <button className='scale full-width add-button'><span className='button-label'>+</span></button>
            </div>
        );
    }
}