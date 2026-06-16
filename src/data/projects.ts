export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Historic Estate Boundary',
    description: '',
    image: '/images/gallery-project1.jpg'
  },
  {
    id: 2,
    title: 'Modern Gate Installation',
    description: '',
    image: '/images/gallery-project2.jpg'
  },
  {
    id: 4,
    title: 'Urban Privacy Solution',
    description: '',
    image: '/images/gallery-project4.jpg'
  }
];

