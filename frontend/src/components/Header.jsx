import {  FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'
import './dashboard2.css';
import PersonIcon from '@mui/icons-material/Person';

function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  const profile = ()=>{
   
  }


  return (
    <header className='header'>
      <div className='logo' >
        <Link to='/'><b><h2 >Yummy Recipes</h2></b></Link>
      </div>
      <ul>
        {user ? (
          <div className='flex'>
          <li>
            <a href='frontend/src/pages/profile.jsx'><button className='btn height' onClick={profile}>
              <PersonIcon  /> Profile
            </button></a>
          </li>
          <li>
           <button className='btn height' onClick={onLogout}>
             <FaSignOutAlt  /> Logout
           </button></li>
           </div>
        ) : (
          <>
            <li>
              <Link to='/login'>
                <FaSignInAlt /> Login
              </Link>
            </li>
            <li>
              <Link to='/register'>
                <FaUser /> Register
              </Link>
            </li>
            
          </>
        )}
      </ul>
    </header>
  )
}

export default Header