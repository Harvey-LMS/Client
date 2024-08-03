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
import DateTimeFieldCourse from "./dateTimeCourseField";

const CourseGeneral: React.FC = () => {
    return (
        <div className="w-full ">
            <div className="flex flex-row justify-between items-center px-5 mt-3">
                <p className="font-bold">{`Complete all field (0/6)`}</p>
                <div className="px-9 py-2 bg-hover-2 rounded-sm font-bold text-muted-foreground">
                    Not Active
                </div>
            </div>


            <div className="flex flex-row justify-start items-start w-full gap-2 p-4 ">
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
                        value={`<p><em>aspdlkjsa;kldjaslkdjaslkdjlkasdjlksajd </em></p><p><br></p><p><u>asd;ljas;dkas ;ldsa;d;asl dk</u></p><p class="ql-align-center">;asldk;askd;laskd</p><p class="ql-align-right">asd;lja;sldk</p><p>asd;jasd</p><ol><li>asdjas</li></ol><ul><li>daskd</li></ul><h1><span class="ql-font-serif">asdjasd</span></h1><h1>dk'</h1><p><br></p>`}
                    ></EditorCourse>
                    <ThumbnailCourseField
                        title="Thumbnail"
                        value={null}
                    ></ThumbnailCourseField>
                </div>

                <div className="w-3/12 sticky top-20 block overflow-x-hidden h-full overflow-y-auto">
                    <div className="flex flex-col gap-2">
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
                                type="discount"
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
                                value={["IELTS", "TOEIC", "Fast learn"]}         
                                list={["IELTS", "TOEIC", "Fast learn"]}                       
                                add
                            />

                            <FieldCourse 
                            title="Level" 
                            value="Hard" 
                            type="select"
                            />


                            <DateTimeFieldCourse
                            title="Premiere"
                            value="2024-07-29T10:15:30"
                            />


                            
                        </div>
                    </div>
                </div>

            </div>
        </div>);
}

export default CourseGeneral;