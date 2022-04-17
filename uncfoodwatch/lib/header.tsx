import styles from '../styles/HeaderStyle.module.css' // Here is the style for the Header
import type { NextPage } from 'next'
import { useAuth } from '../context/AuthUserContext';


const Header = ({ pageTitle }) => { 
    const { authUser, loading } = useAuth();
    const remainder = authUser || loading;
    const { signOut } = useAuth();
    return (
        <nav className={styles.mainnav}>
                    <div className={styles.titleNav}>
                        <a>{ pageTitle }</a>
                    </div>

                    <div className={styles.navItem}>
                        <a href="#home">Home</a>|
                        {(() => {
                          if (remainder) {
                            return (<div><a href="account">Account</a>|
                             <a href="home">Sign Out</a></div>)
                          } else {
                            return (
                            <div><a href="login">Login</a>|
                            <a href="auth">Sign up</a></div>
                            )
                          }
                        })()}
                    </div>
                </nav>
    )
}


export default Header;

