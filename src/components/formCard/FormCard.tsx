import React from 'react';
import './styles.css';

type Props = {
  id: string;
  name: string;
  lastName: string;
  birthday: string;
  country: string;
  dataUseAgreement: boolean;
  handleDelete: (id: string) => void;
};
const FormCard = (props: Props) => {
  const { id, name, lastName, birthday, country, dataUseAgreement } = props;
  return (
    <div className="form-item-com">
      <p className="form-item-com__row">
        Name: <span>{name}</span>
      </p>
      <p className="form-item-com__row">
        Lastname: <span>{lastName}</span>
      </p>
      <p className="form-item-com__row">
        Birthday: <span>{birthday}</span>
      </p>
      <p className="form-item-com__row">
        Country: <span>{country}</span>
      </p>
      <p className="form-item-com__row">
        Data Agreement:
        <span>{dataUseAgreement ? 'Agreed' : "Didn't agree"}</span>
      </p>
      <button onClick={() => props.handleDelete(id)} className="form-item__remove-btn">
        X
      </button>
    </div>
  );
};

export default FormCard;
