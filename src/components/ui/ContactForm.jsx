const inputClasses =
  'mt-1 w-full rounded-lg border border-charcoal/20 bg-white px-4 py-2.5 text-ink placeholder:text-ink/60 focus:outline-none focus:ring-2 focus:ring-charcoal/40'
const labelClasses = 'block text-sm font-medium text-ink'

export default function ContactForm({ onSubmit, idPrefix = 'contact' }) {
  return (
    <div className="rounded-2xl bg-gold p-6 md:p-8">
      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        <div>
          <label htmlFor={`${idPrefix}-name`} className={labelClasses}>
            Name
          </label>
          <input
            id={`${idPrefix}-name`}
            type="text"
            placeholder="Value"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor={`${idPrefix}-surname`} className={labelClasses}>
            Surname
          </label>
          <input
            id={`${idPrefix}-surname`}
            type="text"
            placeholder="Value"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor={`${idPrefix}-email`} className={labelClasses}>
            Email
          </label>
          <input
            id={`${idPrefix}-email`}
            type="email"
            placeholder="Value"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor={`${idPrefix}-message`} className={labelClasses}>
            Message
          </label>
          <textarea
            id={`${idPrefix}-message`}
            rows={4}
            placeholder="Value"
            className={`${inputClasses} resize-y`}
          />
        </div>
        <button
          type="submit"
          className="mt-2 w-full rounded-lg bg-charcoal px-6 py-3 font-medium text-white transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-charcoal focus:ring-offset-2 focus:ring-offset-gold"
        >
          Submit
        </button>
      </form>
    </div>
  )
}
