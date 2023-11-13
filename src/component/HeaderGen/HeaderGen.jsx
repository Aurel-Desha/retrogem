import './HeaderGen.scss';

const { default: Navbar } = require("../navbar/navbar")
const { default: Intro } = require("../Introduc/Introduc")
const HeaderGen = () => {
    return (
        <>
            <div className="main_header">
                <video id='vid' src="/videoRetro.mp4" autoPlay muted loop></video>
                <Navbar />
                <Intro />
            </div>
        </>

    )
}

export default HeaderGen;