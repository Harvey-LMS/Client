"use client"

import axios from 'axios';

const deleteCourse = async (id: number) => {
   try {
      const res = await axios.delete(`http://localhost:4000/course/`);
      if (res.status === 200) {
      }

   } catch (error) {
      console.error('Delete course failed');
   }
};

export { deleteCourse };
