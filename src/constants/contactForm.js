/** @typedef {'name' | 'surname' | 'email' | 'message'} ContactFormField */

export const CONTACT_FORM_LIMITS = {
  nameMax: 50,
  surnameMax: 50,
  messageMin: 10,
}

export const CONTACT_FORM_MESSAGES = {
  required: 'This field is required.',
  nameTooLong: `Name must be at most ${CONTACT_FORM_LIMITS.nameMax} characters.`,
  surnameTooLong: `Surname must be at most ${CONTACT_FORM_LIMITS.surnameMax} characters.`,
  emailInvalid: 'Please enter a valid email address.',
  messageTooShort: `Message must be at least ${CONTACT_FORM_LIMITS.messageMin} characters.`,
}

// Practical email shape check (not full RFC 5322)
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/**
 * @param {Record<ContactFormField, string>} values
 * @returns {Partial<Record<ContactFormField, string>>}
 */
export function validateContactForm(values) {
  /** @type {Partial<Record<ContactFormField, string>>} */
  const errors = {}

  const name = (values.name ?? '').trim()
  const surname = (values.surname ?? '').trim()
  const email = (values.email ?? '').trim()
  const message = (values.message ?? '').trim()

  if (!name) errors.name = CONTACT_FORM_MESSAGES.required
  else if (name.length > CONTACT_FORM_LIMITS.nameMax)
    errors.name = CONTACT_FORM_MESSAGES.nameTooLong

  if (!surname) errors.surname = CONTACT_FORM_MESSAGES.required
  else if (surname.length > CONTACT_FORM_LIMITS.surnameMax)
    errors.surname = CONTACT_FORM_MESSAGES.surnameTooLong

  if (!email) errors.email = CONTACT_FORM_MESSAGES.required
  else if (!EMAIL_PATTERN.test(email)) errors.email = CONTACT_FORM_MESSAGES.emailInvalid

  if (!message) errors.message = CONTACT_FORM_MESSAGES.required
  else if (message.length < CONTACT_FORM_LIMITS.messageMin)
    errors.message = CONTACT_FORM_MESSAGES.messageTooShort

  return errors
}

/**
 * @param {Record<ContactFormField, string>} values
 * @returns {Record<ContactFormField, string>}
 */
export function trimContactFormValues(values) {
  return {
    name: (values.name ?? '').trim(),
    surname: (values.surname ?? '').trim(),
    email: (values.email ?? '').trim(),
    message: (values.message ?? '').trim(),
  }
}
