
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

export default class NavButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
    };
  }

  handleToggle = () => {
    this.props.onToggle(this.state.id);
  }

  render() {
    console.log('Rendering Nav Button', this.props.isToggled);
    return (
      <button className={ this.props.isToggled ? 'active-nav nav-button' : 'nav-button' } onClick={ this.handleToggle }>
        <span className="nav-button-text">{this.props.text}</span>
      </button>
    );
  }
}