"use client"

import { ICourse } from '@/types/course';
import axios from 'axios';

const deleteCourse = async (id: string): Promise<ICourse[]> => {
   try {
      const res = await axios.delete(`http://localhost:4000/courses/${id}`);

      console.log (res.data)
      if (res.status === 200) {
      }
      return res.data;

   } catch (error) {
      console.error('Delete course failed');
   }
   finally {
      return [];
   }


};

export { deleteCourse };
