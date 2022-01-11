import React, { useEffect, useState } from 'react';

export type ReturnUseDerivedState<S> = readonly [
  S,
  React.Dispatch<React.SetStateAction<S>>,
];

export function useDerivedState<S>(prop?: S): ReturnUseDerivedState<S>;
export function useDerivedState<S, P = S>(
  prop: P,
  mapper: (prop: P) => S,
): ReturnUseDerivedState<S>;

export function useDerivedState<S, P = S>(
  prop: P,
  mapper: (prop: P) => S = ((state: any) => state) as unknown as (prop: P) => S,
) {
  const [state, setState] = useState(mapper(prop));

  useEffect(() => {
    setState(mapper(prop));
  }, [mapper, prop]);

  return [state, setState] as const;
}
