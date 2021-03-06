import MobileNav from "../Components/MobileNav";
import Nav from "../Components/Nav";

const AnmalanSucceeReserv = () => {
    return (
        <div className="center-page">
            <Nav />
            <MobileNav />
        
            <div className="page-content">
                <div className="page-content-container"> 
                    <div className="page-content-center">
                        <div className="center-container">
                            <div>
                            <h2 className="page-content-title">Tack för din anmälan till TFs 150:nde årsfest!</h2>
                            <br></br>
                            <h2 className="page-content-title">Din anmälan har tagits emot och Ni har placerats på reservlistan.</h2>
                            <br></br>
                            <p className="page-content-list">Vi fyller på lediga platser till årsfesten från reservlistan i den ordning som anmälningarna gjorts.</p>
                            <p className="page-content-list">Ni blir kontaktade via epost ifall Ni rymms med på årsfesten.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnmalanSucceeReserv;