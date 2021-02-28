import firebase from "firebase/app";
import "firebase/firestore";

export class FirebaseService
{
    private readonly _db: firebase.firestore.Firestore;
    
    public constructor()
    {
        firebase.initializeApp({
            apiKey: "AIzaSyCbTN7v19iMTszp_UW3RzlbpRRexi1iuZw",
            authDomain: "tools-dc27a.firebaseapp.com",
            projectId: "tools-dc27a",
            storageBucket: "tools-dc27a.appspot.com",
            messagingSenderId: "138377938180",
            appId: "1:138377938180:web:92a4833ca871b12a3abc51",
            measurementId: "G-Q913FQE0RM"
        });
        
        this._db = firebase.firestore();
        
    }
    
    public async addData(text: string): Promise<void>
    {
        await this._db.collection("collection").doc().set({
                text: text
            });
    }
    
    public async fetchAllData(): Promise<Array<String>>
    {
        const dbData = new Array;
        const docs = await this._db.collection("collection").get();
            docs.forEach(t =>
            {
                dbData.push({
                    text: t.data().text
                });
            });
        return dbData;
    }
}