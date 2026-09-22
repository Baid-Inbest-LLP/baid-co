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
        <p className={classes.successEyebrow}>Received</p>
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
      <div className={classes.serviceChip}>
        <span>Regarding</span>
        <strong>{serviceTitle}</strong>
      </div>

      <div className={classes.row}>
        <TextInput
          label="Name"
          placeholder="Your full name"
          withAsterisk
          classNames={{
            root: classes.field,
            label: classes.label,
            input: classes.input,
            error: classes.error,
          }}
          {...form.getInputProps('name')}
        />
        <TextInput
          label="Phone"
          placeholder="+91 98765 43210"
          withAsterisk
          type="tel"
          classNames={{
            root: classes.field,
            label: classes.label,
            input: classes.input,
            error: classes.error,
          }}
          {...form.getInputProps('phone')}
        />
      </div>

      <TextInput
        label="Email"
        placeholder="you@company.com"
        withAsterisk
        classNames={{
          root: classes.field,
          label: classes.label,
          input: classes.input,
          error: classes.error,
        }}
        {...form.getInputProps('email')}
      />

      <Textarea
        label="How can we help?"
        placeholder="Share timelines, entity type, or what you need from this service"
        minRows={3}
        autosize
        withAsterisk
        classNames={{
          root: classes.field,
          label: classes.label,
          input: classes.textarea,
          error: classes.error,
        }}
        {...form.getInputProps('message')}
      />

      <Button type="submit" className={classes.submit} rightSection={<IconSend size={16} stroke={2} />}>
        Request a conversation
      </Button>
    </form>
  );
}
