export interface ILinks {
    login: string;
    registration: string;
    companyList: string;
    createCompany: string;
    deleteCompany: string;
    updateCompany: string;
    getLocaleDetails: string;
};

class Links implements ILinks {
    private _authorizationDomain = 'https://nltdev.com';
    private _urls: ILinks = {
        login: '/company-standards/user-auth/login',
        registration: '/company-standards/user-auth/registration',
        companyList: '/company-standards/company/list',
        createCompany: '/company-standards/company/create',
        deleteCompany: '/company-standards/company/delete',
        updateCompany: '/company-standards/company/update',
        getLocaleDetails: 'https://maps.googleapis.com/maps/api/geocode/json',
    }

    get login() {
        return this._authorizationDomain + this._urls.login;
    }

    get registration() {
        return this._authorizationDomain + this._urls.registration;
    }

    get companyList() {
        return this._authorizationDomain + this._urls.companyList;
    }

    get createCompany() {
        return this._authorizationDomain + this._urls.createCompany;
    }

    get deleteCompany() {
        return this._authorizationDomain + this._urls.deleteCompany;
    }

    get updateCompany() {
        return this._authorizationDomain + this._urls.updateCompany;
    }

    get getLocaleDetails() {
        return this._urls.getLocaleDetails;
    }
};

export const links = new Links();