import React from 'react';
import {useFormikContext} from 'formik';

import ErrorMessage from "./ErrorMessage";
import ImageInputList from '../ImageInputList';




function FormImagePicker({name}) {
    const { errors, setFieldValue, touched, values } = useFormikContext();
    const imageUris = values[name];
    const handleAdd = uri => {
        setFieldValue([...imageUris, uri])
      };
    
      const handleRemove = uri=>{
        setFieldValue(name, imageUris.filter((imageUri) => imageUri !== uri));
      };


    return (
     <>
  <ImageInputList  
    imageUris={imageUris} 
    OnAddImage={handleAdd}
    onRemoveImage={handleRemove}
   />
  <ErrorMessage error={errors[name]} visible={touched[name]} />
  </>
 );
}


export default FormImagePicker;