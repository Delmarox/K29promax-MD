smd(
    {
      pattern: "remini",
      desc: "enhance image quality!",
      type: "ai",
      filename: __filename,
    },
    async (_0x1bd29b) => {
      let _0x4da3a4 = _0x1bd29b.image ? _0x1bd29b : _0x1bd29b.reply_message;
      if (!_0x4da3a4 || !_0x4da3a4.image) {
        return await _0x1bd29b.send("*Reply to image, to enhance quality!*");
      }
      try {
        let _0x5b1096 = await _0x4da3a4.download();
        const _0x1ac1f7 = await processing(_0x5b1096, "enhance");
        await _0x1bd29b.send(_0x1ac1f7, {}, "img", _0x1bd29b);
        _0x5b1096 = false;
      } catch (_0x4eecc9) {
        _0x1bd29b.error(
          _0x4eecc9 + "\n\nCommand: remini",
          _0x4eecc9,
          "*Process Denied :(*"
        );
      }
    }
  );
