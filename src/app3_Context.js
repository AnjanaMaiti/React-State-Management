import React, {useState, createContext} from 'react';

export const SeriesContext = createContext();

export const SeriesProvider = (props) => {
    const [series, setSeries] = useState(
        [
            {
                name: 'Blacklist',
                price: '$25',
                id: '001'
            },
            {
                name: 'Emily in Paris',
                price: '$12',
                id: '002'
            },
            {
                name: 'Young Sheldon',
                price: '$30',
                id: '003'
            }
        ]
    ); 

    return(
        <SeriesContext.Provider value={[series, setSeries]}>
            {props.children}
        </SeriesContext.Provider>
    );

}