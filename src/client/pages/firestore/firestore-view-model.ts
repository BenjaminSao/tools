import { PageViewModel, route, template } from "@nivinjoseph/n-app";
import * as Routes from "../routes";
import "./firestore-view.scss";
import firebase from "firebase/app";
import "firebase/firestore";

@template(require("./firestore-view.html"))
@route(Routes.firestore)
export class FirestoreViewModel extends PageViewModel
{
    private readonly _db: firebase.firestore.Firestore;
    
    public constructor()
    {
        super();
        
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
}