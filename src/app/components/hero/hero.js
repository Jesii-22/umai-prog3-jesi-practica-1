import styles from './hero.module.css'
import Image from 'next/image';

const Hero = ({ imagen, alt, title }) => {
    return (
      <div className={styles.container}>
      <Image width={100} height={100} src={imagen} alt={alt} /> 
      <div>
          {/* <h3>{title}</h3> */}
      </div>
  </div>  
    );
  };
  

export default Hero;
