import { type Feather } from '@expo/vector-icons'
import { TouchableOpacityProps } from 'react-native';

import { Container, Icon, Label, type ButtonProps } from './styles';

interface Props extends TouchableOpacityProps, ButtonProps {
  label: string;
  icon?: keyof typeof Feather.glyphMap
}

export function Button({ icon, label, variant, ...rest }: Props): JSX.Element {
  return (
    <Container variant={variant} {...rest}>
      {icon && (
        <Icon name={icon} variant={variant} />
      )}
      <Label variant={variant}>{label}</Label>
    </Container>
  );
}
