/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import './styles.css';

type Props = {
  lastname: string;
  name: string;
  birthday: string;
  country: string;
  profilePicture: any;
  gender: any;
  handleDelete: (id: string) => void;
};
const FormCard = (props: Props) => {
  const { name, lastname, birthday, country, gender, profilePicture } = props;
  return (
    <div className="form-item-com">
      <p className="form-item-com__row">
        Name: <span>{name}</span>
      </p>
      <p className="form-item-com__row">
        Lastname: <span>{lastname}</span>
      </p>
      <p className="form-item-com__row">
        Birthday: <span>{birthday}</span>
      </p>
      <p className="form-item-com__row">
        Country: <span>{country}</span>
      </p>
      <p className="form-item-com__row">
        Profile Picture: <span>{profilePicture[0]?.name || 'Not exists'}</span>
      </p>
      <p className="form-item-com__row">
        Gender:
        <span>{gender ? 'Male' : 'Female'}</span>
      </p>
      <button onClick={() => props.handleDelete(name)} className="form-item__remove-btn">
        X
      </button>
    </div>
  );
};

export default FormCard;
