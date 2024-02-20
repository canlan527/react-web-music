import { getSongDetail, getSongLyric } from '@/services/modules/player'
import { ILyrics, parseLyric } from '@/utils/parse-lyric'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootType } from '..'

// react-thunk state 的类型
interface IThunkState {
  state: RootType
}

// 获取currentSong
export const fetchCurrentSongAction = createAsyncThunk<void, number, IThunkState>('currentSong', (id, { dispatch, getState }) => {
  // 准备播放某一首歌曲，分为两种情况
  // 1. 从列表尝试是否可以获取到这首歌: 拿到整个列表
  const playlist = getState().player.playsongList
  const findIndex = playlist.findIndex((item) => item.id === id)

  if (findIndex === -1) {
    // 没有找到相同的歌
    // 发送请求获取歌曲信息
    getSongDetail(id).then((res) => {
      const { data } = res
      // 获取歌曲
      const song = data.songs[0]
      // 拷贝一份playlist
      const newPlaysongList = [...playlist]
      newPlaysongList.unshift(song) // 将新获取的song推入新数组中
      // 放入state.currentSong中
      dispatch(changeCurrentSongAction(song))
      // 派发action，更新playlist数据
      dispatch(changePlaysongListAction(newPlaysongList))
      // 记录索引
      dispatch(changePlaysongIndexAction(0))
    })
  } else {
    // 找到了相同的item
    const song = playlist[findIndex]
    dispatch(changeCurrentSongAction(song))
    dispatch(changePlaysongIndexAction(findIndex))
  }

  // 获取歌词信息
  getSongLyric(id).then((res) => {
    const { data } = res
    // 获取歌词字符串
    const lyricStr = data.lrc.lyric
    // 解析歌词
    const lyrics = parseLyric(lyricStr)
    dispatch(changeLyricsAction(lyrics))
  })
})

// 在列表中切换歌曲
export const changePlaylistSongAction = createAsyncThunk<void, boolean, IThunkState>('changeSong', (isNext, { dispatch, getState }) => {
  // 获取state中的数据
  const player = getState().player
  const playMode = player.playMode
  const songIndex = player.playsongIndex
  const songlist = player.playsongList
  // console.log(songlist)
  // 获取新歌曲的索引, 根据不同的模式计算不同的下一首歌的索引
  let newIndex = songIndex

  if (playMode === 3) {
    // 随机播放
    // 随机选取列表的索引
    newIndex = Math.floor(Math.random() * songlist.length)
  } else {
    // 顺序播放、列表循环、单曲循环
    newIndex = isNext ? songIndex + 1 : songIndex - 1
    // 判断越界
    if (newIndex > songlist.length - 1) newIndex = 0
    if (newIndex < 0) newIndex = songlist.length - 1
  }

  // 根据索引获取歌曲
  const song = songlist[newIndex]

  // 提交dispatch，更改歌曲和索引
  dispatch(changeCurrentSongAction(song))
  dispatch(changePlaysongIndexAction(newIndex))

  // 更新歌词信息
  getSongLyric(song.id).then((res) => {
    const { data } = res
    // 获取歌词字符串
    const lyricStr = data.lrc.lyric
    // 解析歌词
    const lyrics = parseLyric(lyricStr)
    dispatch(changeLyricsAction(lyrics))
  })
})

interface IPlayerState {
  currentSong: any
  lyrics: ILyrics[]
  lyricIndex: number
  playsongList: any[]
  playsongIndex: number
  playMode: number
  randomNumber: number
}

