import React, { createContext, useContext, ReactNode } from 'react';

const ChapterContext = createContext<string | undefined>(undefined);

export const ChapterProvider: React.FC<{ chapterId: string; children: ReactNode }> = ({
   chapterId,
   children,
}) => {
   return <ChapterContext.Provider value={chapterId}>{children}</ChapterContext.Provider>;
};

export const useChapterId = () => {
   const context = useContext(ChapterContext);
   if (context === undefined) {
      throw new Error('useChapterId must be used within a ChapterProvider');
   }
   return context;
};
