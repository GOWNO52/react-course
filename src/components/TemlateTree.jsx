import React from 'react'
import { useForm } from "react-hook-form"

const TemlateTree = () => {

  const { register, handleSubmit,formState: { errors }, } = useForm()
  const onSubmit = (data) => console.log(data)


  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex-col' >
      <input {...register("firstName", { required: true, maxLength: 20 })} />
      {errors.firstName && <span>This field is required</span>}

      <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />

      {errors.lastName && <span>This field is required</span>}

      <input type="number" {...register("age", { min: 18, max: 99 })} />

      {errors.number && <span>This field is required</span>}

      <input type="submit" />

      <input {...register("lastName", { required: true })} />

      {errors.lastName && <span>This field is required</span>}

    </form>
  )
}

export default TemlateTree
