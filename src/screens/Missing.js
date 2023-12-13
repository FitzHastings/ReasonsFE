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

import React from "react";

export default class MissingScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='padded-container'>
        <div className='scale first-layer full-width'>
          <h1>Nothing to Display</h1>
          <p>There is no component to render for the given navigation</p>
        </div>
      </div>
    );
  }
}
