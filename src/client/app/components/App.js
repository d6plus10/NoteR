import React from "react";
import {Router, Route, browserHistory, IndexRoute} from "react-router";

import AddNote from "../containers/AddNote";
import Notes from "../containers/Notes";
import {Root} from "./Root";
import {NFPage} from "./NFPage";
import {Home} from "./Home";

export default class App extends React.Component {
	render() {
		return (
				<Router history={browserHistory}>
					<Route path={"/"} component={Root}>
						<IndexRoute component={Home}/>
						<Route exact path="home" component={Home}/>
            <Route exact path={"note/add"} component={AddNote}/>
						<Route exact path={"note"} component={Notes}/>
						<Route path={"*"} component={NFPage} status={404}/>
					</Route>
				</Router>
			);
	}
}