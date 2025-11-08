import { useState } from "react";
import {
  Button,
  Calculation,
  Error,
  FlexContainer,
  InnerContainer,
  Input,
  InputsContainer,
  Label,
  Line,
  MainContainer,
  ResultContainer,
  Value,
} from "./styles";

interface FormValues {
  year: number;
  month: number;
  day: number;
}

import Arrow from "../../assets/icons/icon-arrow.svg";
import { useForm } from "react-hook-form";
const Main = () => {
  const [year, setYear] = useState("--");
  const [day, setDay] = useState("--");
  const [month, setMonth] = useState("--");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    mode: "all",
  });
  function submit(data: FormValues) {
    const now = new Date();
    setYear((now.getFullYear() - data.year).toString());
    setMonth((now.getMonth() + 1 - data.month).toString());
    setDay((now.getDate() - Number(data.day)).toString());
  }

  return (
    <MainContainer>
      <InnerContainer>
        <InputsContainer>
          <Label error={!!errors.day}>
            Day
            <Input
              type="number"
              {...register("day", { required: "This field is required" })}
              error={!!errors.day}
            />
            {errors.day && <Error>{errors.day.message}</Error>}
          </Label>

          <Label error={!!errors.month}>
            Month
            <Input
              type="number"
              {...register("month", { required: "This field is required" })}
              error={!!errors.month}
            />
            {errors.month && <Error>{errors.month.message}</Error>}
          </Label>
          <Label error={!!errors.year}>
            Year
            <Input
              type="number"
              error={!!errors.year}
              {...register("year", { required: "This field is required" })}
            />
            {errors.year && <Error>{errors.year.message}</Error>}{" "}
          </Label>
        </InputsContainer>
        <Line>
          <Button onClick={handleSubmit(submit)}>
            <Arrow />
          </Button>
        </Line>
        <ResultContainer>
          <FlexContainer>
            <Calculation>{year} </Calculation>
            <Value>years</Value>
          </FlexContainer>
          <FlexContainer>
            <Calculation>{month} </Calculation>
            <Value>months</Value>
          </FlexContainer>
          <FlexContainer>
            <Calculation>{day} </Calculation>
            <Value>days</Value>
          </FlexContainer>
        </ResultContainer>
      </InnerContainer>
    </MainContainer>
  );
};

export default Main;
