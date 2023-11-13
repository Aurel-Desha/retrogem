import './BodyGen.scss';
import cardPu from './cardPublic/cardPublic';
import Intro from '../Introduc/Introduc';

const BodyGen = () => {

    return (
        <div className='mainbod'>
            <div className="bod">
                <div className='container'  style={{backgroundImage:`url("/market.jpg")`}}>
                    <h1 style={{ textAlign: 'center', marginTop: '30px', fontSize: '30px', fontWeight: '900' }}>Hello!! Toutes nos actualités et Mags du momment</h1>
                    <div className='content'>
                        <div className='img-actu'>
                            <div className='imag'>
                                <img src="/ps4Game.jpeg" alt="" />
                            </div>
                            <div className='act'>
                                <h1>Voici le titre</h1>
                                <p>voici nos annonce</p>
                                <p>voici la date</p>
                            </div>
                        </div>

                        <div className='img-actu'>
                            <div className='imag'>
                                <img src="/COD.jpg" alt="" />
                            </div>
                            <div className='act'>
                                <h1>Voici le titre</h1>
                                <p>voici nos annonce</p>
                                <p>voici la date</p>
                            </div>
                        </div>

                        <div className='img-actu'>
                            <div className='imag'>
                                <img id='bandit' src="/storm.jpg" alt="" />
                            </div>
                            <div className='act'>
                                <h1>Voici le titre</h1>
                                <p>voici nos annonce</p>
                                <p>voici la date</p>
                            </div>
                        </div>

                        <div className='img-actu'>
                            <div className='imag'>
                                <img src="/mario.jpg" alt="" />
                            </div>
                            <div className='act'>
                                <h1>Voici le titre</h1>
                                <p>voici nos annonce</p>
                                <p>voici la date</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default BodyGen;