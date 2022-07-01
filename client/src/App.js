import React, { useEffect } from 'react';
import * as api from '../api/index';

function App() {
  useEffect(() => {
    api.fetchPosts();
  });
  return (
    <div>App</div>
  );
}

export default App;
