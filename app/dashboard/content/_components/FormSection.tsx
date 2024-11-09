"use client";
import React, { useState } from 'react'
import { TEMPLATE } from '../../_components/TemplateListSection'
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Loader2Icon } from 'lucide-react';

interface Props {
  SelectedTemplate: TEMPLATE;
  userFormInput:any
  loading:boolean
}

function FormSection({ SelectedTemplate, userFormInput,loading }: Props) {
  const [formData, setFormData] = useState<Record<string, string>>({});

  if (!SelectedTemplate) return null;

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    userFormInput(formData);
  };

  return (
    <div className='p-5 shadow-md border rounded-lg bg-white'>
      {/* @ts-ignore */}
      <Image src={SelectedTemplate.icon} alt='icon' width={50} height={50} />
      <h2 className='text-lg font-bold mb-2 text-primary'>{SelectedTemplate.name}</h2>
      <p className='text-gray-500 text-sm'>{SelectedTemplate.desc}</p>
      <form onSubmit={onSubmit}>
        {SelectedTemplate.form?.map((item, index) => (
          <div key={index} className='my-2 flex flex-col gap-2 mb-7'>
            <label className='font-bold' htmlFor={item.name}>{item.label}</label>
            {item.field === 'input' ? (
              <Input value={formData[item.name] || ''} onChange={(e) => setFormData({ ...formData, [item.name]: e.target.value })} id={item.name} />
            ) : item.field === 'textarea' ? (
              <Textarea value={formData[item.name] || ''} onChange={(e) => setFormData({ ...formData, [item.name]: e.target.value })} id={item.name} />
            ) : null}
          </div>
        ))}
        <Button type='submit' className='w-full py-6' disabled={loading}>
          {loading ? <Loader2Icon className='animate-spin' /> : "Generate Content"}
        </Button>
      </form>
    </div>
  )
}

export default FormSection

