import React from 'react';

import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Logon from './pages/Logon';
import Home from './pages/Home';
import Favourites from './pages/Favourites';
import Car from './pages/Car';
import Diamond from './pages/Diamond';
import Make from './pages/Make';
import ProductCatalog from './pages/ProductCatalog';


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>

                <Route path="/" exact component={Home} />
                <Route path="/logon" component={Logon} />
                <Route path="/favoritos" component={Favourites} />
                <Route path="/meucarrinho" component={Car} />
                <Route path="/acessorios/e/bijus" exact component={Diamond} />
                <Route path="/beleza" component={Make} />
                <Route path="/catalogo" component={ProductCatalog} />

            </Switch>
        </BrowserRouter>
    )
}