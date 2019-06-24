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

    toggleAddButton = (e) => {
        let element = document.querySelector('.form-div');
        element.classList.toggle('hide')
        if (element.classList.contains('hide')) {
            e.target.textContent = '+ Add Now';
        } else {
            e.target.textContent = 'Cancel';
        }
    }

    emptyFields = (grp) => {
        let {name, email, phone} = this.state;

        grp.forEach(item => {
            document.getElementById(item).value = '';
        });
        this.setState({
            name: '',
            email: '',
            phone: '',
        })
    }

    saveContact = () => {
        let obj = {};
        if (this.state.name && this.state.email && this.state.phone) {
            obj.name = this.state.name;
            obj.email = this.state.email;
            obj.phone = this.state.phone;
            obj.id = this.state.phone;
            console.log(this.state.contacts);
        }

       if (!localStorage.getItem('contacts')) {
            localStorage.setItem('contacts', '[]');
            let arrFromStorage = localStorage.getItem('contacts');
            let parsed = JSON.parse(arrFromStorage);
            parsed.push(obj);
            localStorage.setItem('contacts', JSON.stringify(parsed));
       } else {
           let contact = localStorage.getItem('contacts');
           let contacts = JSON.parse(contact);
           console.log(contacts);
           
           contacts.push(obj);

           localStorage.setItem('contacts', JSON.stringify(contacts));
            let x = localStorage.getItem('contacts');
       }
        

        this.emptyFields(['name', 'email', 'phone']);
    };

    displayDetails = (e) => {
        e.preventDefault();
        let elem = document.getElementById('details');
        elem.textContent = '';
        
        let fromStorage = localStorage.getItem('contacts');
        let res = JSON.parse(fromStorage);
        if (elem.innerHTML === '') {
            res.forEach(contact => {
                let newElem = document.createElement('DIV');
                newElem.setAttribute('id', contact.id);
                newElem.classList.add('bgc');
                let name = document.createElement('H4');
                name.textContent = 'Name: ';
    
                let email = document.createElement('H4');
                email.textContent = 'Email: ';
    
                let phone = document.createElement('H4');
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
                <div className="header">
                    <h1 style={style.heading}>Address Book</h1>
                    <hr />
                </div>
                <div><button onClick={this.toggleAddButton} style={style.btn}>Cancel</button></div>

                <Form onChange={this.handleChange}
                    onClick={this.saveContact}    />

                <Details id="details"
                    onClick={this.displayDetails}/>

                {/* <List 
                   name={name}
                   email={email}
                   phone={phone} /> */}
            </div>
        );
    }
}

export default Heading;