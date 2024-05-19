import './index.css'

const PasswordItems = props => {
  const {passwordElement, isChecked, onDelete} = props
  const {website, username, password, id} = passwordElement
  const profile = username[0].toUpperCase()

  const onDeleteButton = () => {
    onDelete(id)
  }

  return (
    <li className="list-item">
      <div className="password-storage">
        <p>{profile}</p>
        <div>
          <p>{website}</p>
          <p>{username}</p>
          <p>
            {!isChecked ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
                alt="stars"
                className="star-img"
              />
            ) : (
              password
            )}
          </p>
        </div>
        <button type="button" data-testid="delete" className="button-btn">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="delete-icon"
            onClick={onDeleteButton}
          />
        </button>
      </div>
    </li>
  )
}

export default PasswordItems
