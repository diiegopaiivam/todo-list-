import React, { Component } from 'react'
import Pageheader from '../Templates/Pageheader/index';
import PlainsForm from './PlainsForm/index';

export default class Plains extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return( 
            <div>
                <Pageheader name="Meu Plano" small="plano de aula" />
                <PlainsForm />
            </div>
            
        );
    }
};