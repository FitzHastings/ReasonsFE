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

export default class TitleScale extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='scale first-layer full-width'>
                <span className='status-identity'>Identity: {this.props.identity}</span>
                <span className='status-extra'>Law: {this.props.law}</span>
                <span className='status-extra'>Wings: {this.props.wings}</span>
            </div>
        )
    }
}
