import React, {useState,useContext} from 'react';
import Series from './app2';
import {SeriesContext} from './app3_Context'


const Movielist = () => {
    
    const [movies, setMovies] = useState(
        [
            {
                name: 'Harry Porter',
                price: '$10',
                id: '001'
            },
            {
                name: 'Die Hard',
                price: '$20',
                id: '002'
            },
            {
                name: 'Gravity',
                price: '$30',
                id: '003'
            }
        ]
    ); 

    // const [series, setSeries] = useState(
    //     [
    //         {
    //             name: 'Blacklist',
    //             price: '$25',
    //             id: '001'
    //         },
    //         {
    //             name: 'Emily in Paris',
    //             price: '$12',
    //             id: '002'
    //         },
    //         {
    //             name: 'Young Sheldon',
    //             price: '$30',
    //             id: '003'
    //         }
    //     ]
    // ); 
    const [series, setSeries]=useContext(SeriesContext); //series list coming from SeriesContext

    return(
        <div>
            <h3>Movies</h3>
            {movies.map(each => (
                <li> {each.name} </li>
            ))}
               
            <h3>Series</h3>
            {series.map(each => (
                <Series name={each.name} price={each.price} key={each.id}/>
            ))}
        </div>
    );

}
export default Movielist;