import './navbar.scss'

const Navbar = () =>{
    const menu =  [
        {text: "A PROPOS", link:"#"},
        {text: "MARKETPLACE", link:"#"},
        {text: "ACTUALITÉS", link:"#"},
        {text: "GRADING", link:"#"},
    ]

    return (
        <div className='navb'>
            <nav>
                <div className='logo'>
                    <img src="/logo.png" alt="logo" />
                </div>
                <ul>
                    {
                        menu.map((elt, index) => (
                            <li key={index}>
                                <a href={elt.link}>{elt.text}</a>
                            </li>
                        ))
                    }
                </ul>

                <div className='connexion_fav' style={{display:'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <div className='Favoris' style={{paddingRight:'20px'}}>
                        
                        <div style={{display:'flex'}}>
                            <div className='' style={{height: '20px', width:'20px',}}>
                            <img src="/heart.png" alt="" />
                        </div>
                        <p >FAVORIS</p>
                        </div>
                        
                    </div>
                    <div className='connexion' style={{color:'black'}}>
                        <button style={{backgroundColor:'white', padding:'15px'}} > 
                            CONNEXION
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;