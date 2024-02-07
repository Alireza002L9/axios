import { DevTool } from '@hookform/devtools';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import './reviewSection.css';
import { appContext } from '../context/Context';
import { AnimatePresence, motion } from 'framer-motion';
import axios from 'axios';

const Comment = () => {
  const { setCommentData, commentData } = useContext(appContext);
  const form = useForm();
  const { register, control, handleSubmit, formState, reset } = form;
  const { errors, isSubmitSuccessful } = formState;
  const [showMessage, setShowMessage] = useState(false);

  const url = 'https://jsonplaceholder.typicode.com/comments';

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
      setShowMessage(true);
      axios
        .post(url, commentData)
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    }
  });
  useEffect(() => {
    if (showMessage) {
      setTimeout(() => {
        setShowMessage(false);
      }, 4000);
    }
  }, [showMessage]);


  const handleSubmition = (value) => {
    let currentDate = new Date();
    let options = { year: 'numeric', month: 'long', day: 'numeric' }
    value.date = currentDate.toLocaleDateString('en-US', options)
    setCommentData((prev)=> [...prev, value]);
  };
  return (
    <div>
      <AnimatePresence>
        {showMessage ? (
          <motion.p
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring' }}
            exit={{ opacity: 0, y: -20 }}
            className={showMessage ? 'succesSubmit' : null}
          >
            comment submitted successfully!
          </motion.p>
        ) : null}
      </AnimatePresence>

      <form
        className="form-container"
        onSubmit={handleSubmit(handleSubmition)}
        noValidate
      >
        <label>
          <p>Name:</p>
          <p>{errors.name?.message}</p>
        </label>
        <input
          type="text"
          {...register('name', {
            required: { value: true, message: ' - Name is required!' },
          })}
        />

        <label>
          <p>Email:</p>
          <p>{errors.email?.message}</p>
        </label>
        <input
          type="text"
          {...register('email', {
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: ' - Invalid email format!',
            },
            required: {
              value: true,
              message: ' - Email is required!',
            },
          })}
        />

        <label>
          <p>Message:</p>
          <p>{errors.body?.message}</p>
        </label>
        <textarea
          rows={4}
          {...register('body', {
            required: { value: true, message: ' - Write your comment!' },
          })}
        />
        <button>Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default Comment;
