import Head from "next/head";
import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import axios from "axios";
import { Card } from "../components/Card";
import { Container } from "../components/Container";
// import { Button } from "../components/Button";

export default function Home() {
  // const fetchMyAPI = React.useCallback(async () => {
  //   let response = await fetch('api/cmc/get/')
  //   response = await response.json()
  //   console.log(response)
  // }, [])

  // React.useEffect(() => {
  //   fetchMyAPI()
  // }, [fetchMyAPI])

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
    <>
      <div className={styles.container} style={{ paddingTop: 16 }}>
        <Card className="coin-card" padding="16px">
          <div className="card-grid">
            <Container padding="8px" type="inset" height="40px" width="100%">
              Coin
            </Container>
            <div className="links">
              <Container padding="8px" type="inset">
                {/* <Button color="blue"></Button> */}
              </Container>
            </div>
          </div>
        </Card>
      </div>
      <style jsx>{`
        .coin-card {
          margin-top: 16px;
        }
        .card-grid {
          display: grid;
          height: 100%;
          width: 100%;
          grid-template-columns: repeat(4, 1fr);
          grid-template-rows: repeat(3, 1fr);
          grid-column-gap: 8px;
          grid-row-gap: 8px;
        }
        .links {
          height: 100%;
          grid-row-start: 3;
          grid-column-start: 3;
          grid-row-end: 4;
          grid-column-end: 5;
        }
      `}</style>
    </>
  );
}
