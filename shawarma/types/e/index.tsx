interface AcademyProps {
  id: string;
  logoUrl: string;
  name: string;
  ogImageUrl: string;
  slug: string;
}

interface CategoryProps {
  name: string;
  slug: string;
}

interface FieldProps {
  name: string;
  slug: string;
}

interface LecturersProps {
  id: string;
}

interface TagsProps {
  _id: string;
  text: string;
}

export interface CoursesResultProps {
  academy: AcademyProps;
  category: CategoryProps;
  createdAt: string;
  description: string;
  durationInWeeks: string;
  endDate: string;
  field: FieldProps;
  isInstallmentAvailable: boolean;
  lecturers: LecturersProps;
  name: string;
  ogImageUrl: string;
  platformId: string;
  price: number;
  reviewState: string;
  slug: string;
  slugName: string;
  startDate: string;
  state: string;
  tags: TagsProps;
  url: string;
  youtubeUrl: string;
  _id: string;
}
