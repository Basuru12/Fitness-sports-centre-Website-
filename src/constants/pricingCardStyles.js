/**
 * Smooth hover scale for membership / pricing cards.
 * z-index on hover keeps the scaled card above adjacent columns (transform does not affect layout).
 */
export const PRICING_CARD_INTERACTION_CLASS = [
  'relative z-0 origin-center scale-100',
  'transition-transform duration-300 ease-out',
  'hover:z-10 hover:scale-[1.25]',
  'motion-reduce:transition-none motion-reduce:hover:scale-100',
].join(' ')
