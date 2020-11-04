import React from 'react';
import { Container, Option, Image, Label } from './StyledComponents';

const Suggestions = ({ data }) => (
  <Container>
    {data &&
      data.map((suggestion) => (
        <Option key={suggestion.key}>
          <Image source={suggestion.source} />
          <Label numberOfLines={2}>{suggestion.label}</Label>
        </Option>
      ))}
  </Container>
);

export default Suggestions;
