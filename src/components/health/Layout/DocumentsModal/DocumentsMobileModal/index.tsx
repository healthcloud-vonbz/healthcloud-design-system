import { MobileModal } from '../../MobileModal';
import { DocumentsForm } from '../DocumentsForm';

interface FilterModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: { documentType: string; documentValue: string }) => void;
  selectedValue?: { documentType: string; documentValue: string };
}

export function DocumentsMobileModal({
  open,
  onOpenChange,
  onSubmit,
  selectedValue,
}: FilterModalProps) {
  return (
    <MobileModal
      open={open}
      onOpenChange={onOpenChange}
      title="Selecione o Documento"
    >
      <DocumentsForm
        onSubmit={(data) => {
          onSubmit(data);
          onOpenChange(false);
        }}
        selectedValue={selectedValue}
      />
    </MobileModal>
  );
}
