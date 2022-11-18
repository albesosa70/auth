import React from "react";
import Account from "./views/Account.jsx";
import Home from "./views/home.jsx";
import Signin from "./views/Signin.jsx";
import { Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from "./context/AuthContext.js";


//create your first component
const App = () => {
	return (
		<div>	
		
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/signin' element={<Signin />} />
					<Route path='/account' element={<Account />} />
				</Routes>
		</div>
	);
};

export default App;
