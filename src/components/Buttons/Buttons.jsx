import React, { useEffect, useState } from "react";
import "./Buttons.css";

const Buttons = ({ calc, setCalc }) => {
  const [selectedSignButton, setSelectedSignButton] = useState("");
  const [prevNum, setPrevNum] = useState(null);

  const btnValues = [
    "AC",
    "%",
    "C",
    "/",
    7,
    8,
    9,
    "X",
    4,
    5,
    6,
    "-",
    1,
    2,
    3,
    "+",
    "+/-",
    0,
    ".",
    "=",
  ];

  const numClickHandler = (num) => {
    setCalc((prevCalc) => ({
      ...prevCalc,
      num:
        prevCalc.num === 0 && num === 0
          ? "0"
          : prevCalc.sign
          ? String(prevCalc.num) === "0"
            ? String(num)
            : String(prevCalc.num) + String(num)
          : String(Number(prevCalc.num.toString() + num)),
      res: !prevCalc.sign ? 0 : prevCalc.res,
    }));
  };

  const resetClickHandler = () => {
    setCalc({
      num: 0,
      sign: "",
      res: 0,
    });
    setSelectedSignButton("");
    setPrevNum(null);
  };

  const removeClickHandler = () => {
    setCalc((prevCalc) => ({
      ...prevCalc,
      num:
        prevCalc.num.toString().length > 1
          ? prevCalc.num.toString().slice(0, -1)
          : 0,
      res:
        prevCalc.res.toString().length > 1
          ? prevCalc.res.toString().slice(0, -1)
          : 0,
    }));
  };
  const invertClickHandler = () => {
    setCalc({
      ...calc,
      num: calc.num ? calc.num * -1 : 0,
      res: calc.res ? calc.res * -1 : 0,
    });
  };

  const percentageClickHandler = () => {
    setCalc({
      ...calc,
      num: calc.num ? calc.num / 100 : 0,
    });
  };

  const signClickHandler = (sign) => {
    if (calc.sign === sign) {
      setCalc((prevCalc) => ({
        ...prevCalc,
        sign: "",
        num: prevNum !== null ? prevNum : prevCalc.num,
      }));
      setSelectedSignButton("");
      setPrevNum(null);
    } else {
      if (calc.num !== 0 && calc.num !== null) {
        setPrevNum(calc.num);
      }
      setCalc((prevCalc) => ({
        ...prevCalc,
        sign,
        res: prevCalc.num !== 0 ? prevCalc.num : prevCalc.res,
        num: 0,
      }));
      setSelectedSignButton(sign);
    }
  };

  const equalsClickHandler = () => {
    if (calc.sign && calc.num) {
      const math = (a, b, sign) => {
        return sign === "+"
          ? a + b
          : sign === "-"
          ? a - b
          : sign === "X"
          ? a * b
          : a / b;
      };

      setCalc({
        ...calc,
        res:
          calc.num === "0" && calc.sign === "/"
            ? "Can't divide by 0."
            : math(Number(calc.res), Number(calc.num), calc.sign),
        sign: "",
        num: 0,
      });
      setSelectedSignButton("");
      setPrevNum(null);
    }
  };
  const commaClickHandler = () => {
    setCalc((prevCalc) => {
      const numHasDecimal = prevCalc.num.toString().includes(".");
      const resHasDecimal = prevCalc.res.toString().includes(".");

      return {
        ...prevCalc,
        num:
          prevCalc.num === 0 || prevCalc.num === "0"
            ? resHasDecimal
              ? prevCalc.res.toString()
              : prevCalc.res + "."
            : !numHasDecimal
            ? prevCalc.num + "."
            : prevCalc.num,
        res:
          prevCalc.num === 0 || prevCalc.num === "0"
            ? resHasDecimal
              ? prevCalc.res
              : prevCalc.res + "."
            : prevCalc.res,
      };
    });
  };
  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case "Enter":
        case "=":
          equalsClickHandler();
          break;
        case "Escape":
          resetClickHandler();
          break;
        case "Backspace":
          removeClickHandler();
          break;
        case "+":
        case "-":
        case "/":
        case "*":
          signClickHandler(event.key === "*" ? "X" : event.key);
          break;
        case ".":
          commaClickHandler();
          break;
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
          numClickHandler(event.key);
          break;
        case "%":
          percentageClickHandler();
          break;
        case "+/-":
          invertClickHandler();
          break;
        default:
          break;
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [
    calc,
    resetClickHandler,
    removeClickHandler,
    invertClickHandler,
    equalsClickHandler,
    signClickHandler,
    commaClickHandler,
    numClickHandler,
    percentageClickHandler,
  ]);

  return (
    <div className="buttons">
      {btnValues.map((btn, index) => {
        return (
          <button
            onClick={
              btn === "AC"
                ? resetClickHandler
                : btn === "C"
                ? removeClickHandler
                : btn === "+/-"
                ? invertClickHandler
                : btn === "%"
                ? percentageClickHandler
                : btn === "/" || btn === "X" || btn === "-" || btn === "+"
                ? () => signClickHandler(btn)
                : btn === "="
                ? equalsClickHandler
                : btn === "."
                ? commaClickHandler
                : () => numClickHandler(btn)
            }
            className={` ${btn === "=" ? "equals" : ""} ${
              btn === selectedSignButton ? "active" : ""
            } `}
            key={index}
            value={btn}
          >
            {btn}
          </button>
        );
      })}
    </div>
  );
};

export default Buttons;
