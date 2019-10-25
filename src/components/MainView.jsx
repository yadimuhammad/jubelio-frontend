import React from 'react';
import '../css/main-wrapper.css';
import Card from './Card';
import Axios from 'axios';

class MainView extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            response_div : []
        };
    }

    fetchSentiment = async () => {
        const datas = await this.getDataElv();
        const XMLParser = require('react-xml-parser');
        const xml = new XMLParser().parseFromString(datas);
        const dataLength = xml.children.length;
        const arrs = [];

  
        for (let i = 0; i < dataLength; i++) {
            arrs.push([])
        }

        for (let i = 0; i < dataLength; i++) {
            
            var prdNo = xml.children[i].getElementsByTagName('prdNo')[0]['value'];
            const dataProd = await this.getProdDet(prdNo);
            const xml2 = new XMLParser().parseFromString(dataProd);

            var selPrc = xml2.getElementsByTagName('selPrc')[0]['value'];
            var prdSelQty = xml2.getElementsByTagName('prdSelQty')[0]['value'];
            var prdNm = xml2.getElementsByTagName('prdNm')[0]['value'];
            var htmlDetail = xml2.getElementsByTagName('htmlDetail')[0]['value'];
            var prdImage01 = xml2.getElementsByTagName('prdImage01')[0]['value'];
            // var prdNo = xml2.children[i].getElementsByTagName('prdNm')[0]['value'];
            
            arrs[i].push(selPrc, prdSelQty,prdNm,htmlDetail,prdImage01);
            
        }
        this.setState({
            response_div : arrs
        });
        
        // console.log(selPrc);
        return null;

    }

    getDataElv = async () => {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = "http://api.elevenia.co.id/rest/prodservices/product/listing?page=1";
        const ucup = '721407f393e84a28593374cc2b347a98';
        let res = await Axios.get(proxyurl +url, {headers :{'openapikey' : ucup}});
        let data = res.data;
        // console.log(this.state.here);
        return data;
    }

    getProdDet = async (prodNum) => {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = "http://api.elevenia.co.id/rest/prodservices/product/details/"+prodNum;
        const ucup = '721407f393e84a28593374cc2b347a98';
        let res = await Axios.get(proxyurl +url, {headers :{'openapikey' : ucup}});
        let data = res.data;
        // console.log(this.state.here);
        return data;
    }

    render() {
        
        return (
            <div>
                <h1>Jubelio</h1>
                <div className='main-wrapper'>
                    {this.state.response_div.map((title,key) => (
                        <Card key = {key} title = {title[2]} harga={title[0]} stok={title[1]} desc={title[3]} images={title[4]}/>
                    ))}
                </div>
                <div className='button-wrapper'>
                    <button type='button' onClick={this.fetchSentiment}>Get Data</button>
                </div>
            </div>    
        )
    }

}

export default MainView;