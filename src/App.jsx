import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MySidebar from "./components/MySidebar";
import MyPlayer from './components/MyPlayer';
import MyMain from './components/MyMain';


function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <MySidebar />
          <Routes>
            <Route path="/" element={<MyMain />} />
          </Routes>
          <MyPlayer />
        </BrowserRouter>
      </div>
  );
}

export default App;