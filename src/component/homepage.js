import littleLeif  from '../img/moi-1.jpg';
import Leif from '../img/moi-2.jpg';
import link from '../img/link.png';
import Ski from '../img/ski-2.jpg';

import { pageVariants, pageTransition } from '../transition';
import { useState, useEffect } from 'react';
import { motion  } from 'framer-motion';


const Homepage = () => {
    const [ item, setItem ] = useState();
    useEffect(() => {
        const profile = document.getElementById("TURN");
        setItem(profile)
    },[])
    
    item && item.addEventListener("mousemove", (e)=> {
        let xAxis = (window.innerWidth / 2 - e.pageX) / 15;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 15;
        item.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    })

    item && item.addEventListener("mouseleave", (e) => {
        item.style.transform = 'rotateX(0deg) rotateY(0deg)';
    })
    return(
        <motion.div className="homepage"
        initial='out'
        exit='out'
        animate='in'
        variants={pageVariants}
        transition={pageTransition}>
          
                <main>
                    <section id="TURN" className="glass">
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