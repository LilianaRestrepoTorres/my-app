import React from 'react';

import  './styles/BadgeNew.css'
import header from '../images/badge-header.svg';
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';

class BadgeNew extends React.Component{
    render(){
        return(
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo"/>

                </div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge 
                                firstName = "Liliana"
                                lastName = "Restrepo"
                                twitter ="lilirestrepot"
                                jobTitle ="Frontend Engeneer"
                                avatarUrl = "https://s.gravatar.com/avatar/da73277848b527cfa25ed0e5cce89a33?s=80"
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeNew;