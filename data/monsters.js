export const setLevel = (experience, levels) => {
  let level = 1;
  if(experience >= levels[1]) level = 2;
  if(experience >= levels[2]) level = 3;
  if(experience >= levels[3]) level = 4;
  if(experience >= levels[4]) level = 5;
  if(experience >= levels[5]) level = 6;
  if(experience >= levels[6]) level = 7;
  if(experience >= levels[7]) level = 8;
  if(experience >= levels[8]) level = 9;
  if(experience >= levels[9]) level = 10;
  return level;
};

export const setLineExperience = (experience, levels, cb) => {
  let level = cb(experience, levels);

  const min = levels[level - 1];
  const max = (levels[level]) ? levels[level] : levels[level - 1];
  let lineExperience = (experience - min) / ((max - min) / 100);
  if (min === max) {
    lineExperience = 100;
  }
  return lineExperience
};

export const setSkills = (sourceSkills, cb, experience, levels) => {
  const level = cb(experience, levels);
  let baseSkillHummer = sourceSkills[0];
  let baseSkillJump = sourceSkills[1];
  let specialSkill = sourceSkills[2];
  if(level === 1) return [baseSkillHummer,];
  if(level === 2) {
    return [
      {...baseSkillHummer, fullCharge: baseSkillHummer.fullCharge - 1, charge: baseSkillHummer.charge - 1},
      baseSkillJump
    ];
  }
  if(level === 3) {
    return [{...baseSkillHummer, fullCharge: baseSkillHummer.fullCharge - 2, charge: baseSkillHummer.charge - 2}, baseSkillJump];
  }
  if(level === 4) {
    return [
      {...baseSkillHummer, fullCharge: baseSkillHummer.fullCharge - 3, charge: baseSkillHummer.charge - 3},
      {...baseSkillJump, fullCharge: baseSkillJump.fullCharge - 1, charge: baseSkillJump.charge - 1}
    ];
  }
  if(level === 5) {
    return [
      {...baseSkillHummer, fullCharge: baseSkillHummer.fullCharge - 4, charge: baseSkillHummer.charge - 4},
      {...baseSkillJump, fullCharge: baseSkillJump.fullCharge - 2, charge: baseSkillJump.charge - 2}
    ];
  }
  if(level === 6) return [
    {...baseSkillHummer, fullCharge: baseSkillHummer.fullCharge - 4, charge: baseSkillHummer.charge - 4},
    {...baseSkillJump, fullCharge: baseSkillJump.fullCharge - 2, charge: baseSkillJump.charge - 2},
    {...specialSkill}
  ];
  if(level === 7) return [
    {...baseSkillHummer, fullCharge: baseSkillHummer.fullCharge - 4, charge: baseSkillHummer.charge - 4},
    {...baseSkillJump, fullCharge: baseSkillJump.fullCharge - 3, charge: baseSkillJump.charge - 3},
    {...specialSkill, strength: specialSkill.strength + 0, fullCharge: specialSkill.fullCharge - 1, charge: specialSkill.charge - 1}
  ];
  if(level === 8) return [
    {...baseSkillHummer, fullCharge: baseSkillHummer.fullCharge - 5, charge: baseSkillHummer.charge - 5},
    {...baseSkillJump, fullCharge: baseSkillJump.fullCharge - 4, charge: baseSkillJump.charge - 4},
    {...specialSkill, strength: specialSkill.strength + 0, fullCharge: specialSkill.fullCharge - 2, charge: specialSkill.charge - 2}
  ];
  if(level === 9) return [
    {...baseSkillHummer, fullCharge: baseSkillHummer.fullCharge - 6, charge: baseSkillHummer.charge - 6},
    {...baseSkillJump, fullCharge: baseSkillJump.fullCharge - 5, charge: baseSkillJump.charge - 5},
    {...specialSkill, strength: specialSkill.strength + 0, fullCharge: specialSkill.fullCharge - 3, charge: specialSkill.charge - 3}
  ];
  if(level === 10) return [
    {...baseSkillHummer, fullCharge: baseSkillHummer.fullCharge - 6, charge: baseSkillHummer.charge - 6},
    {...baseSkillJump, fullCharge: baseSkillJump.fullCharge - 6, charge: baseSkillJump.charge - 6},
    {...specialSkill, strength: specialSkill.strength + 1, fullCharge: specialSkill.fullCharge - 4, charge: specialSkill.charge - 4}
  ];

};
