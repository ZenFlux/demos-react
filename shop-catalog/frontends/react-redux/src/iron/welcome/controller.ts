import ZenRedux from "@zenflux/redux";

import * as data from "./data/";

export class WelcomeController extends ZenRedux.core.RouterController {
    public error: Error = {} as Error;

    static getName() {
        return "Welcome/Controller";
    }

    getData() {
        return data;
    }

    getRoutes() {
        return {
            "Configure": () => {},
            "Error": ( result: any ) => () => this.error = result.error,
        };
    }
}

export default WelcomeController;
