import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';

interface FilterModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  children: React.ReactNode;
}

export function MobileModal({
  open,
  onOpenChange,
  title,
  children,
}: FilterModalProps) {
  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="rounded-md mx-2 max-h-[80%] p-0">
        <DrawerHeader>
          <DrawerTitle>{title}</DrawerTitle>
        </DrawerHeader>

        <DrawerDescription></DrawerDescription>

        <div className="overflow-y-auto px-4 mb-10">{children}</div>
      </DrawerContent>
    </Drawer>
  );
}
