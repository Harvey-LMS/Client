'use client';

import React, { useState } from 'react';
import {
   Modal,
   ModalContent,
   ModalHeader,
   ModalBody,
   ModalFooter,
   Button,
   Input,
} from '@nextui-org/react';

interface Props {
   isOpen: boolean;
   onOpenChange: (isOpen: boolean) => void;
   onSave: (name: string) => void;
   name: string;
}

export default function ModalCreate({ isOpen, onOpenChange, onSave, name }: Props) {
   const [input, setInput] = useState('');

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInput(e.target.value);
   };

   const handleCreate = () => {
      onSave(input);
   };

   return (
      <div>
         <Modal size={'3xl'} isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
               {(onClose) => (
                  <div className="flex flex-col gap-1">
                     <ModalHeader className="flex flex-col gap-1 text-3xl font-bold">
                        Create new {name}
                     </ModalHeader>
                     <ModalBody>
                        <div>
                           <p className="font-semibold text-xl">Name your {name}</p>
                           <p>{`What would you like to name your course? Don't worry, you can always change later`}</p>
                        </div>
                        <div>
                           <p className="font-medium">
                              {name.charAt(0).toUpperCase() + name.slice(1)} title
                           </p>
                           <Input
                              onChange={handleChange}
                              variant="bordered"
                              placeholder={`e.g. "Test"`}
                              classNames={{ input: 'px-3' }}
                           />
                        </div>
                     </ModalBody>

                     <ModalFooter className="flex justify-end">
                        <div className="flex flex-row gap-4">
                           <Button variant="light" onPress={onClose}>
                              Cancel
                           </Button>
                           <Button
                              onClick={handleCreate}
                              color={'primary'}
                              onPress={() => {
                                 onClose();
                              }}
                           >
                              Create
                           </Button>
                        </div>
                     </ModalFooter>
                  </div>
               )}
            </ModalContent>
         </Modal>
      </div>
   );
}
