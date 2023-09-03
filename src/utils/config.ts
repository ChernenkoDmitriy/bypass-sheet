interface IConfig {
    googleMapsAPIKey: string;
};

class Config implements IConfig {
    private _googleMapsAPIKey = 'AIzaSyBxAIrjM4-59qQYKeDmKO9rgqyzzfanKRc'

    get googleMapsAPIKey() {
        return this._googleMapsAPIKey;
    }

};

export const config = new Config();