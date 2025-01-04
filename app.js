import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namasthe react ❤️"
);

console.log(heading);

const Jeethu = (
  <h1 id="heading" tabIndex="5">
    Namasthe react jsx ❤️
  </h1>
);

const number = 10000;

const HeadingComponent = () =>(
    <div id="container" >
        { Jeethu}
        <h1 className="heading"> Namaste react functional component </h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);
