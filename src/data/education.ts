import type { CertificationItem, EducationItem } from "@/types/portfolio";

export const education: EducationItem[] = [
  {
    id: "rgpv",
    institution: "RGPV, Bhopal",
    degree: "B.Tech",
    field: "Computer Science and Engineering",
    startDate: "2018",
    endDate: "2022",
    isPlaceholder: false,
  },
];

export const certifications: CertificationItem[] = [
  {
    id: "udemy-web",
    name: "Complete Web Development Bootcamp",
    issuer: "Udemy",
    isPlaceholder: false,
  },
  {
    id: "udemy-react-firebase",
    name: "React.Js with Firebase Database",
    issuer: "Udemy",
    isPlaceholder: false,
  }
];

export const publishedEducation = education.filter((item) => !item.isPlaceholder);
export const publishedCertifications = certifications.filter(
  (item) => !item.isPlaceholder,
);
