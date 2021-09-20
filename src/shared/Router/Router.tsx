

import React from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from "../components/NotFound/NotFound";
import Analyze from "../../pages/analyze";
import History from "../../pages/history";

const Router: React.FC = () => (
  <div data-testid="Router"> 
  


        <Switch>
           <Route path='/'
                    exact
                    component={Analyze} />
              <Route
                    path='/history' exact
                    component={History} />

              <Route path="/items/:id"
                    exact 
                    component={NotFound}/>

             <Route path='*'  component={NotFound}/>
             <Route path='/items/*'  component={NotFound}/>
         </Switch>
       
   
  </div>

);

export default Router;
