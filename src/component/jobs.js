import { useEffect, useState } from 'react';

const Jobs = () => {
    const [ shown, setShown ] = useState(false);
    const [ tip, setTip ] = useState(null)
    useEffect(() => {
        document.getElementById('jobsTitle').addEventListener('click', () => {
            handleClick();
        })
        document.getElementById('jobsTitle').addEventListener('mouseover', () => {
            handleMouseover();
        })
        return document.getElementById('jobsTitle').removeEventListener('click', () => {
            handleClick();
        })
    },[shown])

    const handleClick = () => {
        setShown(!shown);
        setTip(null)
    }
    const handleMouseover = () => {
        setTip("But you can show me by clicking the Title")
       
    }
    return(
       <div className="jobsHomepage">
           <h2 id="jobsTitle" className="title">EXPERIENCES PROFESIONNELLES</h2>
           {shown ? <div className="hide">
                <div className="job1">
                        <h3>Directeur Technique Evenementiel</h3>
                        <h4>Webedia, Armateam | 2017 - 2020</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ipsa esse consequuntur, error consequatur harum amet voluptatem dicta, facere, consectetur soluta molestiae. Atque cumque vitae aliquam est excepturi rem deleniti!</p>
                </div>
                <div className="job2">
                        <h3>Responsable de Production Audiovisuelle</h3>
                        <h4>Ionis, Epitech | 2017 - 2019</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, a. Libero, ducimus beatae itaque nobis porro quaerat officia iste eveniet ab tempora nesciunt ut quibusdam accusamus dicta sed, magni aperiam.</p>
                </div>
                <div className="job3">
                    <h3>Joueur professionnel </h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nesciunt, odio earum quos voluptatem perspiciatis accusantium dolor autem. Fugiat eligendi magni laborum impedit deserunt voluptatum accusamus soluta quibusdam nobis praesentium?</p>

                </div>
                    <div className="job4">
                        <h3>BAFA</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa excepturi adipisci quod cumque quibusdam dicta animi doloribus consequuntur rem nulla quam, voluptatem laboriosam recusandae praesentium sed aspernatur voluptates architecto saepe.</p>
                </div>
            </div>:
            <p id="p-hidden">I'm Well Hidden. {tip}</p>}
       </div>
    )
}

export default Jobs;