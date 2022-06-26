import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import TermsAndConditionsWindow from './TermsAndConditionsWindow';

export default function TermsAndConditions({ setShowTerms }) {
  return (
    <Backdrop>
      <TermsAndConditionsWindow setShowTerms={setShowTerms} />
    </Backdrop>
  );
}
