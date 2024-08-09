import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

export const ExpandableComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [contentHeight, setContentHeight] = useState(0);
    const [isOverflow, setIsOverflow] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);
    
    const [content, setContent] = useState<string>("");

    useEffect(() => {
        if (contentRef.current) {
            const currentHeight = contentRef.current.scrollHeight;
            setContentHeight(currentHeight);
            setIsOverflow(currentHeight > 250);
        }
    }, [contentRef.current?.scrollHeight]);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>

            <button onClick={(e) => {
                setContent(`
                    
                    
                    ("lkasjdlksadjlksajdlksajdlksajdlksajdlkasjdlkasjdlkasjdlaksjdlkasjdlkasdjaslkdjaslkdjaslkdjsalkdjlkasd"
                    asdjas
                    asdjasas
                    daskdasd
                    sad
                    as
                    daskdasdasd
                    as
                    d
                    as
                    daskdasdasdas
                    <data value="sadad
                    a
                    sadasd
                    
                    asddad
                    asddadsd
                    asd
                    asd
                    "></data>
                    `)
            }}>setcontent</button>
            <motion.div
                initial={{ height: 'auto' }}
                animate={{ height: isOpen ? contentHeight : (isOverflow ? 250 : 'auto') }}
                transition={{ duration: 0.5 }}
                style={{ overflow: 'hidden' }}
            >



                <div ref={contentRef} style={{ padding: '20px', background: '#f0f0f0' }}>
                    {content}
                </div>
            </motion.div>
            {isOverflow && (
                <button onClick={toggleOpen}>
                    {isOpen ? 'Thu gọn' : 'Xem thêm'}
                </button>
            )}
        </div>
    );
};