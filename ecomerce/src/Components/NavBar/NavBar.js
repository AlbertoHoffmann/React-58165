import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return(
        <nav>
            <h3>Ecomercer</h3>
            <div>
                <button>Ayuyas</button>
                <button>Marraquetas</button>
                <button>Dobladitas</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar