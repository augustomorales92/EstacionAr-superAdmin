
import './App.css';

function App() {
  return (
    <div className='landing'>
    <div className='sideBar'>
      <div className='sideBar-h1'>
      <h1>EstacionAr</h1>

      </div>
      <div className='sideBar-titles'>
      <h2>HOME</h2>
      <h2>AUTOS</h2>
      <h2>USUARIOS</h2>
      <h2>ADMINS</h2>

      </div>
      
    </div>

    <div className="App">
      <header className="App-header">
        <div>
        <img src={ "https://i.postimg.cc/vHvVw1vs/cartelito-8.png"} className="App-cartel" alt="" />
        </div>
        <div>
        <img src={ "https://i.postimg.cc/K8vgGZ9g/autito-8.png"} className="App-logo" alt="logo" />

        </div>
        
      </header>
    </div>
    </div>
  );
}

export default App;
