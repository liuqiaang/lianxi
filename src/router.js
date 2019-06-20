import React,{Fragment} from 'react';
import {HashRouter,withRouter,Route,Switch,Redirect} from "react-router-dom"
import Admin from "./pages/admin/admin"
import Login from "./pages/login/login"
import Home from "./pages/home/home"
import User from "./pages/user/user"
import App from "./App.js"
function GlobalRouter() {
	return(
		<Fragment className="app">
				<HashRouter>
					<App>
					<Switch>
						<Route path="/admin" render={()=>{
							return(
								<Admin>
									<Switch>
									<Redirect exact from="/admin" to="/admin/home"></Redirect>
										<Route path="/admin/home" component={Home}></Route>
										<Route path="/admin/user" component={User}></Route>
									</Switch>
								</Admin>
							)
						}}></Route>
						<Route path="/login" component={Login}></Route>
						<Redirect from='/' to='/admin'></Redirect>
					</Switch>
					</App>
				</HashRouter>
		</Fragment>
	)
}

export default GlobalRouter;
