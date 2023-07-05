import React, { useState, useEffect } from 'react';
import './App.css';
import One from './components/One';
import Two from './components/Two';
import Three from './components/Three';
import Four from './components/Four';
import Five from './components/Five';
import Six from './components/Six';
import Seven from './components/Seven';
import Eight from './components/Eight';
import Nine from './components/Nine';
import Ten from './components/Ten';

const App = () => {
  const [componentIndex, setComponentIndex] = useState(1);

  const getNextComponentIndex = () => {
    setComponentIndex((prevIndex) => {
      if (prevIndex === 10) {
        return 1;
      } else {
        return prevIndex + 1;
      }
    });
  };

  useEffect(() => {
    document.addEventListener('click', getNextComponentIndex);
    return () => {
      document.removeEventListener('click', getNextComponentIndex);
    };
  }, []);

  const handleDotClick = () => {
    setComponentIndex(1);
  };

  const renderComponent = () => {
    switch (componentIndex) {
      case 1:
        return <One />;
      case 2:
        return <Five />;
      case 3:
        return <Two />;
      case 4:
        return <Three />;
      case 5:
        return <Eight />;
      case 6:
        return <Four />;
      case 7:
        return <Six />;
      case 8:
        return <Seven />;
      case 9:
        return <Nine />;
      case 10:
        return <Ten onDotClick={handleDotClick} />;
      default:
        return <One />;
    }
  };

  return <div>{renderComponent()}</div>;
};

export default App;
