import{j as e}from"./jsx-runtime-CQsLhzk5.js";import{useMDXComponents as r}from"./index-C2WH5l5l.js";import"./index-Wp2u197Z.js";function t(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"input",children:"Input"}),`
`,e.jsx(n.p,{children:"The Input component is a reusable form element that allows users to enter text or numeric data."}),`
`,e.jsx(n.h2,{id:"features",children:"Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Fully customizable with Tailwind CSS"}),`
`,e.jsx(n.li,{children:"Accessible with proper ARIA attributes"}),`
`,e.jsx(n.li,{children:"Supports various input types (text, email, password, etc.)"}),`
`,e.jsx(n.li,{children:"Integrates with form libraries like React Hook Form"}),`
`]}),`
`,e.jsx(n.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { Input } from 'health-cloud-design-system';
`})}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { Input } from 'health-cloud-design-system';

export default function InputExample() {
  return <Input type="email" placeholder="Email" className="w-full max-w-sm" />;
}
`})}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(n.p,{children:`| Prop         | Type     | Default | Description                        |
| ------------ | -------- | ------- | ---------------------------------- |
| type         | string   | "text"  | HTML input type attribute          |
| placeholder  | string   | -       | Placeholder text                   |
| value        | string   | -       | Input value                        |
| defaultValue | string   | -       | Default input value                |
| disabled     | boolean  | false   | Whether the input is disabled      |
| className    | string   | -       | Additional CSS classes             |
| onChange     | function | -       | Callback when input value changes  |
| onFocus      | function | -       | Callback when input receives focus |
| onBlur       | function | -       | Callback when input loses focus    |`}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"basic-input",children:"Basic Input"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Input placeholder="Enter your name" />
`})}),`
`,e.jsx(n.h3,{id:"disabled-input",children:"Disabled Input"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Input disabled placeholder="Disabled input" />
`})}),`
`,e.jsx(n.h3,{id:"with-label",children:"With Label"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { Label } from 'health-cloud-design-system';

<div className="grid w-full max-w-sm items-center gap-1.5">
  <Label htmlFor="email">Email</Label>
  <Input type="email" id="email" placeholder="Email" />
</div>;
`})}),`
`,e.jsx(n.h3,{id:"with-form-validation",children:"With Form Validation"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { useState } from 'react';
import { Button, Input, Label } from 'health-cloud-design-system';

function FormExample() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes('@')) {
      setError('Please enter a valid email');
      return;
    }
    setError('');
    // Submit form
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className={error ? 'border-red-500' : ''}
        />
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
}
`})}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Uses native ",e.jsx(n.code,{children:"<input>"})," element for maximum compatibility"]}),`
`,e.jsx(n.li,{children:"Supports keyboard navigation"}),`
`,e.jsx(n.li,{children:"Works with screen readers"}),`
`,e.jsxs(n.li,{children:["Properly associates labels with inputs using ",e.jsx(n.code,{children:"htmlFor"})," and ",e.jsx(n.code,{children:"id"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"customization",children:"Customization"}),`
`,e.jsx(n.p,{children:"The Input component can be customized using Tailwind CSS classes:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Input
  className="h-12 rounded-xl border-2 border-purple-500 focus:border-purple-700 px-4"
  placeholder="Custom styled input"
/>
`})}),`
`,e.jsx(n.h2,{id:"integration-with-react-hook-form",children:"Integration with React Hook Form"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { Button, Input, Label } from 'health-cloud-design-system';
import { useForm } from 'react-hook-form';

function HookFormExample() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="username">Username</Label>
        <Input
          id="username"
          {...register('username', { required: 'Username is required' })}
          placeholder="Enter username"
          className={errors.username ? 'border-red-500' : ''}
        />
        {errors.username && (
          <p className="text-sm text-red-500">{errors.username.message}</p>
        )}
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
}
`})})]})}function o(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{o as default};
