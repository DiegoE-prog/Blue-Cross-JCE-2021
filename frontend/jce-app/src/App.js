import React from "react"

//React router
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";

//Views
import Home from "./views/home";
import Test from "./views/test";
import Profile from "./views/profile";
import ClaimPage from "./views/ClaimPage";


function App() {
    return (
      <>
        <div>
          {/*Header*/}
  
          <div className="content">
            <Routes>
              <Route exact path={routes.HOME} element={<Home title="Home"/>} />
              <Route path={routes.PROFILE} element={<Profile title="Profile" />} />
              <Route path={routes.CLAIMPAGE} element={<ClaimPage title="CalimPage" />} />
              <Route path={routes.TEST} element={<Test title="Test" />} />
            </Routes>
          </div>
  
          {/*Footer*/}
        </div>
      </>
    );
  }

export default App;