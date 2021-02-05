import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { theLocation } from '../actions';

import { motion  } from 'framer-motion';
import { pageVariants, pageTransition } from '../transition/';

import passion1 from '../img/museum.jpg';
import squat from '../img/squat.jpg';
import gaming from '../img/gaming-2.jpg';
import book from '../img/books.jpg';


const Passions = () => {
    
    const action = useDispatch();
    const location = useLocation();
    action(theLocation(location.pathname))

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
                                <Link style={{ textDecoration: "none" }} id="nav-passions" to='/passions' >Passions </Link>
                            
                        </div> */}
                        <div className="dashboardPassion"></div>
                            <div className="passion1">
                                <p>Passioné de Paléoanthropologie et d'Evolution depuis toujours. J'ai longtemps envisagé de faire des études dans la science, seulement la vie en aura décidé autrement, pour autant je passe du temps à lire des ouvrages ainsi que quand je le peux suivre des cours au College de France sur ces Sujet. Darwin, Dawkings, Gould.. </p>
                                <img src={passion1} alt="" className="paleo"/>
                            </div>
                            <div className="passion2">

                                <img src={squat} alt="" className="sport"/>
                                <p>Toujours habité par l'envie de faire plus et mieux. Je suis tombé amoureux d'une discipline diablement douleureuse, le powerlifting. Cette denirere m'a appris la discipline de l'effort, de la remise en question et du dépassage de soi.</p>
                                
                            </div>
                            <div className="passion3">
                                <p>Une période révolue dans laquelle j'eu atteins les sommets de l'Esport Francais. Adepte de RTS, j'ai nommé Warcraft III puis Starcraft II, j'ai été un membre actif pendant presque 10 ans de le Team millenium comme joueur semi-pro</p>
                                <img src={gaming} alt="" className="esport"/>
                            </div>
                            <div className="passion4">
                                <img src={book} alt="" className="books"/>
                                <p>Le départ fût lent, mais bel et bien prenant. J'ai découvert la lécture tard, grâce au Da vinci code mais cet amour de m'a jamais abandonné, adepte des thrillers et policier, particulierement Americains et en anglais. (Connelly, Coben, Grisham, Baldacci, Ellory.. mais aussi Francais, Thilliez et Chattam (de moins en moins)).</p>
                            </div>
                            <div className="infos">
                             
                            </div>
                    </section>
                </main>
                
        </motion.div>
    )
}

export default Passions;