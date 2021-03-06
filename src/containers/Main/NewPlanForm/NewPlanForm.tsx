import React, { FC, useState } from 'react';
import styled from 'styled-components';
import NewPlanImage from 'components/NewPlanImage';
import NewPlanTitle from 'containers/main/NewPlanTitle';
import NewPlanDate from 'containers/main/NewPlanDate';

const NewPlanForm: FC = () => {
    const [imageData, setImageData] = useState<any>(null);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        let { image } = e.target;
        const { title, date } = e.target;

        if (image.files.length > 0) {
            setImageData(image.files[0]);
            [image] = image.files;
        } else {
            image = imageData;
        }

        // 유효성 검사
        if (!image) {
            alert('이미지를 삽입해주세요!');
        }
        else if (!title.value) {
            alert('제목을 입력해 주세요!');
        }
        else {
            // 이거 그대로 서버에 post
            console.log(image);
            console.log(title.value);
            console.log(date.value);
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <NewPlanImage />
            <NewPlanTitle />
            <NewPlanDate />
            <SubmitButton
                type='submit'
                value='등록 완료'
            />
        </Form>
    )
}

export default NewPlanForm;

const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-contents: center;
  align-items: center
`
const SubmitButton = styled.input`
  background-color: #60A5F8;
  border: none;
  padding: 10px 120px;
  font-size: 18px;
  color: white;
  font-weight: bold;
  cursor: pointer;
`