export interface ICourse {
   id: number;
   title: string;
   descriptions: string;
   language: string;
   level: string;
   price: number;
   discountPrice: number;
   category: string;
   thumnailURL: string;
   updateAt: string;
   status: string;
}

export interface IDraftCourse {
   id: number;
   title: string;
   descriptions: string;
   language: string;
   level: string;
   price: number;
   discountPrice: number;
   category: string;
   thumnailURL: string;
   updateAt: string;
   status: string;
}

export interface ILesson {
   id: string;
   title: string;
   content: string;
   orderIndex: number;
}

export interface IChapter {
   id: string;
   title: string;
   description: string;
   lessons: ILesson[];
   orderIndex: number;
}
