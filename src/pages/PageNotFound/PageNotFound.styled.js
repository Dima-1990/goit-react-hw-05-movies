import styled from '@emotion/styled';

export const NotFound = styled.div`
    padding: 20px;
`;

export const Button = styled.button`
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff00;
    border: none;
    border-radius: 2px;
    font-family: Roboto,sans-serif;
    letter-spacing: .02em;
    font-size: 24px;
    font-weight: 500;
    line-height: 1.2;
    color: #ffffff70;
    transition-property: all;
    transition-duration: 500ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    &:hover{
        border: 1px solid #ffffff70;;
    }
`;

export const Text = styled.p`
    font-family: Roboto,sans-serif;
    letter-spacing: .02em;
    font-size: 24px;
    font-weight: 500;
    line-height: 1.2;
    color: #ffffff70;
    text-align: center;
`;