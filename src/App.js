
import './App.css';
import Card from './Card'
import emg from './img/tree-736885__480.jpg'

function App() {



  var arr =[
    {img:emg,title:'Card title',p:'Some quick example text to build on the card title and make up the bulk of the card',btn:'Go someWhere'}
    ,{img:emg,title:'Card title',p:'Some quick example text to build on the card title and make up the bulk of the card',btn:'Go someWhere'},
    {img:emg,title:'Card title',p:'Some quick example text to build on the card title and make up the bulk of the card',btn:'Go someWhere'}
    ,{img:emg,title:'Card title',p:'Some quick example text to build on the card title and make up the bulk of the card',btn:'Go someWhere'}
  ]
  return (
    <div className="App">
{

arr.map((item)=>{
return <Card data={item} />})

}
    </div>
  );
}

export default App;
