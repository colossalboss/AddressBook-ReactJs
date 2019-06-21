import React from 'react';
import Form from './Form';
import List from './List';
import Buttons from './Buttons';
import InputField from './InputField';
import style from './style';


class Heading extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            name: '',
            email: '',
            phone: '',
            contacts: [],
        };

        this.handleChange = this.handleChange.bind(this)
    };


    handleChange = (e) => { 
        if (e.target.name === 'name') {
            this.setState({
                name: e.target.value,
            });
        } else if (e.target.name === 'email') {
            this.setState({
                email: e.target.value,
            });
        } else {
            this.setState({
                phone: e.target.value,
            });
        }
    };

    saveContact = () => {
        let obj = {};
        if (this.state.name && this.state.email && this.state.phone) {
            obj.name = this.state.name;
            obj.email = this.state.email;
            obj.phone = this.state.phone;
            this.state.contacts.push(obj);
        }
        console.log(this.state.contacts);
        
    }
    
    render() {
        // console.log(this.state.contacts, 'name');
        
        let { name, email, phone } = this.state;
        return (
            <div>
                <div>
                    <h1 style={style.heading}>Address Book {name}</h1>
                </div>
                <div><button style={style.btn}>+ Add</button></div>

                <Form onChange={this.handleChange}/>
                
                <Buttons onClick={this.saveContact}/>

                <List 
                   name={name}
                   email={email}
                   phone={phone} />
            </div>
        );
    }
}

export default Heading;