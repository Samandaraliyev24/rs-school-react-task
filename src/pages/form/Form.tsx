/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormCard } from '../../components';
import { IForm } from './types';
import './styles.css';

const Form = () => {
  const [forms, setForms] = useState<IForm[]>([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    const { lastname, name, birthday, country } = data;
    if (lastname && name && birthday && country) {
      setForms((prev) => [...prev, data]);
      reset({
        lastname: '',
        name: '',
        birthday: '',
        country: 'Uzbekistan',
        profilePicture: '',
        gender: null,
      });
      window.alert('Your form has been saved');
      return;
    } else {
      window.alert('You must fill all value of this form');
      return;
    }
  };

  function handleDelete(name: string) {
    setForms(forms.filter((form: IForm) => form.name !== name));
  }

  return (
    <main className="form-main">
      <form onSubmit={handleSubmit(onSubmit)} className="form-com">
        <div className="form-com__element">
          <label className="form-com__elqement-label" htmlFor="lastname">
            Lastname
          </label>
          <input
            className="form-com__element-input"
            {...register('lastname', { required: true })}
          />
          {errors.lastname && <span>This field is required</span>}
        </div>
        <div className="form-com__element">
          <label className="form-com__element-label" htmlFor="name">
            Name
          </label>
          <input className="form-com__element-input" {...register('name', { required: true })} />
          {errors.name && <span>This field is required</span>}
        </div>
        <div className="form-com__element">
          <label className="form-com__element-label" htmlFor="birthday">
            Birthday
          </label>
          <input
            className="form-com__element-input"
            {...register('birthday', { required: true })}
            type="date"
          />
          {errors.birthday && <span>This field is required</span>}
        </div>
        <div className="form-com__element">
          <label className="form-com__element-label" htmlFor="country">
            Country
          </label>
          <select
            defaultValue="Uzbekistan"
            className="form-com__element-select"
            {...register('country', { required: true })}
          >
            <option value="Uzbekistan">Uzbekistan</option>
            <option value="Russia">Russia</option>
          </select>
          {errors.country && <span>This field is required</span>}
        </div>
        <div className="form-com__element">
          <label className="form-com__element-label" htmlFor="profilePicture">
            Profile Picture
          </label>
          <input {...register('profilePicture', { required: false })} type="file" />
        </div>
        <div className="form-com__element-row">
          <label className="form-com__element-label">Gender</label>
          <input {...register('gender', { required: false })} value="male" type="radio" />
          <label className="form-com__element-label">Male</label>
          <input {...register('gender', { required: false })} value="female" type="radio" />
          <label className="form-com__element-label">Female</label>
        </div>
        <input type="submit" className="form-com__element-submit" />
        {errors.exampleRequired && <span>This field is required</span>}
      </form>
      <section className="form-items-con" id="form-items-con">
        {forms.map((form: IForm) => (
          <FormCard key={form.name} {...form} handleDelete={handleDelete} />
        ))}
      </section>
    </main>
  );
};

export default Form;
