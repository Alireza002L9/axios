import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Error from './Error';



const Data = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [isSuccessful, setSuccessful] = useState(false);
  const [failed, setFailed] = useState(false);
  const [isLoading, setLoading] = useState(true);


  const url = 'https://jsonplaceholder.typicode.com/users';

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
        setSuccessful(true);
        setLoading(false);
        setFailed(false);
      })
      .catch((error) => {
        setError(error);
        setSuccessful(false);
        setLoading(false);
        setFailed(true);
      });
  }, []);
  
  if (failed) {
    return <Error error={error} />;
  }

  return (
    <>
    <div className='main'>
      <h2 className="title">10 Lucky Lottery winners of the week!</h2>
      <div className="container">
        {isLoading && !failed ? (
          <div className="loading">Loading...</div>
        ) : (
          <div className="winners">
            {isSuccessful && !isLoading
              ? data.map((users, index) => {
                  return (
                    <div
                      className="winner-items"
                      key={index}
                    >
                      <div className="item">
                        <p>{index + 1}-</p>
                        <motion.p
                          initial={{ scale: 0.5, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ type: 'spring' }}
                        >
                          {users.name}
                        </motion.p>
                      </div>
                      
                    </div>
                  );
                })
              : null}
          </div>
        )}
      </div>
      </div>
    </>
  );
};

export default Data;
