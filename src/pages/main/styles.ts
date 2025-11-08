import styled from "@emotion/styled";
import colors from "../../styles/colors";

interface ErrorProps {
  error?: boolean;
}

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: ${colors.primary01};
`;
export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 700px;
  max-width: 700px;
  background: ${colors.white};
  border-radius: 20px 20px 100px;
  padding: 56px;
  gap: 40px;
`;

export const Button = styled.button`
  width: 96px;
  height: 96px;
  border-radius: 50%;
  background-color: ${colors.secondary03};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  border: none;
  top: -40px;
  right: 0;
`;
export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const InputsContainer = styled.div`
  display: flex;
  gap: 32px;
`;
export const Input = styled.input<ErrorProps>`
  width: 160px;
  height: 50px;
  border: 1.5px solid ${({ error }) => (error ? "#FF5959" : "#DCDCDC")};
  border-radius: 8px;
  padding-left: 20px;
  font-size: 32px;
  line-height: 150%;
  font-weight: bold;
  &:focus {
    outline: none;
    border: 1.5px solid ${({ error }) => (error ? "#FF5959" : "#DCDCDC")};
  }
`;
export const FlexContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;
export const Label = styled.div<ErrorProps>`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 5px;
  color: ${({ error }) => (error ? "#FF5959" : "#716F6F")};
  line-height: 150%;
`;
export const Calculation = styled.p`
  font-size: 90px;
  line-height: 110%;
  letter-spacing: -2px;
  font-weight: bolder;
  color: ${colors.secondary03};
`;
export const Value = styled.p`
  font-size: 90px;
  line-height: 110%;
  letter-spacing: -2px;
  font-weight: bolder;
  color: ${colors.black};
`;
export const Line = styled.div`
  height: 2px;
  background: ${colors.primary01};
  width: 100%;
  position: relative;
`;
export const Error = styled.i`
  font-size: 14px;
  line-height: 150%;
  color: ${colors.secondary02};
  letter-spacing: 0px;
  font-weight: 300;
`;
