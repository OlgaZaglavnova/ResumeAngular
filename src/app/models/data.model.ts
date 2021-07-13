export interface WishJob {
    name: string;
    experience: string;
    workday: string;
    schedule: string;
}

export interface AboutMe {
    city: string;
    citizen: string;
    gender: string;
    selfInformation: string;
}

export interface MainEducation {
    year: string;
    institute: string;
    faculty: string;
}

export interface AdditionalEducation {
    year: string;
    institute: string;
    courseName: string;
}

export interface Qualification {
    year: string;
    company: string;
    companyLink: string;
    job: string;
    duty: string;
}

export interface Language {
    russian: string;
    english: string;
}

export interface Contact {
    phone: string;
    icq: string;
    skype: string;
    email: string;
    vk: string;
}

export interface Sertificate {
    school: string;
    fullName: string;
    date: string;
    description: string[];
    src: string;
}

export interface Portfolio {
    school: string;
    course: string;
    workName: string;
    demolink: string;
    codelink: string;
    src: string;
    comment: string;
}

export interface Data {
    name: string;
    birthdate: string;
    wishJob: WishJob;
    aboutMe: AboutMe;
    mainEducation: MainEducation;
    additionalEducation: AdditionalEducation[];
    qualification: Qualification[];
    mainScills: string;
    languages: Language;
    car: string;
    contacts: Contact;
    tests?: any;
    sertificates: Sertificate[];
    portfolio: Portfolio[];
}
