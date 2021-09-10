const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonAttack = (dragonSheet) => {
  const minDmg = 15;
  const maxDmg = dragonSheet['strength'];
  const dragonDmg = Math.floor(Math.random() * (maxDmg - minDmg)) + minDmg;
  return dragonDmg;
};

const warriorAttack = (warriorSheet) => {
  const minDmg = warriorSheet['strength'];
  const maxDmg = warriorSheet['strength'] * warriorSheet['weaponDmg'];
  const warriorDmg = Math.floor(Math.random() * (maxDmg - minDmg)) + minDmg;
  return warriorDmg;
};

let round = 1;
const manaCalculator = (mageSheet) => {
  const totalMana = mageSheet['mana'];
  const actualMana = totalMana - 15 * round;
  round += 1;

  return actualMana;
};

const mageAttack = (mageSheet) => {
  const mageStatus = {
    mana: manaCalculator(mageSheet),
  };

  if (mageStatus.mana > 15) {
    mageStatus.damage =
      Math.floor(
        Math.random() *
          (2 * mageSheet['intelligence'] - mageSheet['intelligence'])
      ) + mageSheet['intelligence'];
  } else {
    mageStatus.damage = 'Não possui mana suficiente';
    mageStatus.mana = 15;
  }

  return mageStatus;
};

/**
 * * Exemplo de vários ataques do mago
 */
for (let turno = 0; turno < 10; turno += 1) {
  console.log(mageAttack(mage));
}
