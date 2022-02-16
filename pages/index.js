import Head from 'next/head'
import React from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from "axios";

export default function Home() {

  const fetchMyAPI = React.useCallback(async () => {
    let response = await fetch('api/cmc/get/')
    response = await response.json()
    console.log(response)
  }, [])

  React.useEffect(() => {
    fetchMyAPI()
  }, [fetchMyAPI])

  // React.useEffect(() => {
  //   async function fetchMyAPI() {
  //   const response = await axios(`/api/hello`);
  //   const { data } = response;
  //   console.log({data, response})
  //   }
  //   fetchMyAPI()
  // }, [])
  
  // useEffect(async () => {
  //   let response = null;
  //   new Promise(async (resolve, reject) => {
  //     try {
  //       response = await axios.get('https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
  //         headers: {
  //           'X-CMC_PRO_API_KEY': '000ffe80-9b18-4fe1-b184-512c21a6c73f',
  //         },
  //       });
  //     } catch(ex) {
  //       response = null;
  //       // error
  //       console.log(ex);
  //       reject(ex);
  //     }
  //     if (response) {
  //       // success
  //       const json = response.data;
  //       console.log(json);
  //       resolve(json);
  //     }
  //   });
  // }, [])
  

  return (
    <div className={styles.container}>
      Home
    </div>
  )
}
