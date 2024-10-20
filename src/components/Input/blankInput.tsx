// Libraries
import { useState, useMemo } from 'react';

// Common Components
import Input from '@/components/Input';

// Utils
import { EMPTY_STRING } from '@/utils/constants';

const InputField = ({
  index,
  width,
  height,
  padding,
  handleOnBlur,
  questionId,
  removeRequiredQuestionId,
}: any) => {
  const [fieldValue, setFieldValue] = useState(EMPTY_STRING);

  return useMemo(() => {
    return (
      <Input
        type='text'
        variant='standard'
        onChange={(value: string) => {
          removeRequiredQuestionId(questionId);
          setFieldValue(value);
        }}
        onBlur={() => handleOnBlur(fieldValue)}
        value={fieldValue}
        width={width}
        height={height}
        padding={padding}
      />
    );
  }, [index, fieldValue]);
};

export default InputField;
