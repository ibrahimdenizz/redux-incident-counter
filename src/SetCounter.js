import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { set } from './actions';

export const SetCounter = () => {
  const countFromStore = useSelector((state) => state.count);
  const [newCount, setNewCount] = useState(countFromStore);
  const dispatch = useDispatch();

  useEffect(() => {
    setNewCount(countFromStore);
  }, [countFromStore]);

  return (
    <section className="controls">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(set(newCount));
        }}
      >
        <label htmlFor="set-to">Set Count</label>
        <input
          id="set-to"
          type="number"
          value={newCount}
          onChange={(e) => setNewCount(e.target.value)}
        />
        <input type="submit" />
      </form>
    </section>
  );
};
