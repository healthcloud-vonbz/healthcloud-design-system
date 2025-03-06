import { DialogModal } from '../../DialogModal';
import { DocumentsForm } from '../DocumentsForm';

interface DocumentsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: { documentType: string; documentValue: string }) => void;
  selectedValue?: { documentType: string; documentValue: string };
}

export function DocumentsDialog({
  open,
  onOpenChange,
  onSubmit,
  selectedValue,
}: DocumentsDialogProps) {
  return (
    <div>
      <DialogModal
        open={open}
        onOpenChange={onOpenChange}
        title="Selecione o documento"
      >
        <DocumentsForm
          onSubmit={(data) => {
            onSubmit(data);
            onOpenChange(false);
          }}
          selectedValue={selectedValue}
        />
      </DialogModal>
    </div>
  );
}
