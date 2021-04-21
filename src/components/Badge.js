import React from 'react';

import "./styles/Badge.css";
import confLogo from '../images/badge-header.svg';


class Badge extends React.Component{
    render(){
        return (
            <div className="Badge">
                <div className="Badge__header">
                    <img src={confLogo} alt="Logo de la conferencia"></img>
                </div>

                <div className="Badge__section-name">
                    <img className="Badge__avatar" src="https://s.gravatar.com/avatar/da73277848b527cfa25ed0e5cce89a33?s=80" alt="Avatar"></img>
                    <h1>Liliana <br/> Restrepo</h1>
                </div>

                <div className="Badge__section-info">
                    <h3>Fronted Engineer</h3>
                    <div>@lilirestrepot</div>
                </div>

                <div className="Badge__footer">
                    #platziconf
                </div>
            </div>
        )
    }

}

export default Badge;