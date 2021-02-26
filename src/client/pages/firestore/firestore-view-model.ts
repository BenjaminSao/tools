import { PageViewModel, route, template } from "@nivinjoseph/n-app";
import { inject } from "@nivinjoseph/n-ject";
import { FirebaseService } from "../../../sdk/server/firebase-service";
import * as Routes from "../routes";
import "./firestore-view.scss";

@template(require("./firestore-view.html"))
@route(Routes.firestore)
@inject("FirebaseService")    
export class FirestoreViewModel extends PageViewModel
{
    private _firebaseService: FirebaseService;
    
    public constructor(firebaseService: FirebaseService)
    {
        super();
        
        this._firebaseService = firebaseService;
    }
    
    public addData(): void
    {
        this._firebaseService.addData();
    }
}