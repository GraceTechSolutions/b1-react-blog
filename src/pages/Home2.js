import axios from 'axios';
import React, { Component } from 'react';


let userUrl = 'https://jsonplaceholder.typicode.com/users'


export default class Home2 extends Component {
    constructor(props){
        super(props);
        // this.state
        this.state = {user: []};
    }

    componentDidMount() {
        // this.setState({user: [1,2,3,4]})
        const getdata = async () =>{
            let request = await axios.get(userUrl)
            let data = request.data
            this.setState({user: data})
        }
        getdata();
    }

  render() {
    return <div>
        {
            this.state.user.map(usr => (
                <h1 key={usr.id}>{usr.id} | {usr.name}</h1>
            ))
        }
    </div>;
  }
}
