export interface ICourse {
   id: string;
   title: string;
   descriptions: string;
   language: string;
   level: string;
   price: number;
   discountPrice: number;
   category: string;
   thumnailURL: string;
   updateAt: string;
   status: "Active" | "Not-Active" | "Upcoming"
}

export interface ILesson {
   id: number;
   title: string;
   content: string;
   url: string;
   typeFile: string;
}

export interface IChapter {
   id: number;
   title: string;
   description: string;
   lessons: ILesson[];
}
