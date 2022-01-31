import { Link } from "react-router-dom"

function Home() {
    return (
        <div>
            <Link to="/">Home</Link>     
            <Link to="/styled">Styled</Link>     
            <Link to="/pseudo">Pseudo</Link>     
            <Link to="/theme">Theme</Link>     
        </div>
    )


}

export default Home;