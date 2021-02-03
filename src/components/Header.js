import React from 'react';

class Navbar extends React.Component {
    render() {
        return (
            <div>
                <div className="jumbotron">
                
                <div className=" form-inline">
                <h2>Search for your favourite Restaurants</h2>
                <input type="text" id="city" placeholder="Enter city"
                 onChange={this.props.getdata}/>

                    {/* <input type="text" id="name" placeholder="Restaurant Name"
                     onChange={this.props.getdata} /> */}
                    &nbsp;&nbsp;
                    <button type="submit" className="btn btn-danger"
                        onClick={this.props.gofetch}>Search</button>
                </div>
                </div>
                <hr />
            </div>
        );
    }
}

export default Navbar;