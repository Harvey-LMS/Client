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
         <Modal size={'md'} isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
               {(onClose) => (
                  <div className="flex flex-col gap-1">
                     <ModalHeader className="flex justify-center items-center">
                        <span className="text-3xl font-semibold">Create new {name}</span>
                     </ModalHeader>
                     <ModalBody>
                        <div className="m-2 text-center w-full">
                           <Input
                              clearable
                              fullWidth
                              size="lg"
                              placeholder={`Enter to ${name} name`}
                              onChange={handleChange}
                           />
                        </div>
                     </ModalBody>
                     <ModalFooter className="flex justify-end">
                        <div className="flex flex-row gap-8">
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
