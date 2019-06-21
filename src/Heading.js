import React from 'react';
import Form from './Form';
import List from './List';
import Buttons from './Buttons';
import InputField from './InputField';
import Details from './Details';
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
            console.log(this.state.contacts);
        }
    };

    displayDetails = () => {
        let elem = document.getElementById('details');
        elem.textContent = '';
        
        if (elem.innerHTML === '') {
            this.state.contacts.forEach(contact => {
                let newElem = document.createElement('DIV');
                newElem.classList.add('bgc');
                let name = document.createElement('H2');
                name.textContent = 'Name: ';
    
                let email = document.createElement('H2');
                email.textContent = 'Email: ';
    
                let phone = document.createElement('H2');
                phone.textContent = 'Phone: ';
    
                name.textContent += contact.name;
                email.textContent += contact.email;
                phone.textContent += contact.phone;
                console.log(contact.name);
                
    
                newElem.appendChild(name);
                newElem.appendChild(email);
                newElem.appendChild(phone);
                elem.appendChild(newElem);
            });
        }
    }
    
    render() {
        // console.log(this.state.contacts, 'name');
        
        let { name, email, phone, contacts } = this.state;
        return (
            <div>
                <div>
                    <h1 style={style.heading}>Address Book {name}</h1>
                </div>
                <div><button style={style.btn}>+ Add</button></div>

                <Form onChange={this.handleChange}/>
                
                <Buttons onClick={this.saveContact} />

                <Details id="details"
                    onClick={this.displayDetails}/>

                <List 
                   name={name}
                   email={email}
                   phone={phone} />
            </div>
        );
    }
}

export default Heading;