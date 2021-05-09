import React from 'react'
import { Link } from 'react-router-dom';

import "./styles/BadgesList.css";
import Gravatar from './Gravatar';

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
                            <Link class="text-reset text-decoration-none" to={`/badges/${badge.id}`}>
                                <p className="BadgesListItem">
                                    <Gravatar className="BadgesListItem__avatar" email={badge.email} alt="Avatar" />

                                    <div>
                                        <div><strong>{badge.firstName} {badge.lastName}</strong></div>
                                        <div className="Twitter__name">
                                            @{badge.twitter}
                                        </div>
                                        <div>{badge.jobTitle}</div>
                                    </div>
                                </p>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        )
    }

}

export default BadgesList;