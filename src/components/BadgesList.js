import React from 'react'

import "./styles/BadgesList.css";

class BadgesList extends React.Component{
    render(){
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