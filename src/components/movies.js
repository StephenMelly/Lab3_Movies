import React, { Component } from 'react';
import MovieItem from './movieItem';

class Movies extends Component {
    render() {
        return this.props.films.map((film) => {
            //key prevents infinite loop
            return <MovieItem movie={film} key={film.imdbID}></MovieItem>
        })
    }
}

export default Movies;