import { PageViewModel, route, template } from "@nivinjoseph/n-app";
import * as Routes from "../routes";
import "./home-view.scss";

@template(require("./home-view.html"))
@route(Routes.home)
export class HomeViewModel extends PageViewModel
{
    
}