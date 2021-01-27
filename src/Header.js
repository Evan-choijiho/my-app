import React, {useContext} from 'react';
import { GameContext } from "./TTTStore";

const Header = () => {
    const {status} = useContext(GameContext);

    return (
        <div>
           <div className="header">
                <p>{status}</p>
            </div> 
        </div>
    );
}

export default Header;