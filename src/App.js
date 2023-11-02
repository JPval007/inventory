import { useState , useEffect} from 'react';
import './App.css';
import SearchBar from './SearchBar';
import AddItem from './AddItem';
import ItemsDisplay from './ItemsDisplay';
// import styled from 'styled-components' //import styled components library but you have to manually style everyone
import Test from './Class';

function App() {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState({items: []});
  const [showTest, setShowTest] = useState(true);

  //A hook is a react function that can modify components
  useEffect(()=>{
    fetch("http://localhost:3000/items").then((response)=>(response.json())).then((data)=>{setData({items:data})});
  }, []);


  const UpdateFilters = (searchParams) => {
    setFilters(searchParams);
  };

  const DeleteItem = (item) => {
    const items = data["items"];
    const requestOptions = {
      method: "DELETE"
    };
    fetch(`http://localhost:3000/items/${item.id}`, requestOptions).then((response)=>{
      if (response.ok){
        const idx = items.indexOf(item);
        items.splice(idx,1);
        setData({items : items});
      }
    });
  };

  const AddItemToData = (item) => {
    let items = data["items"];
    

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify(item)
    };
    fetch("http://localhost:3000/items", requestOptions)
    .then((response)=> response.json())
    .then((data) => {
      items.push(item);
      setData({items: items});
    });
    /*
     * Methods
    get, post, put, delete
    */

    
    console.log(data);
    // Send a request to a server to store our data using fetch

  };

  const FilterData = (data) => {
    const FilterData = [];

    // Security check for initial value
    if (!filters.name){
      return data;
    }

    // Data is a list
    for (let item of data) {
        // Here are the names that are not empty
        if (item.name !== "" && item.name !== filters.name) {
          continue;
          //If the item is not equal to the name then continue, weird naming...
        }

        if (item.price !== 0 && item.price > filters.price) {
          continue;
        }

        if (item.type !== "" && item.type !== filters.type) {
          continue;          
        }

        if (item.brand !== "" && item.brand !== filters.brand) {
          continue;
        }

        FilterData.push(item);
    }

    return FilterData;
  }

  // MT is margin top
  return (    
    <div className="App">
      <div className='row mt-3'>
        <ItemsDisplay deleteItem = {DeleteItem} items={FilterData(data["items"])}/>
      </div>
      <div className='row mt-3'> 
        <SearchBar updateSearchParams={UpdateFilters} />
      </div>
      <div className='row mt-3' >
        <AddItem AddItem = {AddItemToData} />
      </div>
      
      {showTest ? <Test destroy={setShowTest} /> : null}
    </div>
  );
}


//This goes at the end
export default App;