const initialState: IPlayerState = {
  currentSong: {},
  lyrics: [],
  lyricIndex: -1,
  playsongList: [
    {
      name: '悬溺',
      id: 1397345903,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 12136078,
          name: '葛东琪',
          tns: [],
          alias: [],
        },
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: '',
      fee: 8,
      v: 34,
      crbt: null,
      cf: '',
      al: {
        id: 79886335,
        name: '第二街区',
        picUrl: 'https://p1.music.126.net/CDhYcShQKH2VAMENuCxWWQ==/109951164166513349.jpg',
        tns: [],
        pic_str: '109951164166513349',
        pic: 109951164166513340,
      },
      dt: 197083,
      h: {
        br: 320002,
        fid: 0,
        size: 7885485,
        vd: -44463,
        sr: 48000,
      },
      m: {
        br: 192002,
        fid: 0,
        size: 4731309,
        vd: -41909,
        sr: 48000,
      },
      l: {
        br: 128002,
        fid: 0,
        size: 3154221,
        vd: -40502,
        sr: 48000,
      },
      sq: {
        br: 939349,
        fid: 0,
        size: 23141276,
        vd: -44235,
        sr: 48000,
      },
      hr: {
        br: 5750477,
        fid: 0,
        size: 141665416,
        vd: -44696,
        sr: 192000,
      },
      a: null,
      cd: '01',
      no: 3,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 0,
      s_id: 0,
      mark: 17716748288,
      originCoverType: 1,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 34,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      mv: 0,
      mst: 9,
      cp: 0,
      rtype: 0,
      rurl: null,
      publishTime: 1571328000000,
    },
    {
      name: '逆光 (live)',
      id: 2116492838,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 2124,
          name: '陈楚生',
          tns: [],
          alias: [],
        },
        {
          id: 1030001,
          name: '周深',
          tns: [],
          alias: [],
        },
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: '',
      fee: 8,
      v: 5,
      crbt: null,
      cf: '',
      al: {
        id: 183008406,
        name: '声生不息·家年华 第7期',
        picUrl: 'https://p1.music.126.net/ZaTp-I6C2LzDZUYMlBST3g==/109951169251606657.jpg',
        tns: [],
        pic_str: '109951169251606657',
        pic: 109951169251606660,
      },
      dt: 285450,
      h: {
        br: 320000,
        fid: 0,
        size: 11420205,
        vd: -50484,
        sr: 48000,
      },
      m: {
        br: 192000,
        fid: 0,
        size: 6852141,
        vd: -47891,
        sr: 48000,
      },
      l: {
        br: 128000,
        fid: 0,
        size: 4568109,
        vd: -46202,
        sr: 48000,
      },
      sq: {
        br: 986985,
        fid: 0,
        size: 35216962,
        vd: -50581,
        sr: 48000,
      },
      hr: {
        br: 1756527,
        fid: 0,
        size: 62675232,
        vd: -50459,
        sr: 48000,
      },
      a: null,
      cd: '01',
      no: 4,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 0,
      s_id: 0,
      mark: 17716748288,
      originCoverType: 2,
      originSongSimpleData: {
        songId: 287057,
        name: '逆光',
        artists: [
          {
            id: 9272,
            name: '孙燕姿',
          },
        ],
        albumMeta: {
          id: 28520,
          name: '逆光',
        },
      },
      tagPicList: null,
      resourceState: true,
      version: 5,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 7001,
      mv: 0,
      publishTime: 0,
    },
    {
      name: '浮光',
      id: 2112196350,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 1030001,
          name: '周深',
          tns: [],
          alias: [],
        },
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: '',
      fee: 8,
      v: 4,
      crbt: null,
      cf: '',
      al: {
        id: 181957307,
        name: '浮光',
        picUrl: 'https://p1.music.126.net/zfdCU3cL-dsTqVvjmKPrjg==/109951169222823883.jpg',
        tns: [],
        pic_str: '109951169222823883',
        pic: 109951169222823890,
      },
      dt: 274544,
      h: {
        br: 320000,
        fid: 0,
        size: 10984365,
        vd: -38957,
        sr: 48000,
      },
      m: {
        br: 192000,
        fid: 0,
        size: 6590637,
        vd: -36374,
        sr: 48000,
      },
      l: {
        br: 128000,
        fid: 0,
        size: 4393773,
        vd: -34770,
        sr: 48000,
      },
      sq: {
        br: 905764,
        fid: 0,
        size: 31084056,
        vd: -39048,
        sr: 48000,
      },
      hr: {
        br: 1669851,
        fid: 0,
        size: 57306008,
        vd: -38924,
        sr: 48000,
      },
      a: null,
      cd: '01',
      no: 1,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 0,
      s_id: 0,
      mark: 17716748288,
      originCoverType: 1,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 4,
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
      publishTime: 1703952000000,
    },
    {
      name: '睫毛弯弯 (live)',
      id: 2114342609,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 9606,
          name: '王心凌',
          tns: [],
          alias: [],
        },
        {
          id: 1030001,
          name: '周深',
          tns: [],
          alias: [],
        },
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: '',
      fee: 8,
      v: 4,
      crbt: null,
      cf: '',
      al: {
        id: 182459848,
        name: '声生不息·家年华 第6期',
        picUrl: 'https://p2.music.126.net/n4eIVGjbiWIptb40Qdg2gQ==/109951169234819826.jpg',
        tns: [],
        pic_str: '109951169234819826',
        pic: 109951169234819820,
      },
      dt: 239144,
      h: {
        br: 320002,
        fid: 0,
        size: 9568365,
        vd: -34053,
        sr: 48000,
      },
      m: {
        br: 192002,
        fid: 0,
        size: 5741037,
        vd: -31469,
        sr: 48000,
      },
      l: {
        br: 128002,
        fid: 0,
        size: 3827373,
        vd: -29782,
        sr: 48000,
      },
      sq: {
        br: 967790,
        fid: 0,
        size: 28930226,
        vd: -34017,
        sr: 48000,
      },
      hr: {
        br: 1736913,
        fid: 0,
        size: 51921661,
        vd: -34022,
        sr: 48000,
      },
      a: null,
      cd: '01',
      no: 1,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 0,
      s_id: 0,
      mark: 17716748288,
      originCoverType: 2,
      originSongSimpleData: {
        songId: 1480380026,
        name: '睫毛弯弯',
        artists: [
          {
            id: 9606,
            name: '王心凌',
          },
        ],
        albumMeta: {
          id: 95629815,
          name: 'My! Cyndi!',
        },
      },
      tagPicList: null,
      resourceState: true,
      version: 4,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      mv: 0,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 7001,
      publishTime: 0,
    },
  ],
  playsongIndex: -1,
  playMode: 1, // 1: 列表循环  2: 单曲循环 3: 随机播放 4: 顺序播放
  randomNumber: -1,
}

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    changeCurrentSongAction(state, { payload }) {
      state.currentSong = payload
    },
    changeLyricsAction(state, { payload }) {
      state.lyrics = payload
    },
    changeLyricIndexAction(state, { payload }) {
      state.lyricIndex = payload
    },
    changePlaysongIndexAction(state, { payload }) {
      state.playsongIndex = payload
    },
    changePlaysongListAction(state, { payload }) {
      state.playsongList = payload
    },
    changePlayModeAction(state, { payload }) {
      state.playMode = payload
    },
  },
})
// 导出reducers
export const {
  changeCurrentSongAction,
  changeLyricsAction,
  changeLyricIndexAction,
  changePlaysongIndexAction,
  changePlaysongListAction,
  changePlayModeAction,
} = playerSlice.actions

export default playerSlice.reducer
