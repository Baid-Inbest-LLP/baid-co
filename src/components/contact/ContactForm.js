'use client';

import { Button, Select, Textarea, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState } from 'react';

import { services } from '@/constants/site';

import classes from './ContactForm.module.scss';

const serviceOptions = [
  ...services.map((service) => ({ value: service.slug, label: service.title })),
  { value: 'general', label: 'General enquiry' },
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm({
    initialValues: {
      name: '',
      phone: '',
      email: '',
      service: '',
      message: '',
    },
    validate: {
      name: (value) => (value.trim().length < 2 ? 'Please enter your name' : null),
      phone: (value) =>
        value.trim().replace(/\D/g, '').length < 10 ? 'Please enter a valid phone number' : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Please enter a valid email'),
      service: (value) => (!value ? 'Please select a service' : null),
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
        classNames={{ input: classes.input }}
        {...form.getInputProps('name')}
      />
      <TextInput
        label="Phone no"
        placeholder="+91 98765 43210"
        withAsterisk
        type="tel"
        classNames={{ input: classes.input }}
        {...form.getInputProps('phone')}
      />
      <TextInput
        label="Email"
        placeholder="you@company.com"
        withAsterisk
        classNames={{ input: classes.input }}
        {...form.getInputProps('email')}
      />
      <Select
        label="Services"
        placeholder="Select a service"
        withAsterisk
        data={serviceOptions}
        classNames={{ input: classes.input }}
        {...form.getInputProps('service')}
      />
      <Textarea
        label="Message"
        placeholder="Share a bit about your needs"
        minRows={4}
        withAsterisk
        classNames={{ input: classes.input }}
        {...form.getInputProps('message')}
      />
      <Button type="submit" className={classes.submit}>
        Send message
      </Button>
    </form>
  );
}
