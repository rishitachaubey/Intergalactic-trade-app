"use client";

import { useForm, useFieldArray, Controller } from 'react-hook-form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useState, useTransition } from 'react';

import { FormError } from "@/components/forms/form-error"
import { FormSuccess } from "@/components/forms/form-success"
import { addTrade } from '@/actions/trade';

export function AddTradeForm() {

  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, seSuccess] = useState<string | undefined>("");
  
  const { control, handleSubmit, register, getValues } = useForm({
    defaultValues: {
      items: [{ id: '', quantity: '' }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'items',
  });

  const onSubmit = (data : any) => {
    const filteredItems = data.items.filter(
      (item : any) => item.id && item.quantity.trim() !== ''
    );
  
    // Prepare the data to be sent in the POST request
    const filteredData = { ...data, items: filteredItems };
    startTransition(() => {
        addTrade(filteredData)
        .then((data) => {
            setError(data?.error);
            seSuccess(data?.success);
        });
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {fields.map((field, index) => (
        <div key={field.id} className="flex space-x-2 items-center">
          <Controller
            control={control}
            name={`items.${index}.id`}
            render={({ field }) => (
              <Input {...field} placeholder="Item ID"/>
            )}
          />
          <Controller
            control={control}
            name={`items.${index}.quantity`}
            render={({ field }) => (
              <Input {...field} placeholder="Quantity" type="number"/>
            )}
          />
          <Button type="button" onClick={() => remove(index)} variant={"destructive"}> Remove </Button>
        </div>
      ))}
      <FormError message={error}/>
      <FormSuccess message={success}/>
      <div className='space-x-2'>
        <Button type="button" onClick={() => append({ id: '', quantity: '' })}> Add Item </Button>
        <Button type="submit"> Submit </Button>
      </div>
    </form>
  );
}