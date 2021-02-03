import React from 'react';
import Navbar from './Header';
import DisplayCards from './AppBody';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: '', data: [] };
    //, cityids: [];
    this.ZomatoFetch = this.ZomatoFetch.bind(this);
    this.InputField = this.InputField.bind(this);
  }
  ZomatoFetch (evt) {
    evt.preventDefault();
    let query;
    if (this.state.value.name !== '' && this.state.value.city !== '') {
      query = this.state.value.city;
      fetch(`https://developers.zomato.com/api/v2.1/cities?q=${query}`, {
        headers: {
          "user-key": "90f6d5f6ac3a6e571086bee4f420a08c"
        }
      })
        .then(response => {
          response.json().then(() => {
            var query1 = this.state.value.name;
            fetch(`https://developers.zomato.com/api/v2.1/search?q=${query1}`, {
              headers: {
                "user-key": "90f6d5f6ac3a6e571086bee4f420a08c"
              }
            })
              .then(response1 => {
                response1.json().then(myJson1 => {
 
                  this.setState({ data: myJson1 });
                  console.log(this.state.data);
                  
                });
              }
              )
          });
        })
    }

    else if (this.state.value.name !== '') {
      query = this.state.value.name;
      fetch(`https://developers.zomato.com/api/v2.1/search?q=${query}`, {
        headers: {
          "user-key": "90f6d5f6ac3a6e571086bee4f420a08c"
        }
      })
        .then(response => {
          response.json().then(myJson => {
            this.setState({ data: myJson });
          });
        }
        )
    }

    else if (this.state.value.city !== '') {
      if (this.state.value !== undefined && this.state.value !== null) {
        query = this.state.value.city;
        fetch(`https://developers.zomato.com/api/v2.1/cities?q=${query}`, {
          headers: {
            "user-key": "90f6d5f6ac3a6e571086bee4f420a08c"
          }
        })
          .then(response => {
            response.json().then(() => {
            });
          })

      }
    }

  }


  InputField () {
    var check = {
      // name: document.getElementById("name").value,
      city: document.getElementById("city").value,
    }
    this.setState({ value: check });
  }



  render() {
    return (
      <div>
        <Navbar gofetch={this.ZomatoFetch} getdata={this.InputField} />
        <DisplayCards data={this.state.data} />
      </div>
    );
  }
}

export default Home;