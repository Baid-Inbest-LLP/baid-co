'use client';

import { Button, Textarea, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState } from 'react';

import classes from './ContactForm.module.scss';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      company: '',
      message: '',
    },
    validate: {
      name: (value) => (value.trim().length < 2 ? 'Please enter your name' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Please enter a valid email'),
      message: (value) => (value.trim().length < 10 ? 'Tell us a little more' : null),
    },
  });

  const handleSubmit = form.onSubmit(() => {
    setSubmitted(true);
    form.reset();
  });

  if (submitted) {
    return (
      <div className={classes.success} role="status">
        <h3>Thank you</h3>
        <p>We’ve received your message and will respond shortly.</p>
        <Button variant="default" onClick={() => setSubmitted(false)} className={classes.reset}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit} noValidate>
      <TextInput
        label="Name"
        placeholder="Your full name"
        withAsterisk
        {...form.getInputProps('name')}
      />
      <TextInput
        label="Email"
        placeholder="you@company.com"
        withAsterisk
        {...form.getInputProps('email')}
      />
      <TextInput
        label="Company"
        placeholder="Optional"
        {...form.getInputProps('company')}
      />
      <Textarea
        label="How can we help?"
        placeholder="Share a bit about your needs"
        minRows={4}
        withAsterisk
        {...form.getInputProps('message')}
      />
      <Button type="submit" className={classes.submit}>
        Send message
      </Button>
    </form>
  );
}
