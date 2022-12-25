import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes, Redirect } from 'react-router-dom';
import Home from './Home';
import AddEntity from './components/common/Form/AddEntity';
import EditEntity from './components/common/Form/EditEntity';
import { useEffect } from 'react';
import { getDependencies } from './redux/actions/actions';
import { useDispatch } from 'react-redux';

const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDependencies());
    }, [])
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={< Home />}></Route>
                <Route exact path='/edit/:type/:id' element={< EditEntity />}></Route>
                <Route exact path='/add/:type' element={< AddEntity />}></Route>
            </Routes>

        </Router>
    )
}

export default App