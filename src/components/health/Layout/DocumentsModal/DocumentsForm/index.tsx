import { useEffect, useRef } from 'react';
import { Mask } from 'maska';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input, RadioGroup } from '@/components/health/Form';

import { brazilianDocuments } from './constant';

type DocumentsFormProps = {
  onSubmit: (data: { documentType: string; documentValue: string }) => void;
  selectedValue?: { documentType: string; documentValue: string };
};

type FormData = {
  documentType: string;
  documentValue: string;
};

export function DocumentsForm({ onSubmit, selectedValue }: DocumentsFormProps) {
  const form = useForm<FormData>({
    defaultValues: {
      documentType: selectedValue?.documentType || '',
      documentValue: selectedValue?.documentValue || '',
    },
  });

  const selectedDoc = form.watch('documentType');

  const currentDoc = brazilianDocuments.find(
    (doc) => doc.document_name === selectedDoc,
  );

  const maskInstance = new Mask({ mask: currentDoc?.mask });

  // Ref para detectar a primeira renderização
  const isFirstRender = useRef(true);

  // 🔹 Reseta `documentValue` APENAS se não for a primeira renderização
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    form.setValue('documentValue', '');
  }, [selectedDoc]);

  const submitHandler = (documentData: FormData) => {
    onSubmit(documentData);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(submitHandler)}
        className="flex flex-col gap-8"
      >
        <FormField
          control={form.control}
          name="documentType"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-4">
              <FormControl className="relative">
                <RadioGroup
                  value={field.value}
                  options={brazilianDocuments.map((doc) => ({
                    value: doc.document_name,
                    label: doc.document_name,
                  }))}
                  onChange={(val) => {
                    field.onChange(val);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {selectedDoc && currentDoc && (
          <FormField
            control={form.control}
            name="documentValue"
            rules={{
              required: 'Campo é obrigatório',
              validate: (value) =>
                maskInstance.completed(value) || `O campo não está completo.`,
            }}
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormControl className="bg-white">
                  <Input
                    {...field}
                    onChange={(e) => {
                      field.onChange(maskInstance.masked(e.target.value));
                    }}
                    placeholder={`${currentDoc.document_name}`}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        <Button disabled={!form.formState.isValid}>Selecionar</Button>
      </form>
    </Form>
  );
}
