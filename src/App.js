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

import './App.css';
import Reasons from "./Reasons";

function App() {
  return (
    <div className="top-level">
      <header>
        <div className="dd-nav">
          <a className="dd-header">Dragondelve</a>
          <a className="dd-subheader">Reasons</a>
        </div>
      </header>
      <Reasons/>
    </div>
  );
}

export default App;
