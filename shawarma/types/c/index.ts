export interface GetCompaniesWithIDTags {
  text: string;
}

export interface GetCompaniesWithIDUsersProps {
  id: string;
}

export interface GetCompaniesWithIDProps {
  about: string;
  backgroundColor: string;
  createdAt: string;
  employees: string;
  founded: string;
  hq: string;
  industry: string;
  jobCount: number;
  logoUrl: string;
  notifyEmails: string;
  objective: string;
  phone: string;
  remoteFriendly: boolean;
  state: string;
  tags: GetCompaniesWithIDTags[];
  url: string;
  slug: string;
  followedUsersId: GetCompaniesWithIDUsersProps[];
  primaryText: string;
  primaryTextColor: string;
  secondaryText: string;
  secondaryTextColor: string;
}
