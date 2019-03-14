import styled from 'styled-components';
import { Text } from '@makerdao/ui-components-core';

// TODO - make use of design-system provided constants for font-size
const Title = styled(Text)`
  font-size: 45px;
  font-weight: 500;
  line-height: 54px;
  display: block;
`;

const Heading = styled(Text)`
  display: block;
  font-weight: 600;
  font-size: 28px;
  letter-spacing: -1pt;
`;

const Subtitle = styled(Text)`
  font-size: 20px;
  letter-spacing: 0.2px;
  line-height: 32px;
  display: block;
`;

const NavLabel = styled(Text)`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.grayLight};
`;

const BreakableText = styled(Text)`
  overflow-wrap: break-word;
  word-break: break-word;
`;

export { Title, Subtitle, NavLabel, Heading, BreakableText };
