import React from 'react'
import { Helmet } from 'react-helmet'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import Toggle from 'material-ui/Toggle'
import Checkbox from 'material-ui/Checkbox'

class Contact extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname: '',
            name: '',
            street: '',
            newsletter: false,
            email: '',
            billing: false
        }
    }

    handleInputChange = (event) => {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [target.name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        // TODO handle fom data from this.state
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>Contact - My Reactplay Ground</title>
                    <meta name="description" content="My Reactplay Ground - Contactpage" />
                </Helmet>
                <h1>Contact</h1>
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        onChange={this.handleInputChange}
                        hintText="Please enter your Firstname"
                        floatingLabelText="Firstname"
                        fullWidth={true}
                        name="firstname"
                    />
                    <TextField
                        onChange={this.handleInputChange}
                        hintText="Please enter your Name"
                        floatingLabelText="Name"
                        fullWidth={true}
                        name="name"
                        // errorText="Please put in your Name"
                    />
                    <TextField
                        onChange={this.handleInputChange}
                        hintText="Please enter your Street"
                        floatingLabelText="Street"
                        fullWidth={true}
                        name="street"
                    />
                    <TextField
                        onChange={this.handleInputChange}
                        hintText="Please enter your Email"
                        floatingLabelText="Email"
                        fullWidth={true}
                        name="email"
                    />
                    <Checkbox
                        onCheck={this.handleInputChange}
                        label="Newsletter"
                        name="newsletter"
                    />
                    <Toggle
                        onToggle={this.handleInputChange}
                        label="Label on the right"
                        name="billing"
                        labelStyle={{textAlign: 'right'}}
                    />
                    <RaisedButton
                        label="Primary"
                        primary={true}
                        fullWidth={true}
                        type="submit"
                    />
                </form>
            </div>
        )
    }
}


export default Contact