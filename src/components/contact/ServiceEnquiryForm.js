'use client';

import { Button, Textarea, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconSend } from '@tabler/icons-react';
import { useState } from 'react';

import classes from './ServiceEnquiryForm.module.scss';

export default function ServiceEnquiryForm({ serviceSlug, serviceTitle }) {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm({
    initialValues: {
      name: '',
      phone: '',
      email: '',
      message: '',
      service: serviceSlug,
    },
    validate: {
      name: (value) => (value.trim().length < 2 ? 'Please enter your name' : null),
      phone: (value) =>
        value.trim().replace(/\D/g, '').length < 10 ? 'Please enter a valid phone number' : null,
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
        <h3>We’ll be in touch shortly</h3>
        <p>
          Thanks for your interest in <strong>{serviceTitle}</strong>. A team member will follow up
          on your enquiry.
        </p>
        <button type="button" className={classes.reset} onClick={() => setSubmitted(false)}>
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit} noValidate>
      <h3 className={classes.title}>Enquire about {serviceTitle}</h3>

      <TextInput
        label="Name"
        placeholder="Full name"
        withAsterisk
        classNames={{
          root: classes.field,
          label: classes.label,
          required: classes.required,
          input: classes.input,
          error: classes.error,
        }}
        {...form.getInputProps('name')}
      />

      <TextInput
        label="Mobile"
        placeholder="10-digit mobile"
        withAsterisk
        type="tel"
        classNames={{
          root: classes.field,
          label: classes.label,
          required: classes.required,
          input: classes.input,
          error: classes.error,
        }}
        {...form.getInputProps('phone')}
      />

      <TextInput
        label="Email"
        placeholder="you@company.com"
        withAsterisk
        classNames={{
          root: classes.field,
          label: classes.label,
          required: classes.required,
          input: classes.input,
          error: classes.error,
        }}
        {...form.getInputProps('email')}
      />

      <TextInput
        label="Service"
        value={serviceTitle}
        readOnly
        withAsterisk
        classNames={{
          root: classes.field,
          label: classes.label,
          required: classes.required,
          input: classes.input,
          error: classes.error,
        }}
      />

      <Textarea
        label="Message"
        placeholder="Tell us about your timelines and needs"
        minRows={3}
        autosize
        withAsterisk
        classNames={{
          root: classes.field,
          label: classes.label,
          required: classes.required,
          input: classes.textarea,
          error: classes.error,
        }}
        {...form.getInputProps('message')}
      />

      <Button
        type="submit"
        className={classes.submit}
        leftSection={<IconSend size={16} stroke={2} />}
      >
        Submit Enquiry
      </Button>
    </form>
  );
}
