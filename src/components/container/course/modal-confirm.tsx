'use client';

import React from 'react';
import {
   Modal,
   ModalContent,
   ModalHeader,
   ModalBody,
   ModalFooter,
   Button,
} from '@nextui-org/react';
import { TiDelete } from 'react-icons/ti';

interface Props {
   isOpen: boolean;
   onOpenChange: (isOpen: boolean) => void;
   onConfirmDelete: () => void;
}

export default function ConfirmDeleteModal({ isOpen, onOpenChange, onConfirmDelete }: Props) {
   return (
      <div>
         <Modal size={'md'} isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
               {(onClose) => (
                  <div className="flex flex-col gap-1">
                     <ModalHeader className="flex justify-center items-center">
                        <TiDelete className="text-9xl" color="red" />
                     </ModalHeader>
                     <ModalBody>
                        <div className="m-2 text-center">
                           <span className="text-3xl font-semibold">Are you sure?</span>
                           <span className="text-sm opacity-70 block mt-2">
                              This action cannot be undone.
                           </span>
                        </div>
                     </ModalBody>
                     <ModalFooter className="flex justify-center">
                        <div className="flex flex-row gap-8">
                           <Button variant="light" onPress={onClose}>
                              Cancel
                           </Button>
                           <Button
                              className="bg-red-600 text-white"
                              onPress={() => {
                                 onConfirmDelete();
                                 onClose();
                              }}
                           >
                              Delete
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
