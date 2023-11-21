import React, { useState } from 'react';

const SummaryPage = () => {

  const [checked, setChecked] = useState(false);

  return (
    <div>
      <form>
        <input type='checkbox' checked={checked} onClick={(e) => setChecked(e.target.checked)} id='comfirm-checkbox' />
        <label htmlFor='comfirm-checkbox'>주문하려는 것을 확인하셨나요?</label>
        <button type='submit' disabled={!checked}>주문하기</button>
      </form>
    </div>
  );
};

export default SummaryPage;