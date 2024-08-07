"use client"

import { Button, DatePicker, Input } from "@nextui-org/react";
import { useState } from "react";
import { FiEdit } from "react-icons/fi";

import { parseDateTime, getLocalTimeZone, CalendarDateTime, today } from "@internationalized/date";
import { useDateFormatter } from "@react-aria/i18n";

import parseCalendarDateTimeToString from "@/util/parseCalendarDateTimeToString";


interface DateTimeFieldCourseProps {
    title: string;
    value: string;
}

const DateTimeFieldCourse: React.FC<DateTimeFieldCourseProps> = ({ title, value }: DateTimeFieldCourseProps) => {
    const [editMode, setEditMode] = useState<boolean>(false);

    const [valueInput, setValueInput] = useState<CalendarDateTime>(parseDateTime(value));

    const [data, setData] = useState<CalendarDateTime>(valueInput);

    let formatter = useDateFormatter({ dateStyle: "full" });


    const handleSave = () => {
        setData(valueInput);
        setEditMode(false);
    }

    const handleCancel = () => {
        setValueInput(data);
        setEditMode(false);
    }

    return (
        <div className="my-3 flex flex-col justify-start items-start w-full px-3 py-2 pb-3 border rounded-lg bg-gray-100 dark:bg-stone-950">
            <div className="flex flex-row justify-between items-center gap-3 w-full">
                <p className="font-bold text-lg text-foreground">Course {title}</p>
                <div
                    className="flex flex-row gap-3 justify-center items-center p-3 2xl:px-3 2xl:py-0 rounded-md text-md font-semibold text-black dark:text-white cursor-pointer hover:bg-hover"
                    onClick={() => {
                        setEditMode(!editMode);
                    }}
                >
                    <div>
                        <FiEdit />
                    </div>

                    <p className="hidden 2xl:block">
                        Edit {title.toLowerCase()}
                    </p>
                </div>
            </div>

            <div className="flex flex-row justify-between items-center gap-3 w-full mt-3">
                {editMode ? (
                    <DatePicker
                        value={valueInput}
                        onChange={setValueInput}
                        hourCycle={24}
                        minValue={today(getLocalTimeZone())}
                    />
                ) : (
                    <div>
                        {data && parseCalendarDateTimeToString(data)}
                    </div>
                )}
            </div>

            {editMode ? (
                <div className="flex flex-row justify-end items-center gap-3 w-full mt-3">
                    <Button variant="light" color="danger" onClick={handleCancel}>
                        Cancel
                    </Button>
                    <Button
                        variant="solid"
                        color="primary"
                        className="min-w-0 px-16"
                        onClick={handleSave}
                    >
                        Save
                    </Button>
                </div>
            ) : (
                <></>
            )}
        </div>
    );
}

export default DateTimeFieldCourse;