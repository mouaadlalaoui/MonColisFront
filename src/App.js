import logo from './logo.svg';
import './App.css';
import Inscription from './Components/Inscription';

import { Routes, Route } from "react-router-dom";
/*import './Services/inscription';
*/
const Test = () => {
  return (
    <div>
      <h1>Coucou</h1>
    </div>
  )
}

function App() {
  return (
    <div className="App">

        <Inscription/>
        <Test/>
{/* <Link to="/test"//// */}
<Routes>
            <Route  path="/test" element={<Test/>} />
            </Routes>
    </div>
  );
}

export default App;
