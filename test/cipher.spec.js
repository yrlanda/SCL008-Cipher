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

    it('debería retornar "#&" para "!$" con offset 2', () => {
      assert.equal(cipher.encode(2, "!$"), "#&");

    });


    describe('cipher.decode', () => {

      it('debería ser una función', () => {
        assert.equal(typeof cipher.decode, 'function');
      });

      it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33');
    });

  });
});
