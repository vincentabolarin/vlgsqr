"use client";

import NavBar from '@components/app/components/navBar';
import styles from './requests.module.scss';
import { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { database } from '@components/firebaseConfig';

const Requests = () => {
  const [loading, setLoading]: any = useState(true);
  const [requests, setRequests]: any = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // const querySnapshot = await getDocs(collection(database, "requests"));
    // querySnapshot.forEach((doc) => {
    //   // doc.data() is never undefined for query doc snapshots
    //   console.log(doc.id, " => ", doc.data());
    // });

    const q: any = collection(database, "requests");
    const querySnapshot: any = await getDocs(q).then(
      (querySnapshot) => {
        const newData = querySnapshot.docs.map((doc: any) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setRequests(newData);
        console.log(newData);
        
      }
    );

    setLoading(false);
  };

    return (
      <>
        <div className="container">
          {loading && <p>Loading...</p>}
          {loading === false && requests && (
            <div className={styles.cards}>
              {
                requests.map((request: any) => {
                  return (
                    <div className={styles.card} key={request.id}>
                      <div className={styles.details}>
                        <h2>{ request.itemName }</h2>
                        <p>From: { request.itemLocation }</p>
                        <p>To: { request.deliveryAddress }</p>
                        <p>Period of Need: { request.periodOfNeed }</p>
                      </div>
                      <div className={styles.button}>
                        <button>I am interested</button>
                      </div>
                    </div>
                  );
                })
              }
            </div>
          )}
        </div>
      </>
    );
}
 
export default Requests;