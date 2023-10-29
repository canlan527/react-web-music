import { createSlice } from '@reduxjs/toolkit'

interface IPlayerState {
  currentSong: any
}

const initialState: IPlayerState = {
  currentSong: {
    name: '距离',
    id: 2089113495,
    pst: 0,
    t: 0,
    ar: [
      {
        id: 29051613,
        name: '郑润泽',
        tns: [],
        alias: [],
      },
    ],
    alia: [],
    pop: 100,
    st: 0,
    rt: '',
    fee: 8,
    v: 11,
    crbt: null,
    cf: '',
    al: {
      id: 176458081,
      name: '绚烂 枯萎 以后',
      picUrl: 'https://p1.music.126.net/4bbGIJCs3nHkdo_7PfKTUw==/109951168986881245.jpg',
      tns: [],
      pic_str: '109951168986881245',
      pic: 109951168986881250,
    },
    dt: 207925,
    h: {
      br: 320000,
      fid: 0,
      size: 8319405,
      vd: -44955,
      sr: 48000,
    },
    m: {
      br: 192000,
      fid: 0,
      size: 4991661,
      vd: -42326,
      sr: 48000,
    },
    l: {
      br: 128000,
      fid: 0,
      size: 3327789,
      vd: -40612,
      sr: 48000,
    },
    sq: {
      br: 803654,
      fid: 0,
      size: 20887516,
      vd: -44933,
      sr: 48000,
    },
    hr: {
      br: 1564164,
      fid: 0,
      size: 40653668,
      vd: -44952,
      sr: 48000,
    },
    a: null,
    cd: '01',
    no: 2,
    rtUrl: null,
    ftype: 0,
    rtUrls: [],
    djId: 0,
    copyright: 0,
    s_id: 0,
    mark: 536879104,
    originCoverType: 1,
    originSongSimpleData: null,
    tagPicList: null,
    resourceState: true,
    version: 11,
    songJumpInfo: null,
    entertainmentTags: null,
    awardTags: null,
    single: 0,
    noCopyrightRcmd: null,
    mv: 0,
    rtype: 0,
    rurl: null,
    mst: 9,
    cp: 0,
    publishTime: 1697817600000,
  },
}

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {},
})

export default playerSlice.reducer
