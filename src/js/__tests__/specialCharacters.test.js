import SpecialCharacters from '../SpecialCharacters';
import Daemon from '../Daemon';
import Magician from '../Magician';

describe('Начинаем тестирование класса SpecialCharacters', () => {
  describe('Тестируем метод setStoned:', () => {
    test.each([
      [true, true],
      [false, false],
    ])(
      ('При передаче %s должны получить %s'),
      (bool, expected) => {
        const char = new SpecialCharacters('Daemon');
        char.setStoned(bool);

        expect(char.isStoned).toBe(expected);
      },
    );
  });

  describe('Тестируем метод getStoned:', () => {
    test.each([
      [true, true],
      [false, false],
    ])(
      ('При передаче %s должны получить %s'),
      (bool, expected) => {
        const char = new SpecialCharacters('Daemon');
        char.isStoned = bool;

        expect(char.getStoned()).toBe(expected);
      },
    );
  });

  describe('Тестируем метод setAttack, если isStoned = false:', () => {
    test.each([
      [1, 100],
      [2, 90],
      [3, 80],
      [4, 70],
      [5, 60],
    ])(
      ('При расстоянии %s должны получить атаку, равную %s'),
      (range, expected) => {
        const char = new SpecialCharacters('Daemon');
        char.attack = 100;

        char.setAttack(range);

        expect(char.modifiedAttack).toBe(expected);
      },
    );
  });

  describe('Тестируем метод setAttack, если isStoned = true:', () => {
    test.each([
      [1, 100],
      [2, 85],
      [3, 72],
      [4, 60],
      [5, 48],
    ])(
      ('При расстоянии %s должны получить атаку, равную %s'),
      (range, expected) => {
        const char = new SpecialCharacters('Daemon');
        char.attack = 100;
        char.setStoned(true);

        char.setAttack(range);

        expect(char.modifiedAttack).toBe(expected);
      },
    );
  });

  describe('Тестируем метод getAttack:', () => {
    test('Должны получить модифицированную атаку', () => {
      const char = new SpecialCharacters('Daemon');
      char.modifiedAttack = 92;

      expect(char.getAttack()).toBe(92);
    });
  });
});
/*-----------------------------------------------------------------------*/
describe('Начинаем тестирование класса Daemon', () => {
  describe('Тестируем метод setStoned:', () => {
    test.each([
      [true, true],
      [false, false],
    ])(
      ('При передаче %s должны получить %s'),
      (bool, expected) => {
        const daemon = new Daemon();
        daemon.setStoned(bool);

        expect(daemon.isStoned).toBe(expected);
      },
    );
  });

  describe('Тестируем метод getStoned:', () => {
    test.each([
      [true, true],
      [false, false],
    ])(
      ('При передаче %s должны получить %s'),
      (bool, expected) => {
        const daemon = new Daemon();
        daemon.isStoned = bool;

        expect(daemon.getStoned()).toBe(expected);
      },
    );
  });

  describe('Тестируем метод setAttack, если isStoned = false:', () => {
    test.each([
      [1, 100],
      [2, 90],
      [3, 80],
      [4, 70],
      [5, 60],
    ])(
      ('При расстоянии %s должны получить атаку, равную %s'),
      (range, expected) => {
        const daemon = new Daemon();
        daemon.attack = 100;

        daemon.setAttack(range);

        expect(daemon.modifiedAttack).toBe(expected);
      },
    );
  });

  describe('Тестируем метод setAttack, если isStoned = true:', () => {
    test.each([
      [1, 100],
      [2, 85],
      [3, 72],
      [4, 60],
      [5, 48],
    ])(
      ('При расстоянии %s должны получить атаку, равную %s'),
      (range, expected) => {
        const daemon = new Daemon();
        daemon.attack = 100;
        daemon.setStoned(true);

        daemon.setAttack(range);

        expect(daemon.modifiedAttack).toBe(expected);
      },
    );
  });

  describe('Тестируем метод getAttack:', () => {
    test('Должны получить модифицированную атаку', () => {
      const daemon = new Daemon();
      daemon.modifiedAttack = 92;

      expect(daemon.getAttack()).toBe(92);
    });
  });
});
/*--------------------------------------------------------------------------------*/
describe('Начинаем тестирование класса Magician', () => {
  describe('Тестируем метод setStoned:', () => {
    test.each([
      [true, true],
      [false, false],
    ])(
      ('При передаче %s должны получить %s'),
      (bool, expected) => {
        const magician = new Magician();
        magician.setStoned(bool);

        expect(magician.isStoned).toBe(expected);
      },
    );
  });

  describe('Тестируем метод getStoned:', () => {
    test.each([
      [true, true],
      [false, false],
    ])(
      ('При передаче %s должны получить %s'),
      (bool, expected) => {
        const magician = new Magician();
        magician.isStoned = bool;

        expect(magician.getStoned()).toBe(expected);
      },
    );
  });

  describe('Тестируем метод setAttack, если isStoned = false:', () => {
    test.each([
      [1, 100],
      [2, 90],
      [3, 80],
      [4, 70],
      [5, 60],
    ])(
      ('При расстоянии %s должны получить атаку, равную %s'),
      (range, expected) => {
        const magician = new Magician();
        magician.attack = 100;

        magician.setAttack(range);

        expect(magician.modifiedAttack).toBe(expected);
      },
    );
  });

  describe('Тестируем метод setAttack, если isStoned = true:', () => {
    test.each([
      [1, 100],
      [2, 85],
      [3, 72],
      [4, 60],
      [5, 48],
    ])(
      ('При расстоянии %s должны получить атаку, равную %s'),
      (range, expected) => {
        const magician = new Magician();
        magician.attack = 100;
        magician.setStoned(true);

        magician.setAttack(range);

        expect(magician.modifiedAttack).toBe(expected);
      },
    );
  });

  describe('Тестируем метод getAttack:', () => {
    test('Должны получить модифицированную атаку', () => {
      const magician = new Magician();
      magician.modifiedAttack = 92;

      expect(magician.getAttack()).toBe(92);
    });
  });
});
