import React from "react";

class UserDetails extends React.Component{
    constructor(){
        super();
        this.state = {
            usernames: [],
        };
    }

    componentWillMount(){
        console.log("very first")
        fetch("https://randomuser.me/api/?results=50")
        .then(results => {
            return results.json();
        }).then(data => {
            //console.log(data.results);
            console.log("first")
            const usernames =  data.results.map((user, index) => {
                return (
                    <tr key={index}><td>{user.name.first}</td><td>{user.name.last}</td><td>{user.email}</td></tr>
                )
                // console.log(user.name.first)
                });
            this.setState({ usernames });
        })
    }

    render(){
        console.log('second');
        return (
            <div className="output">
                <table border="1">
                    <thead>
                    <tr>
                        <th>First</th><th>Last</th><th>Email</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.state.usernames}
                    </tbody>
                </table>
            </div>
        )
    }

}

export default UserDetails;