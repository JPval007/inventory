import {useState} from "react";

function SearchBar(props) {
    // Define states
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [type, setType] = useState("");
    const [brand, setBrand] = useState("");

    const SearchButtonPressed = () => {
        props.updateSearchParams({name : name, price: price, type: type, brand: brand});
    };

    return (
        <div className="container">
            <div className="row">
                <h2>Search for an Item</h2>
            </div>
            
            <div className="row">
                <div className="col">
                    <label htmlFor="name-field">Name: </label>
                    <input id="name-field" type="text" value={name} onChange={(event)=> {setName(event.target.value)}} ></input>   
                </div>
                <div className="col">
                    <label htmlFor="price-field">Max Price: </label>
                    <input id="price-field" type="number" value={price} onChange={(event)=> {setPrice(event.target.value)}} ></input>
                </div>
                <div className="col">
                    <label htmlFor="type-field">Type: </label>
                    <input id="type-field" type="text" value={type} onChange={(event)=> {setType(event.target.value)}} ></input>
                </div>
                <div className="col">
                    <label htmlFor="brand-field">Brand: </label>
                    <input id="brand-field" type="text" value={brand} onChange={(event)=> {setBrand(event.target.value)}} ></input>                
                </div>
                
            </div>
            <div className="row mt-3">
                <div className="col col-4"></div>
                <button type="button" className="col-4 btn btn-primary" onClick={SearchButtonPressed}>Search</button>
            </div>            

        </div>
    );
}

export default SearchBar;