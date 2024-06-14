import { useEffect, useState } from "react";

const Progress = ({ value = 0 }) => {
  const [progress, setProgress] = useState(value);
  useEffect(() => {
    setProgress(Math.min(100, Math.max(0, value)));
  }, [value]);

  return (
    <section className="progress">
      <span>{progress}%</span>
      <div style={{ width: `${progress}%` }}></div>
    </section>
  );
};

export default Progress;
