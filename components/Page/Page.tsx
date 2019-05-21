import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';
import { FirebaseConfig } from '../../global_constants/_Config';

type PageProps = {
    children: (data: any) => JSX.Element
    dataRoute: string
}

firebase.initializeApp(FirebaseConfig);

const Page: React.FunctionComponent<PageProps> = ({ children, dataRoute }) => {
    const [data, setData] = useState<any | null>(null);

    useEffect(() => {
        const dbRef: firebase.database.Reference = firebase.database().ref(dataRoute);
        dbRef.on("value", (snap: firebase.database.DataSnapshot) => {
            let dbValue = snap.val() || {};
            setData(dbValue);
        });

        return () => {
            dbRef.off();
        }
    }, [])

    return <>
        {!data && <></>}
        {data && children(data)}
    </>
}

export { Page };