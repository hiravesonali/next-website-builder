export type PageStatus = 'draft' | 'published' | 'archived';

export interface Page {
  id: string;

  projectId: string;

  title: string;

  slug: string;

  status: PageStatus;

  createdAt: Date;

  updatedAt: Date;
}
