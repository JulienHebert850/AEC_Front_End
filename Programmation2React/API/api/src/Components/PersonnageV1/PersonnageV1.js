import React from 'react';



export class PersonnageV1 extends React.Component { 

    constructor(props) { 
    
    super(props); 
    
    this.state = {data : []}; 
    
    } 
    
     
              //ComponentDidMount est appelé une fois que le component a été rendu une première fois. 
    
    componentDidMount(){ 
    
    fetch('https://swapi.dev/api/people/1/') 
    
    .then(res => res.json()) 
    
    .then(json => this.setState({ data: json })); 
    
    } 
    
     
     
    
    render() { 
    
    console.log(this.state.data); 
    
    return ( 
    
    <> 
    
    <h1>{this.state.data.name}</h1> 
    
    <h1>{this.state.data.height}</h1> 
    
    <h1>{this.state.data.films}</h1> 
    
    </> 
    
    ); 
    
    } 
    
    } 