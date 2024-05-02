import NavMenu from "./NavMenu";
import styles from "./NavBar.module.css";


const NavBar = () => {
    return (
        <header className={styles.container}>
            <img src={'https://www.maybelline.com.ar/-/media/project/lore…go-small.svg?rev=e3d9e916b78047419b2d95c53dae0144'} alt="Logo" className={styles.logo} /> {/* Aquí agregamos la imagen */}
            <nav className={styles.menu}>
                <NavMenu />
            </nav>
        </header>
    );
};

export default NavBar;
