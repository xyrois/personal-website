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
    }, 100);

    return () => clearInterval(interval);
  }, [birthDate]);

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-2">About Me</h2>
      <p>Hi, I'm <strong>Brinta Kundu</strong>, a developer and student passionate about creativity and problem solving.</p>
      <p>Age: <strong>{age}</strong> years old.</p>
      <p>Currently studying at <strong>Hunter College</strong>, majoring in Computer Science.</p>

    </div>
  );
};

export default About;
