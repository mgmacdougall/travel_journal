import './App.css'
import data from './data';
import Header from './components/Header'
import Card from './components/Card';

function App() {
  return (
    <>
      <div>
        <Header/>
      </div>
      {data.map(elm=>{
        return(
          <Card key={elm.id} {...elm}/>
        )
      })}
   
    </>
  )
}

export default App
