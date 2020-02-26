import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class FriendForm extends React.Component {
    state = {
        addFriend: {
            name: '',
            age: '',
            email: ''
        }
    };

    handleChange = e => {
        this.setState({
            addFriend: {
                ...this.state.addFriend,
                [e.target.name]: e.target.value
            }
        });
    };

    addNewFriend = e => {
        axiosWithAuth()
            .post('/api/friends', this.state.addFriend)
            .then(res => {
                this.setState({ addFriend: [...res.data] })
            })
            .catch(err => console.log('Post error', err));
    };

    render() {
        return (
            <div className='friend-form'>
                <form onSubmit={this.addNewFriend}>
                    Name:
                    <input
                        type='text'
                        name='name'
                        label='Name'
                        defaultValue={this.state.addFriend.name}
                        onChange={this.handleChange}
                    />
                    Age:
                    <input
                        type='text'
                        name='age'
                        label='Age'
                        defaultValue={this.state.addFriend.age}
                        onChange={this.handleChange}
                    />
                    Email:
                    <input
                        type='text'
                        name='email'
                        label='Email'
                        defaultValue={this.state.addFriend.email}
                        onChange={this.handleChange}
                    />
                    <button type='submit'>Add Friend</button>
                </form>
            </div>
        );
    }
}

export default FriendForm;