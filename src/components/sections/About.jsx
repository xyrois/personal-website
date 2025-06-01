import React, { useEffect, useState, useMemo } from 'react';

const getLiveAge = (birthDate) => {
  const now = new Date();
  const ageMs = now - birthDate;
  const ageYears = ageMs / (1000 * 60 * 60 * 24 * 365.2425); // average year length
  return ageYears.toFixed(8);
};

const About = () => {
  const birthDate = useMemo(() => new Date('2005-02-01T00:00:00Z'), []);
  const [age, setAge] = useState(getLiveAge(birthDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setAge(getLiveAge(birthDate));
    }, 100); // update every 100ms for smooth precision

    return () => clearInterval(interval);
  }, [birthDate]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">About Me</h2>
      <p>I am Brinta Kundu.</p>
      <p>Age: <strong>{age}</strong> years old.</p>
      <p>School: Hunter College</p>
    </div>
  );
};

export default About;
