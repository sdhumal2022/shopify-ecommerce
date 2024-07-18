export interface Product {
    [x: string]: any;
    id: string;
    title: string;
    description:string;
    body_html: string;
    image: { src: string };
    // Add other fields as needed
  }