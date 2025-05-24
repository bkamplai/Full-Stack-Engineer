import React from 'react';
import ReactDOM from 'react-dom';

import PropsDisplayer from './PropsDisplayer';
import Product from './Product';

function App() {
    return (
        <>
            <PropsDisplayer myProp="Hello" />
            <Product name="A Minecraft Movie" price={19.99} rating="5.8/10" />
        </>
    );
}

export default App;