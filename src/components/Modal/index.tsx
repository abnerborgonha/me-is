import React, {
  forwardRef,
  useState,
  useCallback,
  useImperativeHandle
} from 'react'
import ContentModal from './ContentModal'

import { CloseButton, Container, ContainerCloseButton } from './styles'
export type IHandleVisibleOption = 'visible' | 'unvisible'

export interface IModalHandles {
  handleVisible?: (option: IHandleVisibleOption) => boolean
}
const Modal: React.ForwardRefRenderFunction<IModalHandles> = (_, ref) => {
  const [visable, setVisable] = useState(false)

  const handleVisible = useCallback((option: IHandleVisibleOption) => {
    const stateVisable = option === 'visible'

    setVisable(stateVisable)

    return stateVisable
  }, [])

  useImperativeHandle(ref, () => ({
    handleVisible
  }))

  return (
    <Container isVisable={visable}>
      <ContainerCloseButton>
        <CloseButton onClick={() => setVisable(false)}>X</CloseButton>
      </ContainerCloseButton>
      <ContentModal />
    </Container>
  )
}

export default forwardRef(Modal)
