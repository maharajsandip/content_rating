
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
        likes: 0,
        dislikes: 0,
        totalRatings: 0,

        handlelike: () => {
            this.setState((prevState, totalRatings) => ({
                likes: prevState.likes + 1,
                totalRatings: prevState.totalRatings + 1
            }));
        },

        handledislike: () => {
            this.setState((prevState, totalRatings) => ({
                dislikes: prevState.dislikes + 1,
                totalRatings: prevState.totalRatings + 1
            }));
        }
    }
  }
  render() {
    return (
     <>
     <div className='content-rating'>
        <p>
            // text goes here
        </p>

        <div className='rating-buttons'>
            <button className='like-button' onClick={this.state.handlelike}>
                Like ({this.state.likes})
            </button>

            <button className='dislike-button' onClick={this.state.handledislike}>
                Dislike ({this.state.dislikes})
            </button>
        </div>
        <p>Total Ratings {this.state.totalRatings}</p>
     </div>
     </>
    );
  }
}

export default ContentRating;
