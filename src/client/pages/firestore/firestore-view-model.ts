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
    public get text(): string { return this._text; }
    public set text(value: string) { this._text = value; }
    
    public get dbData(): Array<String> { return this._dbData; }
    
    private _text: string;
    private _dbData: Array<String>;
    
    private readonly _firebaseService: FirebaseService;
    
    public constructor(firebaseService: FirebaseService)
    {
        super();
        
        this._firebaseService = firebaseService;
        
        this._text = "";
        this._dbData = [];
    }
    
    public async addData(): Promise<void>
    {
        try
        {
            await this._firebaseService.addData(this._text);
        }
        catch (e)
        {
            console.error(e);
        }
    }
    
    protected onMount(element: HTMLElement): void
    {
        super.onMount(element);
        
        this._firebaseService.fetchAllData().then(t => { this._dbData = t; }).catch(e => console.error(e));
    }
}