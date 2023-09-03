export interface ILinks {
    login: string;
    registration: string;
    companyList: string;
    createCompany: string;
    deleteCompany: string;
    updateCompany:string;
};

class Links implements ILinks {
    private _authorizationDomain = 'https://nltdev.com';
    private _urls: ILinks = {
        login: '/company-standards/user-auth/login',
        registration: '/company-standards/user-auth/registration',
        companyList: '/company-standards/company/list',
        createCompany: '/company-standards/company/create',
        deleteCompany:'/company-standards/company/delete',
        updateCompany:'/company-standards/company/update'
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
};

export const links = new Links();