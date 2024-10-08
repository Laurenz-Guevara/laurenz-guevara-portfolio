export interface Block {
  id: string;
  blockName: string | null;
  blockType: string;
}

export interface Pages {
  docs: Docs[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
}

export interface Docs {
  id: string;
  title: string;
  publishedAt: string | null;
  layout: Block[];
  slug: string;
  createdAt: string;
  updatedAt: string;
}

export interface HeroBlock extends Block {
  description: string;
  arrowText: string;
  infoItems: InfoItem[];
  titleOne: Media;
  titleTwo: Media;
}

export interface Globals {
  globalType: string;
  createdAt: string;
  updatedAt: string;
  id: string;
}

export interface Navigation extends Globals {
  navItems: [
    {
      link: {
        type: string;
        variant: string;
        title: string;
        url: string;
      };
      id: string;
    },
  ];
}

export interface Footer extends Globals {
  content: Children[];
  columns: Column[];
}

export interface Children {
  children: {
    text: string;
    children?: {
      text: string;
    }[];
    doc?: {
      value: null;
      relationTo: string;
    };
    linkType: string;
    newTab: boolean;
    type: string;
    url: string;
  };
}

export interface InfoItem {
  infoType: string;
  labelItem: string;
  textItem: string;
  link: {
    type: string;
    variant: string;
    title: string;
    url: string;
  } | null;

  id: string;
}

export interface SpacerBlock extends Block {
  spacer: string;
}

interface Media {
  id: string;
  alt: string;
  prefix: string;
  updatedAt: string;
  createdAt: string;
  url: string;
  filename: string;
  mimeType: string;
  filesize: number;
  width: number;
  height: number;
}

export interface HeadingBlock extends Block {
  heading: string;
  subheading: string | null;
}

export interface AnimatedBlock extends Block {
  animated: [
    {
      title: string;
      id: string;
    },
  ];
}

export interface TwoColumnTextBlock extends Block {
  twoColumnText: [
    {
      heading: string;
      text: string;
      id: string;
    },
  ];
}

export interface ContactBlock extends Block {
  title: string;
  content: Children[];
}

export interface FAQBlock extends Block {
  faq: [
    {
      question: string;
      answer: string;
      id: string;
    },
  ];
}

export interface Column {
  links: Link[];
  id: string;
}

export interface Link {
  link: {
    type: string;
    variant: string;
    title: string;
    url: string;
  };
  id: string;
}

export interface UnderConstructionBlock extends Block {
  underConstruction: string;
}
