import React, { PropsWithChildren } from "react";
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components";
import { CancelIcon } from 'components/icons';
import { RootState } from 'store/modules'
import { largeModal } from 'store/modules/modal';

interface ModalDefaultType {
    width: number;
    height: number;
}

const Modal = ({
    width,
    height,
    children,
}: PropsWithChildren<ModalDefaultType>) => {
    const { largeModalIsOpen } = useSelector((state: RootState) => state.modal);
    const dispatch = useDispatch();

    // click 이벤트 핸들러 - 모달 삭제 함수
    const removeHandler = (e: React.MouseEvent) => {
        e.preventDefault();

        if (largeModalIsOpen) {
            dispatch(largeModal(!largeModalIsOpen));
        }
    }

    return (
        <ModalContainer>
            <DialogBox
                width={width}
                height={height}
            >
                <Cancel onClick={removeHandler}/>
                {children}
            </DialogBox>
            <Backdrop
                onClick={removeHandler}
            />
        </ModalContainer>
    );
}

const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index:100
`;

const DialogBox = styled.dialog<{ width: number, height: number }>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  border-radius: 3px;
  box-sizing: border-box;
  background-color: white;
  z-index: 102;
`;

const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 101;
  background-color: rgba(0, 0, 0, 0.2);
`;

const Cancel = styled(CancelIcon)`
    position: absolute;
    right: 30px;
    top: 30px;
    cursor: pointer;
`

export default Modal;