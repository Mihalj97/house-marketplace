import { useState ,useEffect } from 'react'
import { getAuth } from 'firebase/auth'
import {useNavigate, Link} from 'react-router-dom'

function Profile() {
  const auth = getAuth()
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email
  })

  const {name, email} = formData

  const navigate = useNavigate()

  const onLogout = () => {
    auth.signOut()
    navigate('/')
  }

  return (
    <div className="profile">
      <p className="pageHeader">My Profile</p>
      <button type='button' className='logOut' onClick={onLogout}>
        LogOut
      </button>
    </div>
  )
}

export default Profile