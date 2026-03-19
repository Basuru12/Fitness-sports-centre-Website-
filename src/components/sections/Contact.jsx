import { HEADING_PRIMARY_CLASS } from '../../constants/headingClasses'
import ContactForm from '../ui/ContactForm'
import { EnvelopeIcon, HomeIcon, PhoneIcon } from '../ui/Icons'

const EMAIL = 'fitnesssportscenter@gmail.com'
const PHONE = '+94 772 696 884'
const ADDRESS = '401/4 Degawatta , Dompe'

/** Layout + hover dim for each contact line (not links). */
const CONTACT_ROW_CLASS = 'flex items-center gap-3 text-ink hover:opacity-80'

export default function Contact() {
  /** @param {{ name: string; surname: string; email: string; message: string }} _data */
  async function handleSubmit(_data) {
    // Placeholder for future API / email integration
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
              <div className={CONTACT_ROW_CLASS}>
                <EnvelopeIcon className="text-ink" />
                <span>{EMAIL}</span>
              </div>
              <div className={CONTACT_ROW_CLASS}>
                <PhoneIcon className="text-ink" />
                <span>{PHONE}</span>
              </div>
              <div className={CONTACT_ROW_CLASS}>
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
