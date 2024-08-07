export interface ICourse {
   id: string;
   title: string;
   descriptions: string;
   language: string;
   level: "Easy" | "Medium" | "Hard" | "Plus";
   price: number;
   discountPrice: number;
   category: string;
   thumnailURL: string | "";
   updateAt: string;
   status: "Active" | "Not-Active" | "Upcoming"
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

export interface IAccount {
   id: string;
   username: string;
   password: string;
   email: string;
}
