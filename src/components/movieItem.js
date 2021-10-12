import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

class MovieItem extends Component
{
    render(){
        return(
            <div>

<Card>
  <Card.Header>{this.props.movie.Title}</Card.Header>
  <Card.Body>
    <blockquote>
    <img src={this.props.movie.Poster}></img>
      <footer>
      {this.props.movie.Year}
      </footer>
    </blockquote>
  </Card.Body>
</Card>
            </div>
        )
    }
}

//export for use elsewhere
export default MovieItem;

