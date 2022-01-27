import { useState } from "react";

const MobileNav = () => {
    const [showMobile, setShowMobile] = useState(false);

    return (
        <>
        <div class="mobile-header">
            <img id="navMenuIcon" src="./assets/menu.svg" class="menu"></img>
            <a href="./index.html">
                <h1 class="mobile-nav-header">
                TF 150
                </h1>
            </a>
        </div>
        <div id="mobileNav" class="mobile-nav-container">
            <img id="navMenuClose" src="./assets/close.svg" class="menu-close"></img>
            <ul class="nav-ul">
                <li class="nav-li">
                <a href="./registration.html">Deltagaranmälan</a>
                </li>
                <li class="nav-li">
                <a href="./index.html">Basinfo</a>
                </li>
                <li class="nav-li">
                <a href="./photoinfo.html">Fotoinfo</a>
                </li>
                <li class="nav-li">
                <a href="./coronainfo.html">Coronainfo/FAQ</a>
                </li>
                <li class="nav-li">
                <a href="./fundraising.html">Fundraising</a>
                </li>
                <li class="nav-li">
                <a href="./historik.html">Historik</a>
                </li>
                <li class="nav-li">
                <a href="./vettoetikett.html">Vett och Etikett</a>
                </li>
            </ul>
        </div>
        </>
    )
}

export default MobileNav;