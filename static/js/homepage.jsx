'use strict';

function Homepage() {
  return <div>
          <p>Welcome my guy!</p>;
          <p><a href="/cards">Click here</a> to go to the Cards page</p>
          <img src="static/img/balloonicorn.jpg"></img>
          </div>;
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
