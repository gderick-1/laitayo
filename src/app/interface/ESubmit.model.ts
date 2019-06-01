export interface ESubmit { 
    name: string;
    email: string;
    message: string;
    phone: string;
    dateTo?: string;
    dateFrom?: string;
    adults?: number;
    child?: number;
}

export interface CoSend {
    name: string;
    email: string;
    message: string;
    phone: string;
}