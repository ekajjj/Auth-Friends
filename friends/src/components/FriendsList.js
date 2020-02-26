import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import FriendForm from './FriendForm';

class FriendsList extends React.Component {
    state = {
        friends: []
    };

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        axiosWithAuth()
            .get('/api/friends')
            .then(res => {
                console.log('Get response', res);
                this.setState({
                    friends: res.data
                });
            })
            .catch(err => console.log('Data error', err));
    };

    render() {
        return (
            <>
                <FriendForm />
                <div className='friends-list'>
                    {this.state.friends.map(friend => {
                        return (
                            <div className='friend-card' key={friend.id}>
                                <h2>{friend.name}</h2>
                                <p>Age: {friend.age}</p>
                                <p>email: {friend.email}</p>
                            </div>
                        );
                    })}
                </div>
            </>
        );
    }
}
export default FriendsList;