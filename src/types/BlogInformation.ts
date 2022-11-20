export interface BlogInformation {
    id: number,
    frontmatter: {
      slug: string,
      date: string,
      title: string,
      tag: string,
    }
    body: string,
  }