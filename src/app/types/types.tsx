export type IData = {
  id: number,
  title: string,
  img: string,
  desc: string,
  color: string,
}[];

export type ILogos = string[];

export type IData2 = {
  id: number,
  img: string,
  title: string,
  content: JSX.Element,
  hrefLink?: string,
  linkName: string,
  right: boolean,
  activeBtn: boolean
  growBtn?: JSX.Element
}[];

export type ICards = {
  id: number,
  img: string,
  img2: string,
  content: string,
  managerName: string,
  position: string
}[];

export type IFeaturedProfiles = {
  name: string,
  job: string,
  education: string,
  companyHq: string,
  hobbies: string,
  img: string,
  techSkills: string[],
  profile: string,
  card: string,
  findLink: string,
  fontColorwhite: boolean
}[];

export type IDevTools = string[];

export type IAboutUs = {
  id: number,
  title: string,
  content: string[],
  getInTouchLink: string,
  img1: string,
  primaryImage: string,
  absoluteImage: string,
  right: boolean
}[];

export type ILinks = {
  id: number,
  title: string,
  url: string,
}[];

export type ISuccess = {
  id: number,
  primaryImg: string,
  groupImg: string,
  content: string,
  url: string
}[];

export type IMidSectionDate = {
  id: number,
  title: string,
  content: JSX.Element,
  img: string,
  reverse: boolean
}[];

export type IHow = {
  title: string,
  points: JSX.Element[],
  img: string,
  right: boolean
}[];

export type StateType = {
  modalOpen: boolean
};

export type ActionType = {
  type: "CHANGE_MODAL",
}
