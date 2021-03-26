export class MovieNews {

  Title: string;
  PublishDate: string;
  HTMLLead: string;
  ImageURL: string;

  constructor(value?: string, date?: string, lead?: string, url?: string) {

    this.Title = value;
    this.PublishDate = date;
    this.HTMLLead = lead;
    this.ImageURL = url;
  }


}
