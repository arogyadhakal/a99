import styles from '../styles/HeaderStyle.module.css' // Here is the style for the Header

const Header = ({ pageTitle }) => {
    return (
        <nav className={styles.main_nav}>
            <div className={styles.title_nav}>
                <a>{ pageTitle }</a>
            </div>

            <div className={styles.nav_item}>
                <a href='home'>Home</a> |
                <a href='profile'>Profile</a>
            </div>
        </nav>
    )
}
export default Header;


// finish header
// add profle page
// connect auth with profile
