import { defineStore } from "pinia";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  updateDoc,
  getDoc,
  doc,
  setDoc,
  deleteDoc,
  addDoc,
  onSnapshot,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBgZYJoUhN2if_IeCB-RQB2Hz_yV_ZCfV8",
  authDomain: "simple-todo-app-c5a3b.firebaseapp.com",
  projectId: "simple-todo-app-c5a3b",
  storageBucket: "simple-todo-app-c5a3b.appspot.com",
  messagingSenderId: "740962103721",
  appId: "1:740962103721:web:d847f722b57dc69d2894b8",
  measurementId: "G-J6X7HZLJ46"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const useApp = defineStore({
    id: "App",
    state: () => ({
      datas: [],
      counter: 0,
    }),
    actions: {
      addItem() {
        addDoc(collection(db, "ets"), {
          count: 0,
        });
      },
      async getAllData() {
        const snapshot = await onSnapshot(collection(db, "ets"), (datas) => {
            this.datas = [];
            datas.forEach((data) => {
                this.datas.push({
                    id: data.id,
                    ...data.data()
                });
            });
            this.getCounter();
        });
      },
      async addCounter(id) {
        let data = this.datas.find(data => data.id === id);
        const update = await updateDoc(doc(db, "ets", id), {
          count: data.count+1,
        });
      },
      async substractCounter(id) {
        let data = this.datas.find(data => data.id === id);
        await updateDoc(doc(db, "ets", id), {
            count: data.count-1,
        });
      },
      async deleteItem(id) {
        deleteDoc(doc(db, "ets", id));
      },
      async getCounter() {
        this.counter = 0;
        this.datas.forEach((data) => {
          if(data.count > 0 ) this.counter += 1;
        });
      }
    },
});