/*const heading = React.createElement(//this React.createElement is just an object
    //here heading is nothing but a react element
    'h1',
    {id:'heading',xyz:"abc"},
    'Hello World from React!'
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading); */
////////////////////////////////////////////////
/*
<div id = 'Parent'>
     <div id="child">
     <h1>I am H1 tag</h1>
     </div>
</div>

//create this in react
*/
//React.createElement(Object)=>HTML (Browser Understands)

/*
 const Parent=React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
        "div",
        {id:"child"},
        [//if u have to give two elements as siblings then you have to add an array of childrens
        React.createElement("h1",{},"I am H1 tag"),
        React.createElement("h2",{},"I am H2 tag"),
        ]
    )

);
console.log(Parent);//object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Parent) */
////////////////////////////////////////////////
/*
<div id = 'Parent'>
     <div id="child1">
     <h1>I am H1 tag</h1> 
     <h2>I am H2 tag</h2>
     </div>

     <div id="child2">
     <h1>I am H1 tag</h1> 
     <h2>I am H2 tag</h2>
     </div>

</div>

//create this in react

*/
const Parent = React.createElement(
    "div",
    { id: "parent" },
    [React.createElement(
        "div",
        { id: "child1" },
        [//if u have to give two elements as siblings then you have to add an array of childrens
            React.createElement("h1", {}, "I am H1 tag"),
            React.createElement("h2", {}, "I am H2 tag"),
        ]


    ),
    React.createElement(
        "div",
        { id: "child2" },
        [//if u have to give two elements as siblings then you have to add an array of childrens
            React.createElement("h1", {}, "I am H1 tag"),
            React.createElement("h2", {}, "I am H2 tag"),
        ]


    )]
//this is so untidy code  thats why we use JSX which helps in creating new elements and id easier than the Html js and react

);
console.log(Parent);//object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Parent) //render ka kaam ye hai ki vo Parent object ko root id[root yaha pe ek container ka naam v h so dont get confused between id root and container root] ke andar insert krra hai
//but suppose root id has already some tags like paragraph/h1etc..then this render method used to replace all those tags and place the parent object inside the root id
//rener replace v krdeta hai jo v already present ho root ke andar 