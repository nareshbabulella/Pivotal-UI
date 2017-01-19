var React = require('react');
var ReactDOM = require('react-dom');



var DefaultButton = require('pui-react-buttons').DefaultButton;

var Button=require('pui-css-buttons').Button;

var Dropdown = require('pui-react-dropdowns').Dropdown; var DropdownItem =
require('pui-react-dropdowns').DropdownItem;
require('../dist/myComponents.css');

/*import Header from "./Header.js";
  import Footer from "./Footer.js";
*/
var Panel = require('pui-react-panels').Panel;

/*const Banner = require('pui-react-ribbons').Banner;*/

// Bootstrap Javascript is required for some PUI CSS components, such as accordians, collapse, dropdowns,
// modals, and tooltips
// require('bootstrap');

// Required modules here like so:
// var DefaultButton = require('pui-react-buttons').DefaultButton;

var MyTestPage = React.createClass({
  render: function() {
    return (
      <div>
        <App/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>
      </div>
    );
  }
});


var App = React.createClass({
   render:function(){
       return(
            <div className="container">
              <div className="row">
            <table>
              <tr>
              <td>
                <a className="button btn-primary" aria-label="Rest Url" href="#">Register</a>
                </td>                              
                <td>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Dropdown title='Select Exam' className="bluecolor">
                  <DropdownItem href="#">Python</DropdownItem>
                  <DropdownItem href="#">CF</DropdownItem>
                  <DropdownItem href="#">Openstack</DropdownItem>
                </Dropdown>
                </td>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <td>
                <a className="button btn-primary" aria-label="Rest Url" href="#">Result</a>
                </td>
              </tr>           
            </table>
            </div>
            </div>
       );
   }
});

ReactDOM.render(<MyTestPage />, document.getElementById('root'));