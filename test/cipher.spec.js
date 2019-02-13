describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
      assert.equal(cipher.encode(33, "ABCDEFGHIJKLMNOPQRSTUVWXYZ"), "HIJKLMNOPQRSTUVWXYZABCDEFG");
    });

    it('debería retornar "890145250107" para "123478583430" con offset 7', () => {
      assert.equal(cipher.encode(7, "123478583430"), "890145250107");

    });

    it('debería retornar "zopcfohcfwo" para "laboratoria" con offset 14', () => {
      assert.equal(cipher.encode(14, "laboratoria"), "zopcfohcfwo");

    });

    it('debería retornar "#&<]}" para "!$:[{" con offset 2', () => {
      assert.equal(cipher.encode(2, "!$:[{"), "#&<]}");

    });


    describe('cipher.decode', () => {

      it('debería ser una función', () => {
        assert.equal(typeof cipher.decode, 'function');
      });

      it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', () => {
        assert.equal(cipher.decode(33, "HIJKLMNOPQRSTUVWXYZABCDEFG"), "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
      });

      it('debería retornar "123478583430" para "890145250107" con offset 7', () => {
        assert.equal(cipher.decode(7, "890145250107"), "123478583430");
      });

      it('debería retornar "laboratoria" para "zopcfohcfwo" con offset 14', () => {
        assert.equal(cipher.decode(14, "zopcfohcfwo"), "laboratoria");
      });

      it('debería retornar "!$:[{" para "#&<]}" con offset 2', () => {
        assert.equal(cipher.decode(2, "#&<]}"), "!$:[{");
      });


    });

  });
});
