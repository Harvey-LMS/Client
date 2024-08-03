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
import { motion } from 'framer-motion';
import ChooseBarProps from '../layout/ChooseBar';
import Course from "@/components/container/dashboard/course/course";
import { ICourse } from '@/types/course';
import axios from 'axios';

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

const tabs: [string, string, ...string[]] = ["Course", "Draft-Course"];

const Courses: React.FC<Props> = ({course, coursePage, courseTotalPage}: Props) => {
  const [initialTab, setInitialTab] = useState<string>(tabs[0]);

  const tabsProps = {
    key: tabs,
    change: (a: string) => setInitialTab(a),
    value: initialTab
  };

  const searchParams = useSearchParams();

  const pathName = usePathname();

  useEffect(() => {
    if (searchParams.has("tab")) {
      const tab = searchParams.get("tab");
      if (tab && tabs.includes(tab)) {
        setInitialTab(tab);
      }
    }
  }, [searchParams]);

  const { isOpen: isOpenCreate, onOpen: onOpenCreate, onOpenChange: onOpenChangeCreate } = useDisclosure();



  return (
    <div className=''>
      <Modal size="3xl" isOpen={isOpenCreate} onOpenChange={onOpenChangeCreate}>
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
                  <p className="font-medium">Course title</p>
                  <Input variant="bordered" placeholder={`e.g. "Toeic"`} classNames={{ input: "px-3" }} />
                </div>
              </ModalBody>
              <ModalFooter className="justify-center">
                <Button color="primary" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button color="primary" onPress={onClose}>
                  Create
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      <ChooseBarProps tabs={tabsProps}>

      </ChooseBarProps>
      <Course course={course} coursePage={coursePage} courseTotalPage={courseTotalPage} tab={initialTab}></Course>
    </div>
  );
}
export default Courses;
