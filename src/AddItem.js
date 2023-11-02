import {useState} from "react";

function AddItem(props) {
    // Define states
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [type, setType] = useState("");
    const [brand, setBrand] = useState("");

    const AddItemButtonPressed = () => {
        props.AddItem({
            name : name, 
            price: price, 
            type: type, 
            brand: brand});
        setName("");
        setPrice(0);
        setType("");
        setBrand("");
    };

    return (
        <div className="container">
            <div className="row">
                <h2>Add an Item</h2>
            </div>
            
            <div className="row">
                <label htmlFor="name-field">Name: </label>
                <input id="name-field" type="text" value={name} onChange={(event)=> {setName(event.target.value)}} ></input>
                <label htmlFor="price-field">Price: </label>
                <input id="price-field" type="number" value={price} onChange={(event)=> {setPrice(event.target.value)}} ></input>
                <label htmlFor="type-field">Type: </label>
                <input id="type-field" type="text" value={type} onChange={(event)=> {setType(event.target.value)}} ></input>
                <label htmlFor="brand-field">Brand: </label>
                <input id="brand-field" type="text" value={brand} onChange={(event)=> {setBrand(event.target.value)}} ></input>                
            </div>
            <div className="row mt-3">
                <button type="button" className="btn btn-primary" onClick={AddItemButtonPressed}>Add Item</button>
            </div>

        </div>
    );
}

export default AddItem;