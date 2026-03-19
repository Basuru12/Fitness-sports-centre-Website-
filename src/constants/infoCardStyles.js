/**
 * Layout + smooth hover expansion for service info cards (image, headings, and body).
 * No stroke or shadow at rest; hover adds depth via box-shadow only. Padding grows on hover
 * so content isn’t flush to the card edge.
 */
export const INFO_CARD_ARTICLE_CLASS = [
  'flex flex-col rounded-3xl bg-surface-input shadow-none',
  'origin-center scale-100 p-5',
  'transition-[transform,box-shadow,padding] duration-300 ease-out',
  'hover:scale-[1.02] hover:p-7 hover:shadow-xl',
  'motion-reduce:transition-none motion-reduce:hover:scale-100 motion-reduce:hover:p-5 motion-reduce:hover:shadow-md',
].join(' ')
