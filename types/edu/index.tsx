export interface CoursesId {
  _id: string;
  id: string;
}

export interface FollowedUsersId {
  _id: string;
  id: string;
}

export interface Tags {
  _id: string;
  text: string;
}

export interface EduResultProps {
  _id: string;
  about: string;
  address: string;
  backgroundColor: string;
  coursesId: CoursesId;
  createdAt: string;
  followedUsersId: FollowedUsersId;
  founded: string;
  location: string;
  logoUrl: string;
  name: string;
  notifyEmails: string;
  objective: string;
  primaryText: string;
  primaryTextColor: string;
  reviewState: string;
  secondaryText: string;
  secondaryTextColor: string;
  slug: string;
  state: string;
  tags: Tags;
  url: string;
}
