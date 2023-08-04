import { useState, useEffect } from "react";

const useDarkMode = (): [boolean, () => void] => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem("isDarkMode");
    return saved ? JSON.parse(saved) : false; // 기본값은 라이트 모드
  });
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  useEffect(() => {
    localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);
  return [isDarkMode, toggleDarkMode];
};

export default useDarkMode;
