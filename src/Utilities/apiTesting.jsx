
import { useEffect, useState } from 'react';
import fetchDataFromApi from './Utilities/api'

function apiTesting() {

  useEffect(() => {
    response();
  }, [])

  const response = () => {
    fetchDataFromApi("movie/popular")
    .then((res) => {
      console.log(res);
    })
  }
  
  return (
    <div className="apiTesting">
    </div>
  );
}

export default apiTesting;
