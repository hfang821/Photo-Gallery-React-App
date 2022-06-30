import React, {useState} from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';


function App() {
  const [categories] = useState([
    {
      name: 'commercial', 
      description: 'Photos of grocery stores, food trucks, and other commercial projects'
    },
    { name: 'portraits', description: 'Portraits of people in my life' },
    { name: 'food', description: 'Delicious delicacies' },
    { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
  ]);

  //first item is the value of the state
  //second item is the setter to set the state to something else
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  
  return (
    <div>
      <Nav categories={categories} setCurrentCategory={setCurrentCategory} currentCategory={currentCategory}></Nav>
      <main>
        <Gallery currentCategory={currentCategory}></Gallery>
        <About></About>
      </main>
    </div>
  );
}

export default App;
