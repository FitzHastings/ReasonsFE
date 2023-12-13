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

import NavButton from "./controls/NavButton";
import React from "react";

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    const navButtons = [];
    navButtons.push({ text: "Status", id: "status", isToggled: true });
    navButtons.push({ text: "Research", id: "research", isToggled: false });
    navButtons.push({ text: "Ideas", id: "ideas", isToggled: false });
    navButtons.push({ text: "Projects", id: "project", isToggled: false });

    this.state = {
      navButtons,
    };
  }

  onToggle = (id) => {
    console.log('on Toggle on a navbarButton ', id);
    const newButtons = this.state.navButtons.map(navButton => {
      console.log(navButton.id)
      if (navButton.id === id)
        return Object.assign({}, navButton, { isToggled: true });

      return Object.assign({}, navButton, { isToggled: false });
    })
    console.log(newButtons)
    this.setState({ navButtons: newButtons });
  }

  render() {
    console.log('Rendering NavBar')
    const navComponents = this.state.navButtons.map((navButton) => (
      <div className="nav-bar">
        <NavButton
          key={'nav-'+navButton.id}
          id={navButton.id}
          text={navButton.text}
          isToggled={navButton.isToggled}
          onToggle={this.onToggle}
        />
      </div>
    ));

    console.log(navComponents)
    return (
        <div>
          {navComponents}
        </div>
    );
  }
}
