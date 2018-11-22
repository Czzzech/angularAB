export interface User{
    login       : string,
    password    : string,
    email       : string,
    phone       : string,
    created     : string,
    lastVisit   : string,
    permissions : object,
    payer       : boolean,
    birthDate   : string,
    timezone    : string
}