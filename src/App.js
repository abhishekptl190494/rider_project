import './App.css';
import JSONDATA from './MOCK_DATA.json';


function App() {
  return (
    <div className="App">
      <input 
       type="text" 
       placeholder="Search..."
       onChange={(event) => {
         setSearchTerm(event.target.value);
       }}
      />
      {JSONDATA.map((val, key) => {
        if (searchTerm=="") {
          return val
        } else if (val.first_name.tolowerCase().includes(searchTerm.tolowerCase())) {
         return val
        }
        }).map((val, key) => {

      return (
      <div className="user" key={key}>
        <p>{val.first_name}</p>
      </div>
      );
    })}
  </div>
 );
}

export default App;
