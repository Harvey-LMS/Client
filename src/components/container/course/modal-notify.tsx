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
import { IoIosCheckmarkCircle } from 'react-icons/io';

interface Props {
   isOpen: boolean;
   onOpenChange: (isOpen: boolean) => void;
   message: string;
}

export default function ModalNotify({ isOpen, onOpenChange, message }: Props) {
   return (
      <div>
         <Modal size={'3xl'} isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
               {(onClose) => (
                  <div className="flex flex-col gap-1">
                     <ModalHeader className="flex flex-col gap-1 text-3xl font-bold">
                        <IoIosCheckmarkCircle />
                     </ModalHeader>
                     <ModalBody>
                        <div>
                           <p className="font-semibold text-xl">{message}</p>
                        </div>
                     </ModalBody>

                     <ModalFooter className="flex justify-end">
                        <div className="flex flex-row gap-4">
                           <Button variant="light" onPress={onClose}>
                              Close
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
