import {Component} from 'react'
import {v4 as uuid} from 'uuid'
import './index.css'

class LoginForm extends Component {
  state = {
    website: '',
    username: '',
    password: '',
  }

  onChangeWebsite = event => {
    this.setState({website: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  addPassword = event => {
    event.preventDefault()
    const id = uuid()
    const {website, username, password} = this.state
    const obj = {id, website, username, password}
    const {addPasswordUser} = this.props
    console.log(obj)
    addPasswordUser(obj)
    this.setState({website: '', username: '', password: ''})
  }

  render() {
    const {website, username, password} = this.state
    return (
      <div className="login-form-container">
        <div className="add-password-container">
          <h1>Add New Password</h1>
          <form onSubmit={this.addPassword}>
            <div className="input-field">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="input-field-icon"
              />
              <input
                type="text"
                placeholder="Enter Website"
                onChange={this.onChangeWebsite}
                value={website}
              />
            </div>
            <div className="input-field">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="input-field-icon"
              />
              <input
                type="text"
                placeholder="Enter Username"
                onChange={this.onChangeUsername}
                value={username}
              />
            </div>
            <div className="input-field">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="input-field-icon"
              />
              <input
                type="password"
                placeholder="Enter Password"
                onChange={this.onChangePassword}
                value={password}
              />
            </div>
            <div className="add-button-container">
              <button type="submit" className="add-button">
                Add
              </button>
            </div>
          </form>
        </div>

        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png "
            alt="password manager"
            className="login-form-img"
          />
        </div>
      </div>
    )
  }
}

export default LoginForm
