import React, {useState, useContext} from 'react';
import {SeriesContext} from './app3_Context'

const AddSeries = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [series, setSeries] = useContext(SeriesContext);

    const updateName = e => {
        setName(e.target.value);
    }
    const updatePrice = e => {
        setPrice(e.target.value);
    }
    const addSeries = e => {
       e.preventDefault();
       setSeries(previous => [...previous, {name: name, price: price}]); 
    }

    return(
        <form onSubmit={addSeries} >
            <input type="text" name="name" value={name} onChange={updateName} />
            <input type="text" name="price" value={price} onChange={updatePrice} />
            <button>Submit</button>
        </form>
    );

}
export default AddSeries;