import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = () => {
  return (
    <div className="flex flex-column items-center">
      <p className="f3">
        {
          'Want to detect faces in your pictures? Paste your image link and try it now!'
        }
      </p>
      <form className="form w-50 pa4 br3 shadow-5">
        <input
          className="f4 pa2 w-70 center bn"
          type="text"
          placeholder="Url"
        />
        <button className="detect-btn w-30 grow f4 link pa2 bn f4">
          Detect
        </button>
      </form>
    </div>
  );
};

export default ImageLinkForm;
