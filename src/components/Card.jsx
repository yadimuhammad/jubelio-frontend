import React from 'react';
import '../css/card.css';

class CardHeader extends React.Component {
    render() {
      const { image } = this.props;
      var style = { 
          backgroundImage: 'url(' + image + ')'
      };
      return (
        <header style={style} id={image} className="card-header">
        </header>
      )
    }
  }
  
  class Button extends React.Component {
    render() {
      return (
        <button className="button button-primary">
          <i className="fa fa-chevron-right"></i> Find out more
        </button>
      )
    }
  }
  
  class CardBody extends React.Component {
    render() {
      return (
        <div className="card-body">
          <p className="date">Stok Tersedia: 0</p>
          
          <h2>{this.props.title}</h2>
          
          <p className="body-content">{this.props.text}</p>
          <p className="harga-coontent">Rp. 1.200.000</p>
          
          <Button />
        </div>
      )
    }
  }
  
  class Card extends React.Component {
    render() {
        const {image} = this.props;
        const {title} = this.props;
      return (
        <article className="card">
          <CardHeader image={'https://source.unsplash.com/user/erondu/600x400'}/>
          <CardBody title={title} text={'Kayaks crowd Three Sister Springs, where people and manatees maintain controversial coexistence'}/>
        </article>
      )
    }
  }
  
export default Card;