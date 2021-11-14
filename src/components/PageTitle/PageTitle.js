import { CgDarkMode } from 'react-icons/cg';

import classes from './PageTitle.module.css';

export default function PageTitle(props) {

    function changeCss () {
        console.log(document.querySelector("#main").scrollY)
        var navElement = document.querySelector("#icon");
        document.querySelector("#main").scrollY > 50 ? navElement.classList=[classes.Icon, classes.IconScrolled].join(" ") : navElement.classList=[classes.Icon].join(" ");
    }
    
    window.addEventListener("scroll", changeCss , false);    

    return (
        <div className={classes.title}>
            <h1>Hello Friend</h1>
            <CgDarkMode id="icon" className={classes.Icon} onClick={props.changeMode}>Change Mode</CgDarkMode>
        </div>
    )
}