import { MdOutlineSubtitles } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import FieldCourse from "./fieldCourse";
import ThumbnailCourseField from "./thumbnailCourse";

import { BiCategory } from "react-icons/bi";
import { MdOutlinePriceChange } from "react-icons/md";
import ListItemsCourse from "./listItemsCourse";
import EditorCourse from "./editorCourse";
import PriceFieldCourse from "./priceFieldCourse";





// DATA
import { Ilanguage, language } from "@/data/language";

const CourseGeneral: React.FC = () => {
    return (
        <div className="w-full ">
            <div className="flex flex-row justify-between items-center px-5 mt-3">
                <p className="font-bold">{`Complete all field (0/6)`}</p>
                <div className="px-9 py-2 bg-hover-2 rounded-sm font-bold text-muted-foreground">
                    Not Active
                </div>
            </div>


            <div className="flex flex-row justify-start items-start w-full gap-2 p-4 relative overflow-visible">
                <div className="w-9/12 border rounded-lg px-3 shadow-md py-3 ">
                    <div className="flex flex-row justify-start items-center gap-3">
                        <MdOutlineSubtitles className="text-5xl"></MdOutlineSubtitles>
                        <p className="font-bold text-2xl">Course Details</p>
                    </div>
                    <div className="mt-1 border border-hover-2">
                    </div>
                    <FieldCourse
                        title="Title"
                        value="Course value"
                    ></FieldCourse>
                    <EditorCourse
                        title="Description"
                        value={`Description valueDescription valueDescription valu
                        eDescription valueDescription valuscription valueDescription valueDescription valu
                        eDescription valueDescription valscription valueDescription valueDescription valu
                        eDescription valueDescription valscription valueDescription valueDescription valu
                        eDescription valueDescription valscription valueDescription valueDescription valu
                        eDescription valueDescription valscription valueDescription valueDescription valu
                        eDescription valueDescription valscription valueDescription valueDescription valu
                        eDescription valueDescription valscription valueDescription valueDescription valu
                        eDescription valueDescription valscription valueDescription valueDescription valu
                        eDescription valueDescription valscription valueDescription valueDescription valu
                        eDescription valueDescription valscription valueDescription valueDescription valu
                        eDescription valueDescription valscription valueDescription valueDescription valu
                        eDescription valueDescription valscription valueDescription valueDescription valu                        eDescription valueDescription valscription valueDescription valueDescription valu
                        eDescription valueDescription valscription valueDescription valueDescription valu
                        eDescription valueDescription valscription valueDescription valueDescription valu
                        eDescription valueDescription valscription valueDescription valueDescription valu
                        eDescription valueDescription valscription valueDescription valueDescription valu
                        eDescription valueDescription valscription valueDescription valueDescription valu
                        eDescription valueDescription valscription valueDescription valueDescription valu
                        eDescription valueDescription valscription valueDescription valueDescription valu
                        eDescription valueDescription valscription valueDescription valueDescription valu
                        eDescription valueDescription valscription valueDescription valueDescription valu
                        eDescription valueDescription valscription valueDescription valueDescription valu
                        eDescription valueDescription valscription valueDescription valueDescription valu
                        eDescription valueDescription valscription valueDescription valueDescription valu                        eDescription valueDescription valscription valueDescription valueDescription valu
                        eDescription valueDescription valscription valueDescription valueDescription valu
                        eDescription valueDescription valscription valueDescription valueDescription valu
                        eDescription valueDescription valscription valueDescription valueDescription valu
                        eDescription valueDescription valscription valueDescription valueDescription valu
                        eDescription valueDescription valscription valueDescription valueDescription valu
                        eDescription valueDescription valscription valueDescription valueDescription valu
                        eDescription valueDescription valscription valueDescription valueDescription valu
                        eDescription valueDescription valscription valueDescription valueDescription valu
                        eDescription valueDescription valscription valueDescription valueDescription valu
                        eDescription valueDescription valscription valueDescription valueDescription valu
                        eDescription valueDescription valscription valueDescription valueDescription valu
                        eDescription valueDescription valscription valueDescription valueDescription valu
                        eDescription valueDescription valscription valueDescription valueDescription valu
                        eDescription valueDescription valscription valueDescription valueDescription valu
                        eDescription valueDescription valscription valueDescription valueDescription valu
                        eDescription valueDescription valeDescription valueDescription valueDescription value
                        Description valueDescription valueDescription valueDescription valueDescription value
                        Description valueDescription value`}
                    ></EditorCourse>
                    <ThumbnailCourseField
                        title="Thumbnail"
                        value={null}
                    ></ThumbnailCourseField>
                </div>

                <div className="w-3/12 sticky top-20">
                    <div className="flex flex-col gap-3">
                        <div className=" border rounded-lg px-3 shadow-sm py-3">
                            <div className="flex flex-row justify-start items-center gap-3">
                                <MdOutlinePriceChange className="text-5xl"></MdOutlinePriceChange>
                                <p className="font-bold text-2xl">Price</p>
                            </div>
                            <div className="mt-1 border border-hover-2">
                            </div>
                            <PriceFieldCourse
                                title="Price"
                                value="4"
                            />

                            <PriceFieldCourse
                                title="Discount"
                                value="3"
                            />
                        </div>

                        <div className=" border rounded-lg px-3 py-3 shadow-sm ">
                            <div className="flex flex-row justify-start items-center gap-3">
                                <BiCategory className="text-5xl"></BiCategory>
                                <p className="font-bold text-2xl">Category</p>
                            </div>
                            <div className="mt-1 border border-hover-2">
                            </div>
                            <ListItemsCourse
                                title="Language"
                                value={["Swati", "Vietnamese"]}
                                list={language.map((item: Ilanguage) => item.name)}
                            />

                            <ListItemsCourse
                                title="Category"
                                value={["Price value", "setValueInput"]}
                                list={["Price value", "setValueInput"]}
                                add
                            />
                            <ListItemsCourse
                                title="Tag"
                                value={["Price value", "setValueInput", "setValueInput", "setValueInput", "setValueInput", "setValueInput", "setValueInput", "setValueInput", "setValueInput", "setValueInput"]}
                                add
                            />

                            <FieldCourse 
                            title="Level" 
                            value="Hard" 
                            type="select"
                            />


                            <FieldCourse
                            title="Premiere"
                            value="22-12-2003" 
                            type="datetime"
                            />


                            
                        </div>
                    </div>
                </div>

            </div>
        </div>);
}

export default CourseGeneral;