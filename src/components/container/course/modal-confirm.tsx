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
import { BiTrash } from 'react-icons/bi';

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
                  <div className="flex flex-col gap-1 p-4 border-solid m-4">
                     <ModalHeader className="flex flex-col gap-1">
                        <div className="flex flex-row gap-1">
                           <BiTrash className="w-8 h-8 text-red-500" />
                           <span className="flex justify-center items-center text-2xl font-semibold text-red-500">
                              Confirm Delete
                           </span>
                        </div>
                        <div className="border border-gray-200 bg-white"></div>
                     </ModalHeader>
                     <ModalBody>
                        <div className="m-2 text-center">
                           <span className="text-md font-semibold">
                              Are you sure want to delete?
                           </span>
                           <span className="text-sm opacity-80 block mt-2">
                              This action cannot be undone.
                           </span>
                        </div>
                     </ModalBody>
                     <ModalFooter className="flex justify-center">
                        <Button
                           color="danger"
                           onPress={() => {
                              onConfirmDelete();
                              onClose();
                           }}
                        >
                           Yes
                        </Button>
                        <Button color="primary" variant="light" onPress={onClose}>
                           No
                        </Button>
                     </ModalFooter>
                  </div>
               )}
            </ModalContent>
         </Modal>
      </div>
   );
}
