'use client';

import { ICourse } from '@/types/course';
import axios from 'axios';

const deleteCourse = async (id: string): Promise<ICourse[]> => {
   try {
      const res = await axios.delete(`http://localhost:4000/courses/${id}`);
      if (res.status === 200) {
      }
      return res.data;
   } catch (error) {
      console.error('Delete course failed');
   } finally {
      return [];
   }
};

const addCourse = async (course: string): Promise<ICourse> => {
   try {
      const now = new Date();
      const formattedDate = `${now.getFullYear()}-${(now.getMonth() + 1)
         .toString()
         .padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')}`;
      const res = await axios.post('http://localhost:4000/courses', {
         title: course,
         status: 'Not-Active',
         updateAt: formattedDate,
      });
      if (res.status === 200) {
         return res.data;
      }

   } catch (error) {
      console.error('Add course failed');
   } finally {
      return {} as ICourse;
   }
};

export { addCourse, deleteCourse };
