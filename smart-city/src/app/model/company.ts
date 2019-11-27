// Interface used in view company crud
export interface Company {
    id : number;
    name : string;
    email : string;
    address : string;
}

export class CompanyForm {
    public email : string;
        public password : string;
        public name : string;
        public locality : string;
        public postCode : string;
        public street : string;
        public streetNumber : string;
        public phone : string;
        public description : string;
    constructor () {}
}

