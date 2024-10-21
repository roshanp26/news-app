import './App.css';

import { useState } from "react";
import NavBar from "./Components/NavBar";
import News from "./Components/News";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import Footer from "./Components/Footer";


function App() {

	const pageSize = 5;
	const apiKey = "745929e17ee047bfa5c52442fb79a81d";
	const [progress, setProgress] = useState(0);

  return (
    <div className="App">
      	<BrowserRouter>

		<NavBar/>

		<LoadingBar
       		 height={3}
       		 color='#00d0ff'
       		 progress={progress} 
      		/>

		<Routes>
			<Route path="/" element={ <News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" />} />
			<Route path="/business" element={ <News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business" />} />
			<Route path="/entertainment" element={ <News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" />} />
			<Route path="/health" element={ <News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health" />} />
			<Route path="/sports" element={ <News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports" />} />
			<Route path="/technology" element={ <News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology" />} />
			<Route path="/science" element={ <News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science" />} />
			<Route path="*" element={ <News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" />} /> 	
		</Routes>

	</BrowserRouter>
	<Footer/>
    </div>
  );
}

export default App;
