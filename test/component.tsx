import React, { useState } from "react";
import { useDerivedState } from "../src";

const nameMapper = (name: string) => `Parent ${name}`;

const Children: React.FC<{ name: string }> = ({ name: propsName }) => {
  const [name, setName] = useDerivedState(propsName, nameMapper);

  return (
    <div>
      <span data-testid="testState">{name}</span>
      <button
        data-testid="testUpdateChildState"
        onClick={() => setName("Child Bar")}
      >
        Update State
      </button>
    </div>
  );
};

const Parent = () => {
  const [name, setName] = useState("Foo");
  return (
    <div>
      <button
        data-testid="testUpdateParentState"
        onClick={() => setName("Bar")}
      >
        Update State
      </button>
      <Children name={name} />
    </div>
  );
};

export default Parent;
