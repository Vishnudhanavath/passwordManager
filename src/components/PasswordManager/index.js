import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import './index.css'

import PasswordItems from '../PasswordItems'

class PasswordManager extends Component {
  state = {
    listPassword: [],
    website: '',
    username: '',
    password: '',
    count: 0,
    isChecked: false,
    searchInput: '',
  }

  onaddPassword = event => {
    event.preventDefault()
    const {website, username, password} = this.state
    const newPassword = {
      id: uuidv4(),
      website,
      username,
      password,
    }
    this.setState(prevState => ({
      listPassword: [...prevState.listPassword, newPassword],
      count: prevState.count + 1,
      website: '',
      username: '',
      password: '',
    }))
  }

  onChangeWebsite = event => {
    this.setState({
      website: event.target.value,
    })
  }

  onChangeUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  onChecked = () => {
    this.setState(prevState => ({
      isChecked: !prevState.isChecked,
    }))
  }

  onDelete = id => {
    // const {listPassword} = this.state
    this.setState(prevState => ({
      listPassword: [
        ...prevState.listPassword.filter(eachItem => eachItem.id !== id),
      ],
      count: prevState.count - 1,
    }))
  }

  userSearch = event => {
    // const {SearchInput} = this.state
    this.setState({
      searchInput: event.target.value,
    })
  }

  //   getSeachInput = () => {
  //     const {searchInput, listPassword} = this.setState
  //     this.setState(prevState => ({
  //       listPassword: [
  //         ...prevState.listPassword.filter(eachItem =>
  //           eachItem.username.toLowerCase().includes(searchInput.toLowerCase()),
  //         ),
  //       ],
  //     }))
  //   }

  render() {
    const {
      listPassword,
      count,
      username,
      website,
      password,
      isChecked,
      searchInput,
    } = this.state
    // this.getSeachInput()
    const filteredPasswords = listPassword.filter(eachItem =>
      eachItem.username.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <>
        <div className="bg-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="app-logo"
          />
          <div className="login-bg-container">
            <form className="login-container" onSubmit={this.onaddPassword}>
              <h1 className="heading">Add New Password</h1>
              <div className="website-logo-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="website-logo"
                />
                <input
                  type="text"
                  className="userSearch"
                  placeholder="Enter Website"
                  onChange={this.onChangeWebsite}
                  value={website}
                />
              </div>
              <div className="website-logo-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="website-logo"
                />
                <input
                  type="text"
                  className="userSearch"
                  placeholder="Enter Username"
                  onChange={this.onChangeUsername}
                  value={username}
                />
              </div>
              <div className="website-logo-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="website-logo"
                />
                <input
                  type="password"
                  className="userSearch"
                  placeholder="Enter Password"
                  onChange={this.onChangePassword}
                  value={password}
                />
              </div>
              <div className="button-container">
                <button type="submit" className="add-button">
                  Add
                </button>
              </div>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
              alt="password manager"
              className="password-manager-logo"
            />
          </div>
          {/* section2 */}
          <div className="your-password-container">
            <div className="your-password">
              <div>
                <h1 className="heading">Your Passwords</h1>
                <p>{filteredPasswords.length}</p>
              </div>
              <div className="website-logo-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="website-logo"
                />
                <input
                  type="search"
                  className="userSearch"
                  placeholder="Search"
                  onChange={this.userSearch}
                  value={searchInput}
                />
              </div>
            </div>
            <hr />
            <div className="checkbox-container">
              <input
                type="checkbox"
                id="checkbox"
                className="checkbox-size"
                onChange={this.onChecked}
              />
              <label htmlFor="checkbox" className="heading">
                Show passwords
              </label>
            </div>
            <div>
              {filteredPasswords.length !== 0 ? (
                <ul className="passwords-storage-container">
                  {filteredPasswords.map(eachItem => (
                    <PasswordItems
                      passwordElement={eachItem}
                      isChecked={isChecked}
                      key={eachItem.id}
                      onDelete={this.onDelete}
                    />
                  ))}
                </ul>
              ) : (
                <div className="no-password-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                    alt="no passwords"
                    className="no-password-img"
                  />
                  <br />
                  <p className="heading">No Passwords</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    )
  }
}
export default PasswordManager
