import React, { Component } from "react";
import "./App.css";

// components
import MovieList from "./components/MovieList";
import NewMovieForm from "./components/NewMovieForm";

import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
	uri: "http://67.205.135.230:5000/graphql",
	cache: new InMemoryCache(),
});

class App extends Component {
	render() {
		return (
			<ApolloProvider client={client}>
				<div className="App">
					<NewMovieForm />
					<MovieList />
				</div>
			</ApolloProvider>
		);
	}
}

export default App;
