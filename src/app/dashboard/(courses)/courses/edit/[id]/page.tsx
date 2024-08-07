import CourseGeneral from "@/components/container/course/view/courseGeneral";
import CourseEdit from "@/components/container/course/view/edit/courseEdit";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Course Edit",
    description: "Course Edit",
  };

const Page = async() => {
    
    const course = {
        "id": "3",
        "title": "React Native3",
        "descriptions": "React Native: The Practical Guide [2021 Edition]",
        "language": ["Vietnamese", "English"],
        "level": "Easy",
        "price": 19.99,
        "discountPrice": 9.99,
        "category": ["React Native", "Mobile Development"],
        "thumnailURL": "http://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
        "updateAt": "2021-07-01",
        "status": "No-Active",
        "chapters": [
            {
                "id": "1",
                "title": "Getting started",
                "description": "Description started",
                "lessons": [
                    {
                        "id": 1,
                        "title": "Introduction",
                        "content": "Content update",
                        "url": "",
                        "orderIndex": 1
                    }
                ],
                "orderIndex": 3
            },
            {
                "id": "2",
                "title": "Basic",
                "description": "Description basic",
                "lessons": [
                    {
                        "id": 1,
                        "title": "Basics Reading",
                        "content": "Content 21",
                        "url": "",
                        "orderIndex": 1
                    },
                    {
                        "id": 2,
                        "title": "Basics Writing",
                        "content": "Content",
                        "url": "",
                        "orderIndex": 2
                    }
                ],
                "orderIndex": 1
            },
            {
                "id": "3",
                "title": "Practice",
                "description": "Description practice",
                "lessons": [
                    {
                        "id": 2,
                        "title": "Writting",
                        "content": "This is default content",
                        "url": "",
                        "orderIndex": 1
                    },
                    {
                        "id": 1,
                        "title": "Reading",
                        "content": "This is default content",
                        "url": "",
                        "orderIndex": 2
                    }
                ],
                "orderIndex": 2
            },
            {
                "id": "4",
                "title": "Test",
                "description": "Description test",
                "lessons": [
                    {
                        "id": 1,
                        "title": "Practice Test",
                        "content": "Content 41",
                        "url": "",
                        "orderIndex": 1
                    },
                    {
                        "id": 2,
                        "title": "Final Test",
                        "content": "Content 42",
                        "url": "",
                        "orderIndex": 2
                    }
                ],
                "orderIndex": 4
            }
        ]

    }

    return ( 
        <CourseEdit >

        </CourseEdit>
    );
}

export default Page;