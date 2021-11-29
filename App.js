// src/App.js
console.log(React)
console.log(ReactDOM)
import './App.css';
import logo from './ironhack-logo-xs.png';
import menu from './menu-top-xs.png';
import icon1 from './icon1.png';
import icon2 from './icon2.png';
import icon3 from './icon3.png';
import icon4 from './icon4.png';

function Header() {
  return (
    <section> 
      <nav>
        <img src={logo}></img>
        <img src={menu}></img>
     </nav>
    <div> 
    <h1>Say hello to ReactJS</h1>
    <p>You will learn how to use the most popular frontend library, and become a Super Ninja developer.</p> 
    <button>Awesome!</button>
    </div>
    </section>
    
  ) 
}


function ListContent() {
  return (
    <div>
    <div>
        <img src={icon1}></img>
        <h5>Declarative</h5>
        <p>React makes it painless to create interactive UIs.</p>
    </div>
    <div>
        <img src={icon2}></img>
        <h5>Components</h5>
        <p>Build encapsulated components that manage their state.</p>
    </div>
    <div>
        <img src={icon3}></img>
        <h5>Single-way</h5>
        <p>A set of immutable values are passed to the component's.</p>
    </div>
    <div>
        <img src={icon4}></img>
        <h5>JSX</h5>
        <p>Statically-typed, designed to run on modern browsers.</p>
    </div>
    </div>

  )
} 
  
 

function App() {
  return (
    <div className="App">
      <Header/>
      <ListContent/>
    </div>
  );
}



ReactDOM.render(<App/>, document.querySelector('#app')) //will only render one element
export default App;