interface IhasLinks {
    email: string | null,
    gitHub: string | null,
    highlighted: boolean,
    imagePortraitUrl: string | null,
    imageWallOfLeetUrl: string | null,
    linkedIn: string | null,
    mainText: string | null,
    manager: string | null,
    name: string | null,
    office: string | null,
    orgUnit: string | null,
    phoneNumber: string | null,
    published: boolean,
    stackOverflow: string | null,
    twitter: string | null,
}

export const hasLinks = (e: IhasLinks) => {
    if (e.gitHub || e.linkedIn || e.twitter) {
        return true;
    } else {
        return false;
    }
}