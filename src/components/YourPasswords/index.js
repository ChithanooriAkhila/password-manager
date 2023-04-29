import {Component} from 'react'
import './index.css'
import Password from '../Password'

class YourPasswords extends Component {
  state = {searchValue: '', showPassword: false}

  onSearch = event => {
    this.setState({searchValue: event.target.value})
  }

  onDeleteUser = id => {
    const {removeUser} = this.props
    removeUser(id)
  }

  renderNoPasswordView = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
        alt="no passwords"
        className="no-password-img"
      />
      <p>No Passwords</p>
    </div>
  )

  showPasswords = () => {
    this.setState(prev => ({showPassword: !prev.showPassword}))
  }

  render() {
    const {users} = this.props
    const {searchValue, showPassword} = this.state
    const searchResults = users.filter(user =>
      user.website.toLowerCase().includes(searchValue.toLowerCase()),
    )

    return (
      <div className="passwords-container">
        <div className="header">
          <h1 className="heading">
            Your Passwords
            <p className="badge-password-count">{searchResults.length}</p>
          </h1>
          <div className="input-field">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
              alt="search"
              className="input-field-icon"
            />
            <input
              type="search"
              placeholder="Search"
              onChange={this.onSearch}
            />
          </div>
        </div>
        <hr className="horizontal-line" />

        <div className="checkbox-show-passwords">
          <input type="checkbox" id="passwords" onChange={this.showPasswords} />
          <label htmlFor="passwords">Show Passwords</label>
        </div>
        <ul className="all-passwords-container">
          {searchResults.length === 0
            ? this.renderNoPasswordView()
            : searchResults.map(password => (
                <Password
                  passwordDetails={password}
                  key={password.id}
                  deleteUser={this.onDeleteUser}
                  showPassword={showPassword}
                />
              ))}
        </ul>
      </div>
    )
  }
}

export default YourPasswords
