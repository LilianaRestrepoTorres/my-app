import React from 'react';

class BadgeForm extends React.Component{
    handleChange = (e) => {
        console.log({ value: e.target.value });
    }

    render(){
        return(
            <div>
                <h1>New Attendant</h1>

                <form>
                    <div className="form-group">
                        <label>First Name</label>
                        <input onChange={this.handleChange} className="form-control" type="text" name="firstName"/>

                    </div>
                    <button className="btn btn-primary">Save</button>

                </form>
            </div>
        )

    }
}

export default BadgeForm;