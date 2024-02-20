import React, { memo, startTransition, useEffect, useState, createContext } from 'react'
import type { FC, ReactNode } from 'react'
// import storage from 'store'
import classNames from 'classnames'
import { Modal } from 'antd'
import { ExclamationCircleFilled } from '@ant-design/icons'

import { appShallowEqual, useAppDispatch, useAppSelector } from '@/store'
import { changePlaysongListAction, fetchCurrentSongAction } from '@/store/modules/player'
import { formatterDuration } from '@/utils'
import { PlaySonglistWrapper } from './style'

interface IProps {
  children?: ReactNode
  currentSong?: any
}

const { confirm } = Modal

const ReachableContext = createContext<string | null>(null)
const UnreachableContext = createContext<string | null>(null)

const PlayerSonglist: FC<IProps> = (props) => {
  // 组件内数据
  const [checkedlist, setCheckedlist] = useState([] as number[]) // 已选中的列表
  const [checked, setChecked] = useState(false) // checked表示列表是否已选
  const [newlist, setNewlist] = useState([] as any[]) // 新的playlist
  const [modal, contextHolder] = Modal.useModal() // antd modal

  // 获取dispatch
  const dispatch = useAppDispatch()

  // 从 rtk 里拿数据
  const { playlist, playsongIndex } = useAppSelector(
    (state) => ({
      playlist: state.player.playsongList,
      playsongIndex: state.player.playsongIndex,
    }),
    appShallowEqual
  )
  // 获取某一首歌曲
  useEffect(() => {
    console.log(playsongIndex)
    // startTransition(() => {
    //   dispatch(fetchCurrentSongAction(2089113495))
    // })
    // 构造新的playlist结构
    const newList = playlist.map((item) => ({
      ...item,
      checked: false,
    }))
    // 设置新的playlist
    setNewlist(newList)
  }, [playlist, checked])

  // 组件内部事件
  // 点击播放歌曲
  function handlePlaySong(id: number) {
    dispatch(fetchCurrentSongAction(id))
  }

  // 列表点击选中事件
  function handleChecked(id: number) {
    const templist = newlist.filter((item) => {
      if (item.id === id) {
        item.checked = !item.checked
        return item
      }
    })

    templist.map((item) => {
      if (item.checked) {
        setCheckedlist([...checkedlist, item.id])
      } else {
        const filterlist = checkedlist.filter((cid) => cid !== id)
        setCheckedlist(filterlist)
      }
    })
  }

  // 删除单个
  const handleDelSingle = (id: number) => {
    confirm({
      title: '确定删除该歌曲吗',
      icon: <ExclamationCircleFilled />,
      content: '从列表内删除该歌曲',
      okText: '确定',
      cancelText: '取消',
      onOk() {
        // 提交新的rtk数据,过滤删除项
        const newList = playlist.filter((item) => item.id !== id)
        dispatch(changePlaysongListAction(newList))
      },
    })
  }

  // 删除多个
  const handleDelMulti = () => {
    if (!checkedlist.length) return
    confirm({
      title: '确定删除吗',
      icon: <ExclamationCircleFilled />,
      content: '从列表内删除选中歌曲',
      okText: '确定',
      cancelText: '取消',
      onOk() {
        // 提交新的rtk数据,过滤删除项
        const newList = playlist.filter((item) => !checkedlist.includes(item.id))
        dispatch(changePlaysongListAction(newList))
        // 清空checklist
        setCheckedlist([])
        // 重置checked
        setChecked(false)
      },
    })
  }

  // 选中列表所有项
  const handleMultiCheck = () => {
    // 保存check快照，方便在此函数中使用新值状态
    const newCheck = !checked
    // 设置新值
    setChecked(newCheck)
    // 根据新值做逻辑处理
    if (newCheck) {
      playlist.map((item) => {
        if (!checkedlist.includes(item.id)) {
          checkedlist.push(item.id)
        }
      })
    } else {
      setCheckedlist([])
    }
  }

  // 清空列表
  const handleClear = () => {
    confirm({
      title: '确定清空吗',
      icon: <ExclamationCircleFilled />,
      content: '清空列表内所有歌曲',
      okText: '确定',
      cancelText: '取消',
      onOk() {
        // 删除playlist列表
        dispatch(changePlaysongListAction([]))
        // 清空checklist
        setCheckedlist([])
        // 重置checked
        setChecked(false)
      },
    })
  }

  // 收藏
  const handleFavorite = (id: number) => {
    console.log(id)
  }

  return (
    <PlaySonglistWrapper>
      <div className="player_left">
        <div className="player_toolbar">
          <div className="toolbar_button">
            <i className="iconfont icon-shoucang"></i>
            <span>收藏</span>
          </div>
          {/* <div className="toolbar_button">
            <i className="iconfont icon-tianjia"></i>
            <span>添加到</span>
          </div> */}
          <div className="toolbar_button" onClick={handleDelMulti}>
            <i className="iconfont icon-shanchu"></i>
            <span>删除</span>
          </div>
          <div className="toolbar_button" onClick={handleClear}>
            {/* <i className="iconfont icon-shoucang"></i> */}
            <span>清空列表</span>
          </div>
        </div>
        <div className="player_songlist_box">
          <div className="player_songlist">
            <ul className="player_songlist_header">
              <li className={classNames('col1', 'songlist_header_checkbox', { checked: checked })} onClick={handleMultiCheck}>
                <input type="checkbox" />
              </li>
              <li className="col2 songlist_header_name">歌曲</li>
              <li className="col3 songlist_header_author">歌手</li>
              <li className="col4 songlist_header_time">时长</li>
            </ul>
            <ReachableContext.Provider value="Light">
              <ul className="player_songlist_content">
                {newlist.length ? (
                  newlist.map((item, index) => (
                    <li key={item.id} className={classNames('songlist_item', { active: playsongIndex === index })}>
                      <div
                        className={classNames('col1', 'songlist_item_checkbox', { checked: checkedlist.includes(item.id) })}
                        onClick={() => handleChecked(item.id)}
                      >
                        <input type="checkbox" />
                      </div>
                      <div className="songlist_item_number">{index + 1}</div>

                      <div className="col2 songlist_item_songname ellipsis">
                        {item.mv && <a target="_blank" className="songlist_item_songname_mv"></a>}
                        <span className="songlist_item_songname_text ellipsis" onClick={() => handlePlaySong(item.id)}>
                          <a className="">{item.name}</a>
                        </span>
                        <div className="songlist_item_songname_iconmenu">
                          <a onClick={() => handleFavorite(item.id)}>
                            <i className="iconfont icon-like"></i>
                          </a>
                          <a onClick={() => handlePlaySong(item.id)}>
                            <i className="iconfont icon-play_circle"></i>
                          </a>
                          <a>
                            <i className="iconfont icon-add_circle"></i>
                          </a>
                        </div>
                      </div>
                      <div className="col3 songlist_item_artist ellipsis">
                        <a href="/" target="_blank">
                          {item.ar[0]!.name}
                        </a>
                      </div>
                      <div className="col4 songlist_item_time">
                        <span className="sontlist_item_time_text">{formatterDuration(item.dt)}</span>
                        <i className="iconfont icon-delete-circle" onClick={() => handleDelSingle(item.id)}></i>
                      </div>
                    </li>
                  ))
                ) : (
                  <p className="player_songlist_empty">暂无歌曲</p>
                )}
              </ul>
            </ReachableContext.Provider>
            <UnreachableContext.Provider value="Bamboo" />
          </div>
        </div>
      </div>
      {contextHolder}
    </PlaySonglistWrapper>
  )
}

PlayerSonglist.displayName = 'PlayerSonglist'

export default memo(PlayerSonglist)
