import React from 'react';
import '../css/main-wrapper.css';
import Card from './Card';

class MainView extends React.Component {
    constructor(props){
        super(props);

        this.state = {

        };
    }

    fetchSentiment = () => {
        fetch('http://localhost:5000/apis', {
            method : 'GET'
            })
            .then(response => response.json())
            .then(responseJSON => {
                console.log(responseJSON);
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {

        return (
            <div>
                <h1>Jubelio</h1>
                <div className='main-wrapper'>
                    <Card title={'Celana XXL'} />
                    <Card title={'Celana XXL'} />
                    <Card title={'Celana XXL'} />
                    <Card title={'Celana XXL'} />
                    <Card title={'Celana XXL'} />
                    <Card title={'Celana XXL'} />
                    <Card title={'Celana XXL'} />
                    <Card title={'Celana XXL'} />
                    <Card title={'Celana XXL'} />
                    <Card title={'Celana XXL'} />
                    <Card title={'Celana XXL'} />
                    <Card title={'Celana XXL'} />
                </div>
                <div className='button-wrapper'>
                    <button type='button' onClick={this.fetchSentiment}>Get Data</button>
                </div>
            </div>    
        )
    }

}

export default MainView;