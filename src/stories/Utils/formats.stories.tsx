import { useState } from 'react';
import { Input } from '@/components';
import {
  utilsFormatCep,
  utilsFormatCnpj,
  utilsFormatCpf,
  utilsFormatDate,
  utilsOnlyLetters,
  utilsOnlyNumbers,
  utilsPhoneWithDDD,
} from '@/utils';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Utils/Masks',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Conjunto de máscaras utilizando a biblioteca [Maska](https://beholdr.github.io/maska/).',
      },
    },
  },
};

export default meta;

type Story = StoryObj;

export const Telefone: Story = {
  render: () => {
    const [value, setValue] = useState('');

    return (
      <div className="max-w-[400px] m-auto space-y-6">
        <strong>Telefone com DDD:</strong>{' '}
        <Input
          type="text"
          value={value}
          placeholder="(00) 00000-0000"
          onChange={(e) => setValue(utilsPhoneWithDDD.masked(e.target.value))}
        />
        <div>
          <h4 className="font-normal">
            Preencha para o input para checar se a máscara é válida
          </h4>

          {utilsPhoneWithDDD.completed(value) ? (
            <p className="text-green-600">Máscara válida</p>
          ) : (
            <p className="text-red-600">Máscara inválida</p>
          )}
        </div>
        <div>
          <h4 className="font-normal">
            Preencha para o input para remover a mascára com o método unmasked
          </h4>

          {utilsPhoneWithDDD.unmasked(value)}
        </div>
      </div>
    );
  },
};

export const CPF: Story = {
  render: () => {
    const [value, setValue] = useState('');

    return (
      <div className="max-w-[400px] m-auto space-y-6">
        <strong>CPF:</strong>{' '}
        <Input
          type="text"
          placeholder="000.000.000-00"
          value={value}
          onChange={(e) => setValue(utilsFormatCpf.masked(e.target.value))}
        />
        <div>
          <h4 className="font-normal">
            Preencha para o input para checar se a máscara é válida
          </h4>

          {utilsFormatCpf.completed(value) ? (
            <p className="text-green-600">Máscara válida</p>
          ) : (
            <p className="text-red-600">Máscara inválida</p>
          )}
        </div>
        <div>
          <h4 className="font-normal">
            Preencha para o input para remover a mascára com o método unmasked
          </h4>

          {utilsFormatCpf.unmasked(value)}
        </div>
      </div>
    );
  },
};

export const CNPJ: Story = {
  render: () => {
    const [value, setValue] = useState('');

    return (
      <div className="max-w-[400px] m-auto space-y-6">
        <strong>CNPJ:</strong>{' '}
        <Input
          type="text"
          placeholder="00.000.000/0000-00"
          value={value}
          onChange={(e) => setValue(utilsFormatCnpj.masked(e.target.value))}
        />
        <div>
          <h4 className="font-normal">
            Preencha para o input para checar se a máscara é válida
          </h4>

          {utilsFormatCnpj.completed(value) ? (
            <p className="text-green-600">Máscara válida</p>
          ) : (
            <p className="text-red-600">Máscara inválida</p>
          )}
        </div>
        <div>
          <h4 className="font-normal">
            Preencha para o input para remover a mascára com o método unmasked
          </h4>

          {utilsFormatCnpj.unmasked(value)}
        </div>
      </div>
    );
  },
};

export const CEP: Story = {
  render: () => {
    const [value, setValue] = useState('');

    return (
      <div className="max-w-[400px] m-auto space-y-6">
        <strong>CEP:</strong>{' '}
        <Input
          type="text"
          placeholder="00000-000"
          value={value}
          onChange={(e) => setValue(utilsFormatCep.masked(e.target.value))}
        />
        <div>
          <h4 className="font-normal">
            Preencha para o input para checar se a máscara é válida
          </h4>

          {utilsFormatCep.completed(value) ? (
            <p className="text-green-600">Máscara válida</p>
          ) : (
            <p className="text-red-600">Máscara inválida</p>
          )}
        </div>
        <div>
          <h4 className="font-normal">
            Preencha para o input para remover a mascára com o método unmasked
          </h4>

          {utilsFormatCep.unmasked(value)}
        </div>
      </div>
    );
  },
};

export const Data: Story = {
  render: () => {
    const [value, setValue] = useState('');

    return (
      <div className="max-w-[400px] m-auto space-y-6">
        <strong>Data:</strong>{' '}
        <Input
          type="text"
          placeholder="00/00/0000"
          value={value}
          onChange={(e) => setValue(utilsFormatDate.masked(e.target.value))}
        />
        <div>
          <h4 className="font-normal">
            Preencha para o input para checar se a máscara é válida
          </h4>

          {utilsFormatDate.completed(value) ? (
            <p className="text-green-600">Máscara válida</p>
          ) : (
            <p className="text-red-600">Máscara inválida</p>
          )}
        </div>
        <div>
          <h4 className="font-normal">
            Preencha para o input para remover a mascára com o método unmasked
          </h4>

          {utilsFormatDate.unmasked(value)}
        </div>
      </div>
    );
  },
};

export const ApenasNumeros: Story = {
  render: () => {
    const [value, setValue] = useState('');

    return (
      <div className="max-w-[400px] m-auto space-y-6">
        <strong>Apenas números:</strong>{' '}
        <Input
          type="text"
          placeholder="Apenas números"
          value={value}
          onChange={(e) => setValue(utilsOnlyNumbers.masked(e.target.value))}
        />
      </div>
    );
  },
};

export const ApenasLetras: Story = {
  render: () => {
    const [value, setValue] = useState('');

    return (
      <div className="max-w-[400px] m-auto space-y-6">
        <strong>Apenas letras:</strong>{' '}
        <Input
          type="text"
          placeholder="Apenas letras"
          value={value}
          onChange={(e) => setValue(utilsOnlyLetters.masked(e.target.value))}
        />
      </div>
    );
  },
};
