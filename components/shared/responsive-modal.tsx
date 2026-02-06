import React from 'react';
import {useMedia} from "react-use"
import { Drawer, DrawerContent } from '../ui/drawer';
import { Dialog, DialogContent } from '../ui/dialog';

interface ResponsiveModalProps {
    children: React.ReactNode;
    open: boolean;
    onOpenChange: (open: boolean) => void;
}
const ResponsiveModal = ({children, onOpenChange, open}:ResponsiveModalProps) => {
    const isDesktop = useMedia("(min-width: 1024px", true)

    if (isDesktop) {
        return (
            <Dialog open={open} onOpenChange={onOpenChange}>
                <DialogContent className='w-full sm:max-w-lg p-0 border-none overflow-y-auto hide-scrollbar max-h-[85vh]'>
                    {children}
                </DialogContent>
            </Dialog>
        )
    }

  return (
      <Drawer open={open} onOpenChange={onOpenChange}>
        <DrawerContent>
          <div className='overflow-y-auto hide-scrollbar max-h-[85vh] overflow-x-hidden'>
              {children}
          </div>
        </DrawerContent>
      </Drawer>
  )
    
};

export default ResponsiveModal;