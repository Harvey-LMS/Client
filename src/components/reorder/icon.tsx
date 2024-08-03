import { DragControls } from 'framer-motion';
import { MdDragIndicator } from 'react-icons/md';

interface Props {
   dragControls: DragControls;
}

export function ReorderIcon({ dragControls }: Props) {
   return (
      <MdDragIndicator
         className="text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
         onPointerDown={(event) => dragControls.start(event)}
      />
   );
}
