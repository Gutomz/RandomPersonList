import React from 'react';
import './randomPersonListPage.css';

export default function RandomPersonItem ({ person }) {
  const { name } = person;
  const fullName = [name.title, name.first, name.last].join(" ");

  return (
    <li id="person-item">
        <img id="profile-image" src={person.picture.thumbnail} alt="Profile" />
        <div className="details">
          <p className="title">{fullName}</p>
          <p className="description">{person.email}</p>
        </div>
    </li>
  );
}
