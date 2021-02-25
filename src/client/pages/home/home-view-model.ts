import { NavigationService, PageViewModel, route, template } from "@nivinjoseph/n-app";
import { inject } from "@nivinjoseph/n-ject";
import * as Routes from "../routes";
import "./home-view.scss";

@template(require("./home-view.html"))
@route(Routes.home)
@inject("NavigationService")    
export class HomeViewModel extends PageViewModel
{
    private readonly _navigationService: NavigationService;
    
    
    public constructor(navigationService: NavigationService)
    {
        super();
        
        this._navigationService = navigationService;
    }
    
    
    public gotoFirestore(): void
    {
        this._navigationService.navigate(Routes.firestore)
    }
}