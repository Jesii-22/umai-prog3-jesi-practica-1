import styles from './hero.module.css'

const Hero = ({ imagen, alt, title }) => {
    return (
      <div className={styles.container}>
      {/* <img src={imagen} alt={alt} /> */}
      <div>
          {/* <h3>{title}</h3> */}
      </div>
  </div>  
    );
  };
  

export default Hero;
