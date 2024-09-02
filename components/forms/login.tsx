"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { useState, useTransition } from "react";

import { LoginSchema } from "@/schemas"
import { login } from "@/actions/login"
import { FormError } from "@/components/forms/form-error"


export function LoginForm() {

  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
      defaultValues: {
        username: "",
        password: ""
      },
    })
    
    const onSubmit = (values : z.infer<typeof LoginSchema>) => {
      setError("");
      startTransition(() => {
          login(values)
          .then((data) => {
              setError(data?.error);
          });
      })
  }

  return (
    <Form {...form}>
        
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email" {...field} disabled={isPending}/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="Enter your password" {...field} disabled={isPending}/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormError message={error}/>
        <Button type="submit" disabled={isPending}>Login</Button>
      </form>
    </Form>
  )
}
