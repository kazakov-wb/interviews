import { useCallback, useState, useEffect, useMemo } from "react";
import { Api } from "../utils/Api";
import { Button } from "./Button";

import cn from "classnames";

export const Key = ({
  value,
  removeKey,
  incrementUsedKeys,
  decrementUsedKeys,
}) => {
  const [isUsed, setUsedState] = useState(false);
  const [isLoading, setLoadingState] = useState(false);

  const toggleLoading = useCallback(() => {
    setLoadingState(!isLoading);
  }, [isLoading]);

  const applyKey = useCallback(
    async (value) => {
      if (isUsed) return;

      toggleLoading();
      await Api.addUsedKey(value);
      toggleLoading();

      setUsedState(true);
      incrementUsedKeys();
    },
    [incrementUsedKeys, isUsed, toggleLoading]
  );

  useEffect(async () => {
    return async () => {
      if (!isUsed) return;

      decrementUsedKeys();
      await Api.removeUsedKey(value);
    };
  }, [decrementUsedKeys, isUsed, value]);

  const valueClassNames = useMemo(
    () => cn(["key__value", isUsed && "key__value_used"]),
    [isUsed]
  );

  const buttonLabel = isUsed ? "Использован" : "Использовать";

  return (
    <div className="key">
      <div className={valueClassNames}>{value}</div>

      <div className="key__buttons">
        <Button
          size="s"
          disabled={isUsed}
          label={buttonLabel}
          isLoading={isLoading}
          onClick={() => applyKey(value)}
        />

        <Button
          size="s"
          color="danger"
          label="Удалить"
          onClick={removeKey}
        />
      </div>
    </div>
  );
};
