import styles from './Footer.module.css'

const Footer = () => {

    return(
        <div className={styles.containerfooter}>
            <adress>
                <a>
                https://www.maybelline.com.ar/?gad_source=1&gclid=CjwKCAjw88yxBhBWEiwA7cm6pTDOQDrAQY7JIqlbV_DhTpus90ZLN79M7Tu7HV6dyuFm-S60N6FHjRoCuOkQAvD_BwE&gclsrc=aw.ds
                </a>
            </adress>

            <nav className={styles.menufooter}>
                <ul>
                    <li><a>join us</a></li>
                    <li><a>about</a></li>
                </ul>
            </nav>

        </div>
    )
}

export default Footer