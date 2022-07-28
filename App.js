import './App.css';
import QuickSearches from './Components/QuickSearches';
//import Restaurantdetails from './components/Restaurantdetails';
import Wallpaper from './Components/Wallpaper';
import Restaurantdetails from './Components/Restaurantdetails';
//import {Routes , Route} from 'react-router-dom'


function App() {
  return (
    <div>
       <Wallpaper/>
      <QuickSearches/>
      <Restaurantdetails/>
    {/* <Routes>
      <Route path="/" element={ <Wallpaper/>}/>
      <Route path="searches" element={<QuickSearches/>}/>
      <Route path="details" element={<Restaurantdetails/>}/>
    </Routes>
     */}
    
    </div>
  );
}

export default App;
