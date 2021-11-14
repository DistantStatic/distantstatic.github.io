import { CgDarkMode } from 'react-icons/cg';

import classes from './PageTitle.module.css';

export default function PageTitle({changeMode}: {changeMode: ()=>void}) {

    return (
        <div className={classes.title}>
            <h1>Hello Friend</h1>
            <CgDarkMode id="icon" className={classes.Icon} onClick={() => changeMode()}>Change Mode</CgDarkMode>
        </div>
    )
}