import React from 'react'
import { Link } from 'react-router-dom';

import "./styles/BadgesList.css";

class BadgesList extends React.Component{
    render(){
        if (this.props.badges.length === 0){
            return(
                <div>
                    <h3>
                        No badges were found
                    </h3>
                    <Link className="btn btn-primary" to="/badges/new">
                        Create new badge
                    </Link>
                </div>
            )
        }
        return(
            <ul className="list-unstyled">
                {this.props.badges.map((badge) => {
                    return (
                        <li className="BadgesList" key={badge.id}>
                            <p className="BadgesListItem">
                                <img src={badge.avatarUrl} alt="Avatar" className="BadgesListItem__avatar"/>
                                <div>
                                    <div><strong>{badge.firstName} {badge.lastName}</strong></div>
                                    <div className="Twitter__name">
                                        @{badge.twitter}
                                    </div>
                                    <div>{badge.jobTitle}</div>
                                </div>
                            </p>
                            
                        </li>
                    )
                })}
            </ul>
        )
    }

}

export default BadgesList;