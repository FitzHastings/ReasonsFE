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
import TechGroupScale from './TechGroupScale';

export default class ResearchScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            techTrees: mockResearch,
            currentTree: mockResearch[0],
        }
    }

    onTechTreeModified = (newTree) => {
        const newTrees = this.state.currentTree.categories.map((category) => {
            if (category.name === newTree.name) {
                return newTree
            } else return category;
        });
        const newGroup = Object.assign({}, this.state.currentTree, { categories: newTrees });
        this.setState({ currentTree: newGroup});
        // This is where we contact the server when we happen to have a server available,
    }

    render() {
        const groups = this.state.currentTree.categories.map((group) => {
            return (
                <TechGroupScale
                    name={group.name}
                    key={group.name}
                    technologies={group.technologies}
                    onTechTreeModified={this.onTechTreeModified}
                />
            );
        })
        return (
            <div className="padded-container">
                <TechTreeScale
                    techTrees={this.state.techTrees}
                    currentTree={this.state.currentTree}
                />
                {groups}
                <button className='scale full-width add-button'><span className='button-label'>+</span></button>
            </div>
        );
    }
}
