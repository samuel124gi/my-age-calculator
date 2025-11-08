import { useState } from "react";
import {
  Button,
  Calculation,
  Error,
  FlexContainer,
  Form,
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

    let currentDay = now.getDate();
    let currentMonth = now.getMonth() + 1;
    let currentYear = now.getFullYear();

    if (currentDay < data.day) {
      currentDay += new Date(currentYear, currentMonth - 1, 0).getDate();
      currentMonth -= 1;
    }

    if (currentMonth < data.month) {
      currentMonth += 12;
      currentYear -= 1;
    }
    setYear((currentYear - data.year).toString());
    setMonth((currentMonth - data.month).toString());
    setDay((currentDay - data.day).toString());
  }

  return (
    <MainContainer>
      <InnerContainer>
        <Form>
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
        </Form>
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
