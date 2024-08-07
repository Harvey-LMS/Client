'use client';

import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from '@nextui-org/react';
import { IoIosAdd, IoIosArrowRoundBack } from 'react-icons/io';
import RowData from './course/course';
import Link from 'next/link';
import { Suspense, useEffect, useLayoutEffect, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import path from 'path';
import { AnimatePresence, motion } from 'framer-motion';
import ChooseBarProps from '../layout/ChooseBar';
import Course from "@/components/container/dashboard/course/course";
import { ICourse } from '@/types/course';
import axios from 'axios';
import { add } from 'lodash';
import { title } from 'process';
import { addCourse } from '@/app/dashboard/(courses)/courses/handle';

interface reponseCoursePage {
  first: number,
  prev: number,
  next: number,
  last: number,
  pages: number,
  items: number,
  data: ICourse[]
}

interface Props {
  course: ICourse[],
  coursePage: number,
  courseTotalPage: number
}

const tabs = ["Course", "Draft-Course"] as [string, string, ...string[]];

const Courses: React.FC<Props> = ({ course, coursePage, courseTotalPage }: Props) => {
  const [initialTab, setInitialTab] = useState<string>("");
  const [titleCreate, setTitleCreate] = useState<string>("");
  const [errorMessageCreate, setErrorMessageCreate] = useState<string>("");
  const [isErrorCreate, setIsErrorCreate] = useState<boolean>(false);

  const router = useRouter();

  const searchParams = useSearchParams();

  const pathName = usePathname();

  useEffect(() => {
    if (searchParams.has("tab")) {
      const tab = searchParams.get("tab");

      if (tab && tabs.includes(tab)) {
        setInitialTab(tab);
      }
    }
    else {
      setInitialTab(tabs[0]);
    }
  }, [searchParams]);

  const { isOpen: isOpenCreate, onOpen: onOpenCreate, onOpenChange: onOpenChangeCreate, onClose: onCloseCreate } = useDisclosure();

  const handleOnOpenChangeCreate = () => {
    onOpenChangeCreate();
    setTitleCreate("");
    setErrorMessageCreate("")
    setIsErrorCreate(false)
  }

  const handleSaveCourse = async () => {
    if (titleCreate === "") {
      return;
    }
    const response = addCourse(titleCreate);
    onCloseCreate();
    const id = (await response).id;
    router.push(`/dashboard/courses/edit/${id}`);

  }

  const handleBlurErroCreate = () => {
    if (titleCreate === "") {
      setErrorMessageCreate("Title can't be empty")
      setIsErrorCreate(true)
    }
  }


  return (
    <>

      <Modal classNames={{ wrapper: " transition-height duration-1000 ease-in-out" }} size="3xl" isOpen={isOpenCreate} onOpenChange={handleOnOpenChangeCreate}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-3xl font-bold">Create Course</ModalHeader>
              <ModalBody>
                <div>
                  <p className="font-semibold text-xl">Name your course</p>
                  <p>{`What would you like to name your course? Don't worry, you can always change later`}</p>
                </div>
                <div>
                  <p className="font-semibold">Course title</p>
                  <Input
                    value={titleCreate}
                    onChange={(e) => setTitleCreate(e.target.value)}
                    variant="bordered"
                    placeholder={`e.g. "Toeic"`}
                    classNames={{ input: "px-3" }}
                    onBlur={handleBlurErroCreate}
                    errorMessage={
                      <AnimatePresence>
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="whitespace-wrap w-full"
                        >
                          {errorMessageCreate}
                        </motion.div>
                      </AnimatePresence>
                    }
                    isInvalid={isErrorCreate}
                  />
                </div>
              </ModalBody>
              <ModalFooter className="justify-center">
                <Button color="primary" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button color="primary" onPress={handleSaveCourse}>
                  Create
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      <ChooseBarProps
        title='Courses'
        tabs={{ key: tabs, change: (a: string) => setInitialTab(a), value: initialTab }}
        create={{ title: "Create Course", onClick: onOpenCreate }}
      />

      <Course course={course} coursePage={coursePage} courseTotalPage={courseTotalPage} tab={initialTab}></Course>
    </>
  );
}
export default Courses;
