// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection, onSnapshot } from "firebase/firestore";
import store from './redux'
import dataAction from '../actions/addOrder'

console.log(process.env)
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


const unsub = onSnapshot(collection(db, "orders"), (docs) => {
    handleOrders(docs);
});


function handleOrders(docs) {
    const ordersList = docs.docs.map(doc => {
        let docData = doc.data();
        let result = []
        result.push(docData['customer_name'])
        result.push(docData['date'].toDate().toISOString())
        result.push(docData['order_id'])
        result.push(docData['price'])
        return result
    });
    store.dispatch(dataAction(ordersList))
}

export async function initOrders() {
    let ordersCol = collection(db, 'orders')
    const ordersSnap = await getDocs(ordersCol);
    handleOrders(ordersSnap)
}
