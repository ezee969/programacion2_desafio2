import React from 'react';
import { motion } from 'framer-motion';

const dropIn = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.2,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: '100vh',
    opacity: 0,
  },
};

export default function TermsAndConditionsWindow({ setShowTerms }) {
  return (
    <motion.div
      variants={dropIn}
      initial='hidden'
      animate='visible'
      exit='exit'
      onClick={(e) => e.stopPropagation()}
      className='flex flex-col gap-5 p-4 rounded bg-gray-50'
    >
      <p className='text-lg font-medium'>Our terms and conditions</p>
      <textarea
        className='prose'
        value='
        1. This template legal document was produced and published by SEQ Legal
        LLP. 
        2. We control the copyright in this template, and you may only use
        this template in accordance with the licensing provisions in our terms
        and conditions. Those licensing provisions include an obligation to
        retain the SEQ Legal credit incorporated into the template. 
        3. The current version of our terms and conditions is available at:
        http://www.seqlegal.com/our-terms-and-conditions. 
        4. If you would like
        to use this template without the SEQ Legal credit, you can purchase a
        licence to do so at:
        http://www.website-contracts.co.uk/seqlegal-licences.html 
        5. You will need to edit this template before use. Guidance notes to help you do so
        are set out at the end of the template. During the editing process, you
        should delete those guidance notes and this cover sheet. Square brackets
        in the body of the document indicate areas that require editorial
        attention. "ORs" in the body of the document indicate alternative
        provisions. By the end of the editing process, there should be no square
        brackets left in the body of the document, and only one alternative from
        each set of alternatives should remain. Elements may be specified as
        optional in the accompanying notes, but that does not mean that they are
        in all cases removable. Depending upon the circumstances, an optional
        element may be: (i) required by law; or (ii) necessary to ensure that
        the document is internally consistent. 
        6. If you have any doubts about
        the editing or use of this template, you should seek professional legal
        advice. 
        7. You may be able to get free legal guidance using our public
        Q&A system, available at: http://www.seqlegal.com/questions. 8. You can
        request a quote for legal services (including the adaptation or review
        of a legal document produced from this template) using this form:
        http://www.seqlegal.com/request-quote.'
        disabled
        cols='60'
        rows='20'
      />
      <button
        onClick={() => setShowTerms(false)}
        className='py-2 text-lg font-medium text-white bg-blue-500 rounded cursor-pointer hover:bg-blue-600 active:bg-blue-500'
      >
        I accept
      </button>
    </motion.div>
  );
}
