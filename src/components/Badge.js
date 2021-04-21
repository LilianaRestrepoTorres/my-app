import React from 'react';

import confLogo from '../images/badge-header.svg';

class Badge extends React.Component{
    render(){
        return (
            <div>
                <div>
                    <img src={confLogo} alt="Logo de la conferencia"></img>
                </div>

                <div>
                    <img src="" alt="Avatar"></img>
                    <h1>Liliana <br/> Restrepo</h1>
                </div>

                <div>
                    <p>Fronted Engineer</p>
                    <p>@lilirestrepot</p>
                </div>

                <div>
                    #platziconf
                </div>
            </div>
        )
    }

}

export default Badge;