export interface ILinks {
    login: string;
    registration: string;
    companyList: string;
    createCompany: string;
    deleteCompany: string;
    updateCompany: string;
    createWorkShift: string;
    deleteWorkShift: string;
    updateWorkShift: string;
    listWorkShift: string;
    userList: string;
    acceptInvite: string;
    addUser: string;
    getMembers: string;
    deleteMember:string;
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
        createWorkShift: '/company-standards/work-shift/create',
        deleteWorkShift: '/company-standards/work-shift/delete',
        updateWorkShift: '/company-standards/work-shift/update',
        listWorkShift: '/company-standards/work-shift/list',
        userList: '/company-standards/user/list',
        acceptInvite: '/company-standards/user-company/accept-invite',
        addUser: '/company-standards/user-company/add-user',
        getMembers:'/company-standards/company/members',
        deleteMember:'/company-standards/user-company/remove-user'
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

    get createWorkShift() {
        return this._authorizationDomain + this._urls.createWorkShift;
    }

    get deleteWorkShift() {
        return this._authorizationDomain + this._urls.deleteWorkShift;
    }

    get updateWorkShift() {
        return this._authorizationDomain + this._urls.updateWorkShift;
    }

    get listWorkShift() {
        return this._authorizationDomain + this._urls.listWorkShift;
    }

    get acceptInvite() {
        return this._authorizationDomain + this._urls.acceptInvite;
    }

    get addUser() {
        return this._authorizationDomain + this._urls.addUser;
    }

    get getMembers() {
        return this._authorizationDomain + this._urls.getMembers;
    }

    get deleteMember() {
        return this._authorizationDomain + this._urls.deleteMember;
    }

    get userList() {
        return this._authorizationDomain + this._urls.userList;
    }
};

export const links = new Links();