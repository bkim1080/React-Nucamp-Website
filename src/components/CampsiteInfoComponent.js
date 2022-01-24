import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


export default class CampsiteInfo extends Component {
   renderCampsite(campsite) {
      return (
      <div className="col-md-5 m-1">
         <Card>
            <CardImg top src={campsite.image} alt={campsite.name} />
            <CardBody>
               <CardTitle>{campsite.name}</CardTitle>
               <CardText>{campsite.description}</CardText>
            </CardBody>
         </Card>
      </div>
      )
   }

   renderComments(comments) {
      if (comments) {
         return (
            <div className="col-md-5 m-1">
               <h4>Comments</h4>
               {comments.map((comment) => {
            return (
              <div>
                <p>
                  {comment.text} <br /> - {comment.author}
                </p>
              </div>
            );
          })}
            </div>
         )
      }
   }


   render() {
      if (this.props.campsite) {
         return (
         <div className="row">
            {this.renderCampsite(this.props.campsite)}
            {this.renderComments(this.props.campsite.comments)}
         </div>
         )
      } else {
         return <div></div>
      }
   }
}