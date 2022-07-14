import React from 'react';
//import styled from 'styled-components';
import { Formik,Form,ErrorMessage} from 'formik';
import { Label } from '../Label';
import { FormikInput } from '../formikInput/FormikInput';
import { Button } from '../button/Button';
import * as yup from 'yup';




export const ContactForm=({contact}) => {
    const validationSchema = yup.object().shape({
        name: yup.string().required('This field is required'),
        tel: yup.number().required('This field is required').positive().integer(),

    });

    const onHandleSubmit = (values, { resetForm }) => {
        console.log(values);
        contact = [...values];
        console.log(contact)
        resetForm();
    };
  
    return (
      <Formik
        initialValues={{ name: '', tel: '' }}
        onSubmit={onHandleSubmit }

        validationSchema={validationSchema}
      >
            {( FormikProps ) => (
        
          <Form>
            <Label>
                        <FormikInput name="name" type="input" />
                        <ErrorMessage name="name" />
            </Label>
            <Label>
           <FormikInput name="tel" type="input" />
            </Label>
            <Button type="submit" >Add Contacts</Button>
          </Form>
        )}
      </Formik>
    );
  }
