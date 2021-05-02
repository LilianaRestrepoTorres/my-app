import React from 'react'

import './styles/Badges.css'
import confLogo from '../images/badge-header.svg'
import BadgesList from '../components/BadgesList';
import { Link } from 'react-router-dom';


class Badges extends React.Component{
    
    constructor(props) {
        super(props)
        console.log('1. Constructor()')

        this.state = {
            data: []
        }
    }

    componentDidMount(){
        console.log('3. componentDidMount()')

        this.timeoutId = setTimeout(() => {
            this.setState({
                loading: true,
                error: null,
                data: undefined
            })
        }, 3000)

        this.fetchData()

    }

    fetchData = () =>{
        this.setState({loading: true, error: null})

        try{
            const data = []
            this.setState({loading: false, data: data})
        }catch(error){
            this.state({loading: false, error: error})
        }
    }

    componentDidUpdate(prevProps, prevState){
        console.log('5. componentDidUpdate()')
        console.log({
            prevProps: prevProps,
            prevState: prevState
        })

        console.log({
            props: this.props,
            state: this.state
        })

    }

    componentWillUnmount(){
        console.log('6. componentWillUnmount')
        clearTimeout(this.timeoutId)
    }


    render(){
        if(this.state.loading === true){
            return 'Loading...'
        }

        console.log('2/4. render()')
        return(
            <React.Fragment>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img className="Badges_conf-logo" src={confLogo} alt="Conf Logo"/>

                        </div>
                    </div>
                </div>

                <div className="Badges__container">
                    <div className="Badges__buttons">
                        <Link to="/badges/new" className="btn btn-primary">
                            New Badge
                        </Link>
                    </div>
                    <div className="Badges__list">
                        <div className="Badges__container">
                            <BadgesList badges={this.state.data}/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
    
}

export default Badges;