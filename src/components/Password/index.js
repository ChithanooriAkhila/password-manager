import './index.css'

const Password = props => {
  const {passwordDetails, showPassword, deleteUser} = props
  const {id, website, username, password} = passwordDetails
  const initial = website[0]

  const deleteUserPassword = () => {
    deleteUser(id)
  }

  return (
    <li className="password-container">
      <div className="initial-container">
        <h1>{initial}</h1>
      </div>
      <div>
        <p>{website}</p>
        <p>{username}</p>
        {showPassword ? (
          <p>{password}</p>
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
            className="password-img"
          />
        )}
      </div>
      <div>
        <button type="button" data-testid="delete" onClick={deleteUserPassword}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default Password
