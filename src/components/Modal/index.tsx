import React, {
  forwardRef,
  useState,
  useCallback,
  useImperativeHandle
} from 'react'

import { Container } from './styles'

interface IModalProps {
  content: React.ReactNode
}

export type IHandleVisibleOption = 'visible' | 'unvisible'

export interface IModalHandles {
  handleVisible?: (option: IHandleVisibleOption) => void
}
const Modal: React.ForwardRefRenderFunction<IModalHandles, IModalProps> = (
  { content },
  ref
) => {
  const [visable, setVisable] = useState(false)

  const handleVisible = useCallback((option: IHandleVisibleOption) => {
    const stateVisable = option === 'visible'

    setVisable(stateVisable)
  }, [])

  useImperativeHandle(ref, () => ({
    handleVisible
  }))

  return <Container isVisable={visable}>{content}</Container>
}

export default forwardRef(Modal)
