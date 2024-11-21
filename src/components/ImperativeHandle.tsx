// ImperativeHandle.tsx
import { forwardRef, useImperativeHandle, useState } from "react";

interface ImperativeHandleRef {
  alterToggle: () => void;
}

const ImperativeHandle = forwardRef<ImperativeHandleRef>((props, ref) => {
  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref, () => ({
    alterToggle() {
      setToggle(!toggle);
    }
  }));

  return (
    <div>
      <h1>Imperative Handle</h1>
      <button
        onClick={() => setToggle(!toggle)}
      >
        Button from child
      </button><br />
      {toggle && <button>Toggle</button>}
    </div>
  );
});

export default ImperativeHandle;