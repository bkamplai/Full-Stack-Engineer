import React from 'react';
import ReactDOM from 'react-dom';

import PropsDisplayer from './PropsDisplayer';
import Product from './Product';
import Player from './Player';
import Greeting from './Greeting';
import List from './List';
import Button from './Button1';

function App() {
    return (
        <>
            <PropsDisplayer myProp="Hello" />
            <Product name="A Minecraft Movie" price={19.99} rating="5.8/10" />
            <Player songName='Bloodline (with Jelly Roll)' artist='Alex Warren' />
            <div>
                <h1>MovieFlix</h1>
                <Greeting name="Alison" signedIn={true} />
            </div>
            <div>
                <List type='Living Musician'>
                    <li>Sachiko M</li>
                    <li>Harvey Sid Fisher</li>
                </List>
                <List type='Living Cat Musician'>
                    <li>Nora the Piano Cat</li>
                    <li>The OG Piano Cat</li>
                </List>
            </div>
            <Button text="" />
        </>
    );
}

export default App;