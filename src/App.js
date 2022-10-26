
import { Children } from 'react';
import './App.css';
import Profile from './Profil/Profile';

function App() {
      var FullName= "moez habibi"
      var bio ="Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. »« Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      var profession = "developpeur fullstack"

      
        const handleNace=(a)=>{
          alert (`hello ${a}`)
        }
       
      
  return (
    <div>


        <Profile FullName={FullName} bio={bio} profession={profession} handleNace={handleNace}>
        <img src='/a.jpg' alt='non'/>
        </Profile>
       



    </div>

  );
}

export default App;
