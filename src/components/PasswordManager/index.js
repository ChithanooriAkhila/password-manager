import {Component} from 'react'
import './index.css'
import LoginForm from '../LoginForm'
import YourPasswords from '../YourPasswords'

class PasswordManager extends Component {
  state = {users: []}

  addPasswordUser = obj => {
    this.setState(prevState => ({users: [...prevState.users, obj]}))
  }

  onRemoveUser = id => {
    const {users} = this.state
    const filteredUsers = users.filter(user => user.id !== id)
    this.setState({users: filteredUsers})
  }

  render() {
    const {users} = this.state
    return (
      <div className="main-container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="website-logo"
          />
        </div>
        <LoginForm addPasswordUser={this.addPasswordUser} />
        <YourPasswords users={users} removeUser={this.onRemoveUser} />
      </div>
    )
  }
}

export default PasswordManager
