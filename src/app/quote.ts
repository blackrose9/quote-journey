export class QuoteClass {
   showDetails: boolean;
   constructor(
   public id: number,
   public quoteSays: string,
   public author: string,
   public postedBy: string,
   public votes: number,
   public datePosted: Date,
   ){
      this.showDetails=false
   }
}