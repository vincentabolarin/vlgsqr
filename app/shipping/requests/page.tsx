"use client";

import { useRouter } from "next/navigation";
import styles from './requests.module.scss';
import { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { database } from '@components/firebaseConfig';

import {CalendarMonth, Navigation, Place} from "@mui/icons-material";

const Requests = () => {
  const router = useRouter();
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

  const acceptRequest = (e: any) => {
    router.push(`/shipping/${e.target.request.id}accept-request`);
  }

    return (
      <>
        <div className="container">
          {loading && <p>Loading...</p>}
          {loading === false && requests && (
            <div className={styles.cards}>
              {
                requests.map((request: any) => {
                  return (
                    <div className={styles.card} key={request.id} onClick={() => {router.push(
                      `/shipping/accept-request/${request.id}`
                    );}}>
                      <div className={styles.details}>
                        <h2>{request.itemName}</h2>
                        <div className={styles.itemDetail}>
                          <Navigation sx={{color: "var(--green)"}} />
                          <p>{request.itemLocation}</p>
                        </div>

                        <div className={styles.itemDetail}>
                          <Place sx={{color: "var(--red-1)"}} />
                          <p>{request.deliveryAddress}</p>
                        </div>

                        <div className={styles.itemDetail}>
                          <CalendarMonth sx={{color: "var(--primary-color)"}} />
                          <p>{request.periodOfNeed}</p>
                        </div>
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