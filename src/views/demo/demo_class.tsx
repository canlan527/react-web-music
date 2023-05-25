import React, { PureComponent } from 'react'

interface IProps {
  name: string
  age: string
}

interface IState {
  school: string
  height: number
}

interface ISnapShot {
  address: string
}

// 类的接口，第一个props接口，第二个State接口

class Demo2 extends PureComponent<IProps, IState, ISnapShot> {
  state = {
    school: '一中',
    height: 1.99,
  }

  getSnapshotBeforeUpdate() {
    return {
      address: '瑞典',
    }
  }

  // componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: ISnapShot | undefined): void {}

  // constructor(props: IProps) {
  //   super(props)
  //   this.state = {
  //     school: '一中',
  //     height: 1.88,
  //   }
  // }

  render() {
    return (
      <div>
        Demo2 - class
        {this.props.age}
        {this.props.name}
        {/* 不支持，可以先将state转any，但是这样很麻烦，也没有语法提示 */}
        {/* {(this.state as any).school} */}
        {/* 解决方法 */}
        {this.state.height}
        {this.state.school}
      </div>
    )
  }
}

export default Demo2
