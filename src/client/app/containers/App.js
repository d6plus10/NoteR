import React from "react";
import {Router, Route, browserHistory, IndexRoute} from "react-router";

import AddNote from "../components/AddNote";
import Notes from "./Notes";
import {Root} from "../components/Root";
import {NFPage} from "../components/NFPage";
import {Home} from "../components/Home";

export default class App extends React.Component {
	render() {
		return (
				<Router history={browserHistory}>
					<Route path={"/"} component={Root}>
						<IndexRoute component={Home}/>
						<Route path="home" component={Home}/>
						<Route path={"note"} component={Notes}/>
						<Route path={"note/add"} component={AddNote}/>
						<Route path={"*"} component={NFPage} status={404}/>
					</Route>
				</Router>
			);
	}
}