import React, { useRef, useEffect, useState } from 'react';
import { countries as countriesOptions } from './constants';
import { FormCard } from '../../components';
import { IForm } from './types';
import './styles.css';

const Form = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const birthDayRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLSelectElement>(null);
  const dataUseAgreementRef = useRef<HTMLInputElement>(null);
  const [forms, setForms] = useState<IForm[]>([]);

  useEffect(() => {
    const records = window.localStorage.getItem('forms');
    if (records) {
      setForms(JSON.parse(records || '') || []);
    }
  }, []);

  const formSubmit = () => {
    const [nameVal, lastNameVal, birthdayVal, countryVal, dataUseAgreementVal] = [
      nameRef.current?.value,
      lastNameRef.current?.value,
      birthDayRef.current?.value,
      countryRef.current?.value,
      dataUseAgreementRef.current?.checked,
    ];
    const newForm = {
      id: String(Math.random()).slice(3),
      name: nameVal || '',
      lastName: lastNameVal || '',
      birthday: birthdayVal || '',
      country: countryVal || '',
      dataUseAgreement: dataUseAgreementVal || true,
    };
    window.localStorage.setItem('forms', JSON.stringify([...forms, newForm]));
  };

  function handleDelete(_id: string) {
    const records = JSON.parse(window.localStorage.getItem('forms') || '');
    const filteredRecords = records.filter((item: IForm) => item.id !== _id);
    window.localStorage.setItem('forms', JSON.stringify(filteredRecords));
    setForms(filteredRecords);
  }

  return (
    <main className="form-main">
      <form onSubmit={formSubmit} className="form-com">
        <div className="form-com__element">
          <label className="form-com__element-label">Name</label>
          <input
            type="text"
            name="name"
            className="form-com__element-input"
            required
            ref={nameRef}
          />
        </div>
        <div className="form-com__element">
          <label className="form-com__element-label">Lastname</label>
          <input
            type="text"
            name="lastName"
            className="form-com__element-input"
            required
            ref={lastNameRef}
          />
        </div>
        <div className="form-com__element">
          <label className="form-com__element-label">Lastname</label>
          <input
            type="date"
            name="birthday"
            className="form-com__element-input"
            required
            ref={birthDayRef}
          />
        </div>
        <div className="form-com__element">
          <label className="form-com__element-label">Country</label>
          <select className="form-com__element-select" ref={countryRef} required>
            {countriesOptions &&
              countriesOptions.length &&
              countriesOptions.map((country) => {
                return (
                  <option value={country.value} key={country.id}>
                    {country.name}
                  </option>
                );
              })}
          </select>
        </div>
        <div className="form-com__element--row">
          <input
            type="checkbox"
            name="dataUseAgreement"
            className="form-com__element-input"
            required
            ref={dataUseAgreementRef}
          />
          <label className="form-com__element-label--row">I agree to my data being used</label>
        </div>
        <div className="form-com__element">
          <input type="submit" className="form-com__element-submit" value="Submit" />
        </div>
      </form>
      <section className="form-items-con">
        {forms &&
          forms.length > 0 &&
          forms.map((form: IForm) => (
            <FormCard key={form.id} {...form} handleDelete={handleDelete} />
          ))}
      </section>
    </main>
  );
};

export default Form;
