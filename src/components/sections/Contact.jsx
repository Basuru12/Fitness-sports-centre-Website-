import { HEADING_PRIMARY_CLASS } from '../../constants/headingClasses'
import ContactForm from '../ui/ContactForm'
import { EnvelopeIcon, HomeIcon, PhoneIcon } from '../ui/Icons'

const EMAIL = 'fitnesssportscenter@gmail.com'
const PHONE = '+94 772 696 884'
const ADDRESS = '401/4 Degawatta , Dompe'

export default function Contact() {
  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <section
      id="contact"
      className="min-h-screen bg-cream px-4 py-20 md:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* Left column */}
          <div>
            <h2 className={HEADING_PRIMARY_CLASS}>
              Send us a message , we will get back to you
            </h2>
            <div className="mt-6 flex flex-col gap-4">
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-3 text-ink hover:opacity-80"
              >
                <EnvelopeIcon className="text-ink" />
                <span>{EMAIL}</span>
              </a>
              <a
                href={`tel:${PHONE.replace(/\s/g, '')}`}
                className="flex items-center gap-3 text-ink hover:opacity-80"
              >
                <PhoneIcon className="text-ink" />
                <span>{PHONE}</span>
              </a>
              <div className="flex items-center gap-3 text-ink">
                <HomeIcon className="text-ink" />
                <span>{ADDRESS}</span>
              </div>
            </div>
          </div>

          {/* Right column — form */}
          <ContactForm onSubmit={handleSubmit} />
        </div>
      </div>
    </section>
  )
}
