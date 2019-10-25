import React from 'react';
import '../css/card.css';


class CardHeader extends React.Component {
    render() {
      const { images } = this.props;
      var style = { 
          backgroundImage: 'url(' + images + ')'
      };
      return (
        <header style={style} id={images} className="card-header">
        </header>
      )
    }
  }
  
  class CardBody extends React.Component {
    constructor(props){
      super(props);

      this.state = {
          title : this.props.title,
          harga : this.props.harga,
          stok : this.props.stok,
          desc : this.props.desc,
          // btnDisable : true
      };
  } 

    handleChange (e) {
      
      const name = e.target.name;
      const value = e.target.value;
      this.setState({[name]: value})
      
    }

    render() {
      return (
        <div className="card-body">
          <label htmlFor='text'>Stok tersedia :</label>
          <input type="number" name='stok' value = {this.state.stok} onChange={(event) => this.handleChange(event)}/>
          {/* <p className="date">Stok Tersedia: {this.props.stok}</p> */}
          
          {/* <h4 className="card-title">{this.props.title}</h4> */}
          <label htmlFor='title'>Nama produk :</label>
          <input type='text' name='title' value={this.state.title} onChange={(event) => this.handleChange(event)}/>

          <label htmlFor='desc'>Deskripsi :</label>
          <textarea name='desc' value={this.state.desc} onChange={(event) => this.handleChange(event)}></textarea>
          {/* <p className="body-content">{this.props.desc}</p> */}
          
          <br/><label htmlFor='harga'>Harga :</label>
          <br/><input type='number' name='harga' value={this.state.harga} onChange={(event) => this.handleChange(event)}/>
          {/* <p className="harga-coontent">Rp. {this.props.harga}</p> */}
          
          <button type='button' className='saveButton'>Simpan</button>
        </div>
      )
    }
  }
  
  class Card extends React.Component {
    render() {
        const {title} = this.props;
        const {id} = this.props;
        const {harga} = this.props;
        const {stok} = this.props;
        const {desc} = this.props;
        const {images} = this.props;
      return (
        <article className="card" id={id}>
          <CardHeader images={images}/>
          <CardBody title={title} harga={harga} stok={stok} desc={desc}/>
        </article>
      )
    }
  }
  
export default Card;