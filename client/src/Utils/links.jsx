const Links = [
  {
    item: "home",
    link: "/",
  },
  {
    item: "apply-Jobs",
    link: "/applyJobs",
  },
  {
    item: "Profile",
    link: "/profile",
  },
  {
    item: "Post",
    link: "/post",
  },
];
const card_first = [
  {
    img: "https://th.bing.com/th/id/OIP.Mfq531mpfcbvPhaaK1OGFAHaE8?rs=1&pid=ImgDetMain",
    heading: "Earn More",
    para: "Student earn $25/hour on average ",
  },
  {
    img: "https://th.bing.com/th/id/OIP.HKuA9mSYCIf6qAqu-iQxywHaEK?rs=1&pid=ImgDetMain",
    heading: "gain experience",
    para: "Internships that helps you grow ",
  },
  {
    img: "https://th.bing.com/th/id/OIP.WOQBXq_9z1zLgz8XKTE7tgHaEx?rs=1&pid=ImgDetMain",
    heading: "connect with companies",
    para: "join a talent pool for fortune 500s ",
  },
];
const card_second = [
  {
    img: "https://th.bing.com/th/id/OIP.cv9AE_nUlWorb9yAEz_JAAHaE8?rs=1&pid=ImgDetMain",
    heading: "Find Top Talent",
    para: "Access top Student at Over 200 Universities",
  },
  {
    img: "https://th.bing.com/th/id/OIP.E1v4GK1-zl5sxXzBNIDU_AHaE8?w=242&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    heading: "Engage students",
    para: "Promote your Brand and Jobs to Students",
  },
  {
    img: "https://th.bing.com/th/id/OIP.Ye0oVhQa8DqQX47WuwNlhAHaHa?w=190&h=190&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    heading: "Easy to use",
    para: "Simply ,intuitive interface to manage jobs ",
  },
];

const resume = [
  {
    img: "data:image/jpeg;base64,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",
    heading: "Software Engineer",
    desc: "Software Engineer ar Facebook",
    response: "Submitted",
  },
  {
    img: "https://www.bing.com/th/id/OIP.vbwkWI35ZmPKFR7dPUI0rAHaDa?w=337&h=160&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    heading: "Software Engineer",
    desc: "Software Engineer ar Facebook",
    response: "Not Submitted",
  },
  {
    img: "https://www.bing.com/th/id/OIP.vbwkWI35ZmPKFR7dPUI0rAHaDa?w=337&h=160&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    heading: "Software Engineer",
    desc: "Software Engineer ar Facebook",
    response: "Submitted",
  },
];

export { Links, card_first, card_second, resume };
