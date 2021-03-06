import mdhd from '../mdhd'

describe('mdhd box', () => {
  it('should get video mdhd box buffer', () => {
    const data = {
      videoDuration: 128512,
      videoTimescale: 12800,
      type: 'video',
    }

    // prettier-ignore
    expect(mdhd(data)).toEqual(new Uint8Array([
      0x00, 0x00, 0x00, 0x2c,
      0x6D, 0x64, 0x68, 0x64,
      0x01, 0x00, 0x00, 0x00,
      0x00, 0x00, 0x00, 0x00,
      0x00, 0x00, 0x00, 0x00,
      0x00, 0x00, 0x00, 0x00,
      0x00, 0x00, 0x00, 0x00,
      0x00, 0x00, 0x32, 0x00,
      0x00, 0x00, 0x00, 0x00,
      0x00, 0x01, 0xf6, 0x00,
      0x55, 0xc4, 0x00, 0x00,
    ]))
  })

  it('should get audio mdhd box buffer', () => {
    const data = {
      audioDuration: 440320,
      audioTimescale: 44100,
      type: 'audio',
    }
    // prettier-ignore
    expect(mdhd(data)).toEqual(new Uint8Array([
      0x00, 0x00, 0x00, 0x2c,
      0x6D, 0x64, 0x68, 0x64,
      0x01, 0x00, 0x00, 0x00,
      0x00, 0x00, 0x00, 0x00,
      0x00, 0x00, 0x00, 0x00,
      0x00, 0x00, 0x00, 0x00,
      0x00, 0x00, 0x00, 0x00,
      0x00, 0x00, 0xAC, 0x44,
      0x00, 0x00, 0x00, 0x00,
      0x00, 0x06, 0xB8, 0x00,
      0x55, 0xc4, 0x00, 0x00,
    ]))
  })
})
