import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  flex: 1;
  gap: 32px;
  background-color: ${({ theme }) => theme.palette.gray_7};
  padding: 0 24px;
`
