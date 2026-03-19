import { useState } from 'react'
import {
  trimContactFormValues,
  validateContactForm,
} from '../../constants/contactForm'
import {
  CONTACT_FORM_CARD_CLASS,
  CONTACT_FORM_CLASS,
  CONTACT_FORM_FIELD_ERROR_CLASS,
  CONTACT_FORM_INPUT_BASE_CLASS,
  CONTACT_FORM_INPUT_INVALID_CLASS,
  CONTACT_FORM_INPUT_VALID_CLASS,
  CONTACT_FORM_LABEL_CLASS,
  CONTACT_FORM_SUBMIT_BUTTON_CLASS,
  CONTACT_FORM_SUBMIT_ERROR_CLASS,
  CONTACT_FORM_SUCCESS_BANNER_CLASS,
  CONTACT_FORM_TEXTAREA_EXTRA_CLASS,
} from '../../constants/contactFormStyles'

const SUCCESS_COPY = "Thanks! We'll get back to you soon."
const SUBMIT_ERROR_COPY =
  'Something went wrong. Please try again or email us directly.'

const initialValues = {
  name: '',
  surname: '',
  email: '',
  message: '',
}

/**
 * @param {object} props
 * @param {(data: { name: string; surname: string; email: string; message: string }) => void | Promise<void>} [props.onSubmit]
 * @param {string} [props.idPrefix]
 */
export default function ContactForm({ onSubmit, idPrefix = 'contact' }) {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState(
    /** @type {Partial<Record<keyof typeof initialValues, string>>} */ ({}),
  )
  const [submitError, setSubmitError] = useState('')
  const [success, setSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  function inputClasses(field) {
    return `${CONTACT_FORM_INPUT_BASE_CLASS} ${
      errors[field]
        ? CONTACT_FORM_INPUT_INVALID_CLASS
        : CONTACT_FORM_INPUT_VALID_CLASS
    }`
  }

  function handleChange(field) {
    return (e) => {
      if (success) setSuccess(false)
      setSubmitError('')
      setValues((prev) => ({ ...prev, [field]: e.target.value }))
      if (errors[field]) {
        setErrors((prev) => {
          const next = { ...prev }
          delete next[field]
          return next
        })
      }
    }
  }

  async function handleFormSubmit(e) {
    e.preventDefault()
    setSubmitError('')
    const validationErrors = validateContactForm(values)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setErrors({})
    const data = trimContactFormValues(values)
    setIsSubmitting(true)

    try {
      const result = onSubmit?.(data)
      if (result != null && typeof result.then === 'function') {
        await result
      }
      setSuccess(true)
      setValues(initialValues)
    } catch {
      setSubmitError(SUBMIT_ERROR_COPY)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={CONTACT_FORM_CARD_CLASS}>
      {success ? (
        <div
          className={CONTACT_FORM_SUCCESS_BANNER_CLASS}
          role="status"
          aria-live="polite"
        >
          {SUCCESS_COPY}
        </div>
      ) : null}

      <form
        noValidate
        onSubmit={handleFormSubmit}
        className={CONTACT_FORM_CLASS}
      >
        <div>
          <label htmlFor={`${idPrefix}-name`} className={CONTACT_FORM_LABEL_CLASS}>
            Name
          </label>
          <input
            id={`${idPrefix}-name`}
            name="name"
            type="text"
            autoComplete="given-name"
            placeholder="Your name"
            className={inputClasses('name')}
            value={values.name}
            onChange={handleChange('name')}
            aria-invalid={!!errors.name}
            aria-describedby={
              errors.name ? `${idPrefix}-name-error` : undefined
            }
          />
          {errors.name ? (
            <p
              id={`${idPrefix}-name-error`}
              className={CONTACT_FORM_FIELD_ERROR_CLASS}
              role="alert"
            >
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor={`${idPrefix}-surname`} className={CONTACT_FORM_LABEL_CLASS}>
            Surname
          </label>
          <input
            id={`${idPrefix}-surname`}
            name="surname"
            type="text"
            autoComplete="family-name"
            placeholder="Your surname"
            className={inputClasses('surname')}
            value={values.surname}
            onChange={handleChange('surname')}
            aria-invalid={!!errors.surname}
            aria-describedby={
              errors.surname ? `${idPrefix}-surname-error` : undefined
            }
          />
          {errors.surname ? (
            <p
              id={`${idPrefix}-surname-error`}
              className={CONTACT_FORM_FIELD_ERROR_CLASS}
              role="alert"
            >
              {errors.surname}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor={`${idPrefix}-email`} className={CONTACT_FORM_LABEL_CLASS}>
            Email
          </label>
          <input
            id={`${idPrefix}-email`}
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            className={inputClasses('email')}
            value={values.email}
            onChange={handleChange('email')}
            aria-invalid={!!errors.email}
            aria-describedby={
              errors.email ? `${idPrefix}-email-error` : undefined
            }
          />
          {errors.email ? (
            <p
              id={`${idPrefix}-email-error`}
              className={CONTACT_FORM_FIELD_ERROR_CLASS}
              role="alert"
            >
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor={`${idPrefix}-message`} className={CONTACT_FORM_LABEL_CLASS}>
            Message
          </label>
          <textarea
            id={`${idPrefix}-message`}
            name="message"
            rows={4}
            autoComplete="off"
            placeholder="How can we help?"
            className={`${inputClasses('message')} ${CONTACT_FORM_TEXTAREA_EXTRA_CLASS}`}
            value={values.message}
            onChange={handleChange('message')}
            aria-invalid={!!errors.message}
            aria-describedby={
              errors.message ? `${idPrefix}-message-error` : undefined
            }
          />
          {errors.message ? (
            <p
              id={`${idPrefix}-message-error`}
              className={CONTACT_FORM_FIELD_ERROR_CLASS}
              role="alert"
            >
              {errors.message}
            </p>
          ) : null}
        </div>

        {submitError ? (
          <p className={CONTACT_FORM_SUBMIT_ERROR_CLASS} role="alert">
            {submitError}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={isSubmitting}
          className={CONTACT_FORM_SUBMIT_BUTTON_CLASS}
        >
          {isSubmitting ? 'Sending…' : 'Submit'}
        </button>
      </form>
    </div>
  )
}
