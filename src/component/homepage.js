import littleLeif  from '../img/moi-1.jpg';
import Leif from '../img/moi-2.jpg';
import link from '../img/link.png';
import Ski from '../img/ski-2.jpg';

import { pageVariants, pageTransition } from '../transition';

import { Link } from 'react-router-dom';
import { motion  } from 'framer-motion';


const Homepage = () => {
    
    return(
        <motion.div className="homepage"
        initial='out'
        exit='out'
        animate='in'
        variants={pageVariants}
        transition={pageTransition}>
          
                <main>
                    <section className="glass">
                        {/* <div className="nav">
                           
                                <Link style={{ textDecoration: "none" }} to='/' >Leif </Link>
                                <Link style={{ textDecoration: "none" }} to='/education' >Education </Link>
                                <Link style={{ textDecoration: "none" }} to='/travail' >Travail </Link>
                                <Link style={{ textDecoration: "none" }} to='/passions' >Passions </Link>
                            
                        </div> */}
                        <div className="dashboard"></div>
                            <div className="user">
                                <img src={ Leif } alt="Encore moi" className="profil"/>
                                <h3>Leif BOUTIN</h3>
                                <p>Web Developper</p>
                                <a href="https://www.linkedin.com/in/leif-boutin-34a275109/">
                                    <div className="linkedin">
                                    <img src={link} alt="logo linkedin"/>
                                    <p>Leif Boutin</p>
                                    </div>
                                </a>
                            </div>
                            <div className="infos">
                                <article>
                                « JOUEUR PROFESSIONNEL, ATHLÈTE ET
                                AUTODIDACTE : PASSION ET PERSÉVÉRANCE »

                                </article>
                            </div>
                    </section>
                </main>
                <img className="lilLeif" src={littleLeif} alt="Moi enfant"/>
                <img className="leifski" src={Ski} alt="moi ski" />
        </motion.div>
    )
}

export default Homepage;