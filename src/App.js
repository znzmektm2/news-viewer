import React, { useState, useCallback } from 'react';
import NewsList from './NewsList';
import Categories from './Categories';
import { Route } from 'react-router-dom';
import NewsPage from './NewsPage';

const App = () => {
  // const [category, SetCategory] = useState('all');
  // const onSelect = useCallback(category => SetCategory(category), []);
  return <Route path="/:category?" component={NewsPage} />;
};

export default App;