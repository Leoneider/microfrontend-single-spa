export interface Applications {
  name: string;
  path: string;
}

export const applications: Applications[] = [
  {
    name: "@lab/mf-login",
    path: "/login",
  },
  {
    name: "@lab/mf-home",
    path: "/home",
  },
];
