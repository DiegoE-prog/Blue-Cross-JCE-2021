import React from "react"

//React router
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";

//Views
import Home from "./views/home";
import Test from "./views/test";
import ClaimPage from "./views/ClaimPage";

function App() {
    return (
      <>
        <div>
          {/*Header*/}
  
          <div className="content">
            <Routes>

              <Route exact path={routes.HOME} element={<Home />} />
              <Route path={routes.CLAIMPAGE} element={<ClaimPage />} />
              <Route path={routes.TEST} element={<Test />} />
            </Routes>
          </div>
  
          {/*Footer*/}
        </div>
      </>
    );
  }

export default App;