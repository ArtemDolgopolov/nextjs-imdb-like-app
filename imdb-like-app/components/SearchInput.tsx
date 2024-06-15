'use client'

import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { Input } from './ui/input'

const formSchema = z.object({
  input: z.string().min(2).max(50),
})

export default function SearchInput() {
 const router = useRouter()

 const form = useForm<z.infer<typeof formSchema>>({
   resolver: zodResolver(formSchema),
   defaultValues: {
    input: "",
   },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
   console.log(values)

   router.push(`/search/${values.input}`)
   form.reset()
 }

 return (
   <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className='z-60 space-y-8 flex relative z-50 justify-end'>
     <FormField 
      control={form.control}
      name='input'
      render={({ field }) => (
       <FormItem>
        <FormControl>
         <Input placeholder='Search...' {...field} className='text-white' />
        </FormControl>
       </FormItem>
      )} 
     />
    </form>
   </Form>
 );
}